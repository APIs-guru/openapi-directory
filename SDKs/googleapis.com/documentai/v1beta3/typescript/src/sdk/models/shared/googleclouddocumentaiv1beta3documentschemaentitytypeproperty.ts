import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDocumentaiV1beta3PropertyMetadata } from "./googleclouddocumentaiv1beta3propertymetadata";

export enum GoogleCloudDocumentaiV1beta3DocumentSchemaEntityTypePropertyOccurrenceTypeEnum {
    OccurrenceTypeUnspecified = "OCCURRENCE_TYPE_UNSPECIFIED"
,    OptionalOnce = "OPTIONAL_ONCE"
,    OptionalMultiple = "OPTIONAL_MULTIPLE"
,    RequiredOnce = "REQUIRED_ONCE"
,    RequiredMultiple = "REQUIRED_MULTIPLE"
}


// GoogleCloudDocumentaiV1beta3DocumentSchemaEntityTypeProperty
/** 
 * Defines properties that can be part of the entity type.
**/
export class GoogleCloudDocumentaiV1beta3DocumentSchemaEntityTypeProperty extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=occurrenceType" })
  occurrenceType?: GoogleCloudDocumentaiV1beta3DocumentSchemaEntityTypePropertyOccurrenceTypeEnum;

  @Metadata({ data: "json, name=propertyMetadata" })
  propertyMetadata?: GoogleCloudDocumentaiV1beta3PropertyMetadata;

  @Metadata({ data: "json, name=valueType" })
  valueType?: string;
}
