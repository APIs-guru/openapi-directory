import { SpeakeasyBase } from "../../../internal/utils/utils";
import { HeldDriveQuery } from "./helddrivequery";
import { HeldGroupsQuery } from "./heldgroupsquery";
import { HeldHangoutsChatQuery } from "./heldhangoutschatquery";
import { HeldMailQuery } from "./heldmailquery";
import { HeldVoiceQuery } from "./heldvoicequery";
/**
 * Service-specific options for holds.
**/
export declare class CorpusQuery extends SpeakeasyBase {
    driveQuery?: HeldDriveQuery;
    groupsQuery?: HeldGroupsQuery;
    hangoutsChatQuery?: HeldHangoutsChatQuery;
    mailQuery?: HeldMailQuery;
    voiceQuery?: HeldVoiceQuery;
}
