import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccountStatusItemLevelIssue } from "./accountstatusitemlevelissue";
import { AccountStatusStatistics } from "./accountstatusstatistics";



export class AccountStatusProducts extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channel" })
  channel?: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=destination" })
  destination?: string;

  @SpeakeasyMetadata({ data: "json, name=itemLevelIssues", elemType: AccountStatusItemLevelIssue })
  itemLevelIssues?: AccountStatusItemLevelIssue[];

  @SpeakeasyMetadata({ data: "json, name=statistics" })
  statistics?: AccountStatusStatistics;
}
