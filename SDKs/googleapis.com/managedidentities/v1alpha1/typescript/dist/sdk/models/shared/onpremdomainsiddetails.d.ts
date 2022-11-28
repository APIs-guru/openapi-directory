import { SpeakeasyBase } from "../../../internal/utils";
export declare enum OnPremDomainSidDetailsSidFilteringStateEnum {
    SidFilteringStateUnspecified = "SID_FILTERING_STATE_UNSPECIFIED",
    Enabled = "ENABLED",
    Disabled = "DISABLED"
}
/**
 * OnPremDomainDetails is the message which contains details of on-prem domain which is trusted and needs to be migrated.
**/
export declare class OnPremDomainSidDetails extends SpeakeasyBase {
    name?: string;
    sidFilteringState?: OnPremDomainSidDetailsSidFilteringStateEnum;
}
