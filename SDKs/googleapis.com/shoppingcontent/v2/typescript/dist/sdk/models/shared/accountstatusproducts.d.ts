import { SpeakeasyBase } from "../../../internal/utils";
import { AccountStatusItemLevelIssue } from "./accountstatusitemlevelissue";
import { AccountStatusStatistics } from "./accountstatusstatistics";
export declare class AccountStatusProducts extends SpeakeasyBase {
    channel?: string;
    country?: string;
    destination?: string;
    itemLevelIssues?: AccountStatusItemLevelIssue[];
    statistics?: AccountStatusStatistics;
}
