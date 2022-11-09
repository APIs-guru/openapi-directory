import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum DynamicGroupStatusStatusEnum {
    StatusUnspecified = "STATUS_UNSPECIFIED",
    UpToDate = "UP_TO_DATE",
    UpdatingMemberships = "UPDATING_MEMBERSHIPS",
    InvalidQuery = "INVALID_QUERY"
}
/**
 * The current status of a dynamic group along with timestamp.
**/
export declare class DynamicGroupStatus extends SpeakeasyBase {
    status?: DynamicGroupStatusStatusEnum;
    statusTime?: string;
}
