import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { HeldDriveQuery } from "./helddrivequery";
import { HeldGroupsQuery } from "./heldgroupsquery";
import { HeldHangoutsChatQuery } from "./heldhangoutschatquery";
import { HeldMailQuery } from "./heldmailquery";
import { HeldVoiceQuery } from "./heldvoicequery";


// CorpusQuery
/** 
 * Service-specific options for holds.
**/
export class CorpusQuery extends SpeakeasyBase {
  @Metadata({ data: "json, name=driveQuery" })
  driveQuery?: HeldDriveQuery;

  @Metadata({ data: "json, name=groupsQuery" })
  groupsQuery?: HeldGroupsQuery;

  @Metadata({ data: "json, name=hangoutsChatQuery" })
  hangoutsChatQuery?: HeldHangoutsChatQuery;

  @Metadata({ data: "json, name=mailQuery" })
  mailQuery?: HeldMailQuery;

  @Metadata({ data: "json, name=voiceQuery" })
  voiceQuery?: HeldVoiceQuery;
}
