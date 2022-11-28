import { SpeakeasyBase } from "../../../internal/utils";
import { AccountStatusExampleItem } from "./accountstatusexampleitem";
export declare class AccountStatusDataQualityIssue extends SpeakeasyBase {
    country?: string;
    destination?: string;
    detail?: string;
    displayedValue?: string;
    exampleItems?: AccountStatusExampleItem[];
    id?: string;
    lastChecked?: string;
    location?: string;
    numItems?: number;
    severity?: string;
    submittedValue?: string;
}
