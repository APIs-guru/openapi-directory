import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDocumentaiV1beta3EntityTypeMetadata } from "./googleclouddocumentaiv1beta3entitytypemetadata";
import { GoogleCloudDocumentaiV1beta3DocumentSchemaEntityTypeEnumValues } from "./googleclouddocumentaiv1beta3documentschemaentitytypeenumvalues";
import { GoogleCloudDocumentaiV1beta3DocumentSchemaEntityTypeProperty } from "./googleclouddocumentaiv1beta3documentschemaentitytypeproperty";


// GoogleCloudDocumentaiV1beta3DocumentSchemaEntityType
/** 
 * EntityType is the wrapper of a label of the corresponding model with detailed attributes and limitations for entity-based processors. Multiple types can also compose a dependency tree to represent nested types.
**/
export class GoogleCloudDocumentaiV1beta3DocumentSchemaEntityType extends SpeakeasyBase {
  @Metadata({ data: "json, name=baseTypes" })
  baseTypes?: string[];

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=entityTypeMetadata" })
  entityTypeMetadata?: GoogleCloudDocumentaiV1beta3EntityTypeMetadata;

  @Metadata({ data: "json, name=enumValues" })
  enumValues?: GoogleCloudDocumentaiV1beta3DocumentSchemaEntityTypeEnumValues;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=properties", elemType: shared.GoogleCloudDocumentaiV1beta3DocumentSchemaEntityTypeProperty })
  properties?: GoogleCloudDocumentaiV1beta3DocumentSchemaEntityTypeProperty[];
}
