import { SpeakeasyBase } from "../../../internal/utils";
import { ApplicationStatusCode } from "./applicationstatuscode";
import { Qualification } from "./qualification";
import { Subactivity } from "./subactivity";
export declare class ApplicationList extends SpeakeasyBase {
    certAuthority?: string;
    certificate?: string;
    currentStatus?: ApplicationStatusCode;
    displayStatus?: string;
    qualifications?: Qualification[];
    removalDate?: Date;
    subactivity: Subactivity;
}
