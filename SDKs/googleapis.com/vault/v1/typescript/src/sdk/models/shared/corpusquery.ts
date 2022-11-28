import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=driveQuery" })
  driveQuery?: HeldDriveQuery;

  @SpeakeasyMetadata({ data: "json, name=groupsQuery" })
  groupsQuery?: HeldGroupsQuery;

  @SpeakeasyMetadata({ data: "json, name=hangoutsChatQuery" })
  hangoutsChatQuery?: HeldHangoutsChatQuery;

  @SpeakeasyMetadata({ data: "json, name=mailQuery" })
  mailQuery?: HeldMailQuery;

  @SpeakeasyMetadata({ data: "json, name=voiceQuery" })
  voiceQuery?: HeldVoiceQuery;
}
