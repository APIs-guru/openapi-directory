import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum OnPremDomainSidDetailsSidFilteringStateEnum {
    SidFilteringStateUnspecified = "SID_FILTERING_STATE_UNSPECIFIED"
,    Enabled = "ENABLED"
,    Disabled = "DISABLED"
}


// OnPremDomainSidDetails
/** 
 * OnPremDomainDetails is the message which contains details of on-prem domain which is trusted and needs to be migrated.
**/
export class OnPremDomainSidDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=sidFilteringState" })
  sidFilteringState?: OnPremDomainSidDetailsSidFilteringStateEnum;
}
