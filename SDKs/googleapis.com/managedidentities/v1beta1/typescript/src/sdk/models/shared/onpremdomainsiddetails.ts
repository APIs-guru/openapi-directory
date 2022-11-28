import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum OnPremDomainSidDetailsSidFilteringStateEnum {
    SidFilteringStateUnspecified = "SID_FILTERING_STATE_UNSPECIFIED",
    Enabled = "ENABLED",
    Disabled = "DISABLED"
}


// OnPremDomainSidDetails
/** 
 * OnPremDomainDetails is the message which contains details of on-prem domain which is trusted and needs to be migrated.
**/
export class OnPremDomainSidDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=sidFilteringState" })
  sidFilteringState?: OnPremDomainSidDetailsSidFilteringStateEnum;
}
