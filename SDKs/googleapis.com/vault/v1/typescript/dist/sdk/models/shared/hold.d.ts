import { SpeakeasyBase } from "../../../internal/utils";
import { HeldAccount } from "./heldaccount";
import { HeldOrgUnit } from "./heldorgunit";
import { CorpusQuery } from "./corpusquery";
export declare enum HoldCorpusEnum {
    CorpusTypeUnspecified = "CORPUS_TYPE_UNSPECIFIED",
    Drive = "DRIVE",
    Mail = "MAIL",
    Groups = "GROUPS",
    HangoutsChat = "HANGOUTS_CHAT",
    Voice = "VOICE"
}
/**
 * A hold. A hold prevents the specified Google Workspace service from purging data for specific accounts or all members of an organizational unit. To work with Vault resources, the account must have the [required Vault privileges] (https://support.google.com/vault/answer/2799699) and access to the matter. To access a matter, the account must have created the matter, have the matter shared with them, or have the **View All Matters** privilege.
**/
export declare class Hold extends SpeakeasyBase {
    accounts?: HeldAccount[];
    corpus?: HoldCorpusEnum;
    holdId?: string;
    name?: string;
    orgUnit?: HeldOrgUnit;
    query?: CorpusQuery;
    updateTime?: string;
}
