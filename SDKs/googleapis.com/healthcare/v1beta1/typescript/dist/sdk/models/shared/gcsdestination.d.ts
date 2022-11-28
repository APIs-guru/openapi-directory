import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GcsDestinationContentStructureEnum {
    ContentStructureUnspecified = "CONTENT_STRUCTURE_UNSPECIFIED",
    MessageJson = "MESSAGE_JSON"
}
export declare enum GcsDestinationMessageViewEnum {
    MessageViewUnspecified = "MESSAGE_VIEW_UNSPECIFIED",
    RawOnly = "RAW_ONLY",
    ParsedOnly = "PARSED_ONLY",
    Full = "FULL",
    SchematizedOnly = "SCHEMATIZED_ONLY",
    Basic = "BASIC"
}
/**
 * The Cloud Storage output destination. The Cloud Healthcare Service Agent requires the `roles/storage.objectAdmin` Cloud IAM roles on the Cloud Storage location.
**/
export declare class GcsDestination extends SpeakeasyBase {
    contentStructure?: GcsDestinationContentStructureEnum;
    messageView?: GcsDestinationMessageViewEnum;
    uriPrefix?: string;
}
