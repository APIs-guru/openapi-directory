import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ChannelAuditDetails
/** 
 * The auditDetails object encapsulates channel data that is relevant for YouTube Partners during the audit process.
**/
export class ChannelAuditDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=communityGuidelinesGoodStanding" })
  communityGuidelinesGoodStanding?: boolean;

  @Metadata({ data: "json, name=contentIdClaimsGoodStanding" })
  contentIdClaimsGoodStanding?: boolean;

  @Metadata({ data: "json, name=copyrightStrikesGoodStanding" })
  copyrightStrikesGoodStanding?: boolean;
}
