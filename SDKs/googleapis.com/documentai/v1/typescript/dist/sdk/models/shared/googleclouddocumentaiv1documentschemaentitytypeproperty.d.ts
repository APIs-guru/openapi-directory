import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudDocumentaiV1DocumentSchemaEntityTypePropertyOccurrenceTypeEnum {
    OccurrenceTypeUnspecified = "OCCURRENCE_TYPE_UNSPECIFIED",
    OptionalOnce = "OPTIONAL_ONCE",
    OptionalMultiple = "OPTIONAL_MULTIPLE",
    RequiredOnce = "REQUIRED_ONCE",
    RequiredMultiple = "REQUIRED_MULTIPLE"
}
/**
 * Defines properties that can be part of the entity type.
**/
export declare class GoogleCloudDocumentaiV1DocumentSchemaEntityTypeProperty extends SpeakeasyBase {
    name?: string;
    occurrenceType?: GoogleCloudDocumentaiV1DocumentSchemaEntityTypePropertyOccurrenceTypeEnum;
    valueType?: string;
}
