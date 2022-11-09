import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { HeldAccount } from "./heldaccount";
import { HeldOrgUnit } from "./heldorgunit";
import { CorpusQuery } from "./corpusquery";

export enum HoldCorpusEnum {
    CorpusTypeUnspecified = "CORPUS_TYPE_UNSPECIFIED"
,    Drive = "DRIVE"
,    Mail = "MAIL"
,    Groups = "GROUPS"
,    HangoutsChat = "HANGOUTS_CHAT"
,    Voice = "VOICE"
}


// Hold
/** 
 * A hold. A hold prevents the specified Google Workspace service from purging data for specific accounts or all members of an organizational unit. To work with Vault resources, the account must have the [required Vault privileges] (https://support.google.com/vault/answer/2799699) and access to the matter. To access a matter, the account must have created the matter, have the matter shared with them, or have the **View All Matters** privilege.
**/
export class Hold extends SpeakeasyBase {
  @Metadata({ data: "json, name=accounts", elemType: shared.HeldAccount })
  accounts?: HeldAccount[];

  @Metadata({ data: "json, name=corpus" })
  corpus?: HoldCorpusEnum;

  @Metadata({ data: "json, name=holdId" })
  holdId?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=orgUnit" })
  orgUnit?: HeldOrgUnit;

  @Metadata({ data: "json, name=query" })
  query?: CorpusQuery;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
