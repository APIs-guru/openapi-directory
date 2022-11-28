import { SpeakeasyBase } from "../../../internal/utils";
import { AccountStatus } from "./accountstatus";
export declare class AccountstatusesListResponse extends SpeakeasyBase {
    kind?: string;
    nextPageToken?: string;
    resources?: AccountStatus[];
}
