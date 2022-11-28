import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// JsonSchemaAnnotations
/** 
 * Additional information about this property.
**/
export class JsonSchemaAnnotations extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=required" })
  required?: string[];
}


export class JsonSchemaVariantMap extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=$ref" })
  dollarRef?: string;

  @SpeakeasyMetadata({ data: "json, name=type_value" })
  typeValue?: string;
}


// JsonSchemaVariant
/** 
 * In a variant data type, the value of one property is used to determine how to interpret the entire entity. Its value must exist in a map of descriminant values to schema names.
**/
export class JsonSchemaVariant extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=discriminant" })
  discriminant?: string;

  @SpeakeasyMetadata({ data: "json, name=map", elemType: JsonSchemaVariantMap })
  map?: JsonSchemaVariantMap[];
}


export class JsonSchema extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=$ref" })
  dollarRef?: string;

  @SpeakeasyMetadata({ data: "json, name=additionalProperties" })
  additionalProperties?: JsonSchema;

  @SpeakeasyMetadata({ data: "json, name=annotations" })
  annotations?: JsonSchemaAnnotations;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=enum" })
  enum?: string[];

  @SpeakeasyMetadata({ data: "json, name=enumDescriptions" })
  enumDescriptions?: string[];

  @SpeakeasyMetadata({ data: "json, name=format" })
  format?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=items" })
  items?: JsonSchema;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=maximum" })
  maximum?: string;

  @SpeakeasyMetadata({ data: "json, name=minimum" })
  minimum?: string;

  @SpeakeasyMetadata({ data: "json, name=pattern" })
  pattern?: string;

  @SpeakeasyMetadata({ data: "json, name=properties", elemType: JsonSchema })
  properties?: Map<string, JsonSchema>;

  @SpeakeasyMetadata({ data: "json, name=readOnly" })
  readOnly?: boolean;

  @SpeakeasyMetadata({ data: "json, name=repeated" })
  repeated?: boolean;

  @SpeakeasyMetadata({ data: "json, name=required" })
  required?: boolean;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=variant" })
  variant?: JsonSchemaVariant;
}
