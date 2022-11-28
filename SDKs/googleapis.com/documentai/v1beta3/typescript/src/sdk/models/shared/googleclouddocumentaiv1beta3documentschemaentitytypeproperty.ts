import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudDocumentaiV1beta3DocumentSchemaEntityTypePropertyOccurrenceTypeEnum {
    OccurrenceTypeUnspecified = "OCCURRENCE_TYPE_UNSPECIFIED",
    OptionalOnce = "OPTIONAL_ONCE",
    OptionalMultiple = "OPTIONAL_MULTIPLE",
    RequiredOnce = "REQUIRED_ONCE",
    RequiredMultiple = "REQUIRED_MULTIPLE"
}


// GoogleCloudDocumentaiV1beta3DocumentSchemaEntityTypeProperty
/** 
 * Defines properties that can be part of the entity type.
**/
export class GoogleCloudDocumentaiV1beta3DocumentSchemaEntityTypeProperty extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=occurrenceType" })
  occurrenceType?: GoogleCloudDocumentaiV1beta3DocumentSchemaEntityTypePropertyOccurrenceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=valueType" })
  valueType?: string;
}
