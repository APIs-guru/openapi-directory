import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDocumentaiV1EntityTypeMetadata } from "./googleclouddocumentaiv1entitytypemetadata";
import { GoogleCloudDocumentaiV1DocumentSchemaEntityTypeEnumValues } from "./googleclouddocumentaiv1documentschemaentitytypeenumvalues";
import { GoogleCloudDocumentaiV1DocumentSchemaEntityTypeProperty } from "./googleclouddocumentaiv1documentschemaentitytypeproperty";


// GoogleCloudDocumentaiV1DocumentSchemaEntityType
/** 
 * EntityType is the wrapper of a label of the corresponding model with detailed attributes and limitations for entity-based processors. Multiple types can also compose a dependency tree to represent nested types.
**/
export class GoogleCloudDocumentaiV1DocumentSchemaEntityType extends SpeakeasyBase {
  @Metadata({ data: "json, name=baseTypes" })
  baseTypes?: string[];

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=entityTypeMetadata" })
  entityTypeMetadata?: GoogleCloudDocumentaiV1EntityTypeMetadata;

  @Metadata({ data: "json, name=enumValues" })
  enumValues?: GoogleCloudDocumentaiV1DocumentSchemaEntityTypeEnumValues;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=properties", elemType: shared.GoogleCloudDocumentaiV1DocumentSchemaEntityTypeProperty })
  properties?: GoogleCloudDocumentaiV1DocumentSchemaEntityTypeProperty[];
}
