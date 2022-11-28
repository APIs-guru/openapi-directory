import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleFirestoreAdminV1IndexFieldArrayConfigEnum {
    ArrayConfigUnspecified = "ARRAY_CONFIG_UNSPECIFIED",
    Contains = "CONTAINS"
}
export declare enum GoogleFirestoreAdminV1IndexFieldOrderEnum {
    OrderUnspecified = "ORDER_UNSPECIFIED",
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}
/**
 * A field in an index. The field_path describes which field is indexed, the value_mode describes how the field value is indexed.
**/
export declare class GoogleFirestoreAdminV1IndexField extends SpeakeasyBase {
    arrayConfig?: GoogleFirestoreAdminV1IndexFieldArrayConfigEnum;
    fieldPath?: string;
    order?: GoogleFirestoreAdminV1IndexFieldOrderEnum;
}
