import { SpeakeasyBase } from "../../../internal/utils";
export declare enum OrganizationStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE",
    DeleteRequested = "DELETE_REQUESTED"
}
/**
 * The root node in the resource hierarchy to which a particular entity's (a company, for example) resources belong.
**/
export declare class Organization extends SpeakeasyBase {
    createTime?: string;
    deleteTime?: string;
    directoryCustomerId?: string;
    displayName?: string;
    etag?: string;
    name?: string;
    state?: OrganizationStateEnum;
    updateTime?: string;
}
