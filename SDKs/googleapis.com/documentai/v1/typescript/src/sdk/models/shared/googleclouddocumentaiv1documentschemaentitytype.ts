import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1DocumentSchemaEntityTypeEnumValues } from "./googleclouddocumentaiv1documentschemaentitytypeenumvalues";
import { GoogleCloudDocumentaiV1DocumentSchemaEntityTypeProperty } from "./googleclouddocumentaiv1documentschemaentitytypeproperty";



// GoogleCloudDocumentaiV1DocumentSchemaEntityType
/** 
 * EntityType is the wrapper of a label of the corresponding model with detailed attributes and limitations for entity-based processors. Multiple types can also compose a dependency tree to represent nested types.
**/
export class GoogleCloudDocumentaiV1DocumentSchemaEntityType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=baseTypes" })
  baseTypes?: string[];

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=enumValues" })
  enumValues?: GoogleCloudDocumentaiV1DocumentSchemaEntityTypeEnumValues;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=properties", elemType: GoogleCloudDocumentaiV1DocumentSchemaEntityTypeProperty })
  properties?: GoogleCloudDocumentaiV1DocumentSchemaEntityTypeProperty[];
}
