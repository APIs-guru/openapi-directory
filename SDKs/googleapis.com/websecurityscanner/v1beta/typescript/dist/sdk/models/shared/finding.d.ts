import { SpeakeasyBase } from "../../../internal/utils";
import { Form } from "./form";
import { OutdatedLibrary } from "./outdatedlibrary";
import { ViolatingResource } from "./violatingresource";
import { VulnerableHeaders } from "./vulnerableheaders";
import { VulnerableParameters } from "./vulnerableparameters";
import { Xss } from "./xss";
import { Xxe } from "./xxe";
export declare enum FindingSeverityEnum {
    SeverityUnspecified = "SEVERITY_UNSPECIFIED",
    Critical = "CRITICAL",
    High = "HIGH",
    Medium = "MEDIUM",
    Low = "LOW"
}
/**
 * A Finding resource represents a vulnerability instance identified during a ScanRun.
**/
export declare class Finding extends SpeakeasyBase {
    body?: string;
    description?: string;
    finalUrl?: string;
    findingType?: string;
    form?: Form;
    frameUrl?: string;
    fuzzedUrl?: string;
    httpMethod?: string;
    name?: string;
    outdatedLibrary?: OutdatedLibrary;
    reproductionUrl?: string;
    severity?: FindingSeverityEnum;
    trackingId?: string;
    violatingResource?: ViolatingResource;
    vulnerableHeaders?: VulnerableHeaders;
    vulnerableParameters?: VulnerableParameters;
    xss?: Xss;
    xxe?: Xxe;
}
