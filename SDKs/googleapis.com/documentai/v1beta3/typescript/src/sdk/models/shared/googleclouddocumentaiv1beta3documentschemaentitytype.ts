import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta3DocumentSchemaEntityTypeEnumValues } from "./googleclouddocumentaiv1beta3documentschemaentitytypeenumvalues";
import { GoogleCloudDocumentaiV1beta3DocumentSchemaEntityTypeProperty } from "./googleclouddocumentaiv1beta3documentschemaentitytypeproperty";



// GoogleCloudDocumentaiV1beta3DocumentSchemaEntityType
/** 
 * EntityType is the wrapper of a label of the corresponding model with detailed attributes and limitations for entity-based processors. Multiple types can also compose a dependency tree to represent nested types.
**/
export class GoogleCloudDocumentaiV1beta3DocumentSchemaEntityType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=baseTypes" })
  baseTypes?: string[];

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=enumValues" })
  enumValues?: GoogleCloudDocumentaiV1beta3DocumentSchemaEntityTypeEnumValues;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=properties", elemType: GoogleCloudDocumentaiV1beta3DocumentSchemaEntityTypeProperty })
  properties?: GoogleCloudDocumentaiV1beta3DocumentSchemaEntityTypeProperty[];
}
