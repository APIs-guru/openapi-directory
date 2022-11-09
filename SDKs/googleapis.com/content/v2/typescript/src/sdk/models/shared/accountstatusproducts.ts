import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AccountStatusItemLevelIssue } from "./accountstatusitemlevelissue";
import { AccountStatusStatistics } from "./accountstatusstatistics";


export class AccountStatusProducts extends SpeakeasyBase {
  @Metadata({ data: "json, name=channel" })
  channel?: string;

  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=destination" })
  destination?: string;

  @Metadata({ data: "json, name=itemLevelIssues", elemType: shared.AccountStatusItemLevelIssue })
  itemLevelIssues?: AccountStatusItemLevelIssue[];

  @Metadata({ data: "json, name=statistics" })
  statistics?: AccountStatusStatistics;
}
