import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleFirestoreAdminV1beta1IndexFieldModeEnum {
    ModeUnspecified = "MODE_UNSPECIFIED",
    Ascending = "ASCENDING",
    Descending = "DESCENDING",
    ArrayContains = "ARRAY_CONTAINS"
}
/**
 * A field of an index.
**/
export declare class GoogleFirestoreAdminV1beta1IndexField extends SpeakeasyBase {
    fieldPath?: string;
    mode?: GoogleFirestoreAdminV1beta1IndexFieldModeEnum;
}
