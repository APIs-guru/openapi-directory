import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ThirdPartyLinkStatusLinkStatusEnum {
    Unknown = "unknown",
    Failed = "failed",
    Pending = "pending",
    Linked = "linked"
}


// ThirdPartyLinkStatus
/** 
 * The third-party link status object contains information about the status of the link.
**/
export class ThirdPartyLinkStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=linkStatus" })
  linkStatus?: ThirdPartyLinkStatusLinkStatusEnum;
}
