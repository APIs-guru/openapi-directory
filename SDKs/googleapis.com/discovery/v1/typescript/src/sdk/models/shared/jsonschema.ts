import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { JsonSchema } from "./jsonschema";
import { JsonSchema } from "./jsonschema";
import { JsonSchema } from "./jsonschema";


// JsonSchemaAnnotations
/** 
 * Additional information about this property.
**/
export class JsonSchemaAnnotations extends SpeakeasyBase {
  @Metadata({ data: "json, name=required" })
  required?: string[];
}


export class JsonSchemaVariantMap extends SpeakeasyBase {
  @Metadata({ data: "json, name=$ref" })
  dollarRef?: string;

  @Metadata({ data: "json, name=type_value" })
  typeValue?: string;
}


// JsonSchemaVariant
/** 
 * In a variant data type, the value of one property is used to determine how to interpret the entire entity. Its value must exist in a map of descriminant values to schema names.
**/
export class JsonSchemaVariant extends SpeakeasyBase {
  @Metadata({ data: "json, name=discriminant" })
  discriminant?: string;

  @Metadata({ data: "json, name=map", elemType: shared.JsonSchemaVariantMap })
  map?: JsonSchemaVariantMap[];
}


export class JsonSchema extends SpeakeasyBase {
  @Metadata({ data: "json, name=$ref" })
  dollarRef?: string;

  @Metadata({ data: "json, name=additionalProperties" })
  additionalProperties?: JsonSchema;

  @Metadata({ data: "json, name=annotations" })
  annotations?: JsonSchemaAnnotations;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=enum" })
  enum?: string[];

  @Metadata({ data: "json, name=enumDescriptions" })
  enumDescriptions?: string[];

  @Metadata({ data: "json, name=format" })
  format?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=items" })
  items?: JsonSchema;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=maximum" })
  maximum?: string;

  @Metadata({ data: "json, name=minimum" })
  minimum?: string;

  @Metadata({ data: "json, name=pattern" })
  pattern?: string;

  @Metadata({ data: "json, name=properties", elemType: shared.JsonSchema })
  properties?: Map<string, JsonSchema>;

  @Metadata({ data: "json, name=readOnly" })
  readOnly?: boolean;

  @Metadata({ data: "json, name=repeated" })
  repeated?: boolean;

  @Metadata({ data: "json, name=required" })
  required?: boolean;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=variant" })
  variant?: JsonSchemaVariant;
}
