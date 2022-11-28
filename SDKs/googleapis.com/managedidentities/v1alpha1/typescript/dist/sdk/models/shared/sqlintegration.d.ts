import { SpeakeasyBase } from "../../../internal/utils";
export declare enum SqlIntegrationStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Deleting = "DELETING",
    Ready = "READY"
}
/**
 * Represents the SQL instance integrated with AD.
**/
export declare class SqlIntegration extends SpeakeasyBase {
    createTime?: string;
    name?: string;
    sqlInstance?: string;
    state?: SqlIntegrationStateEnum;
    updateTime?: string;
}
