import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ChannelAuditDetails
/** 
 * The auditDetails object encapsulates channel data that is relevant for YouTube Partners during the audit process.
**/
export class ChannelAuditDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=communityGuidelinesGoodStanding" })
  communityGuidelinesGoodStanding?: boolean;

  @SpeakeasyMetadata({ data: "json, name=contentIdClaimsGoodStanding" })
  contentIdClaimsGoodStanding?: boolean;

  @SpeakeasyMetadata({ data: "json, name=copyrightStrikesGoodStanding" })
  copyrightStrikesGoodStanding?: boolean;
}
