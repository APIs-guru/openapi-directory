import { SpeakeasyBase } from "../../../internal/utils";
import { Access } from "./access";
import { Compliance } from "./compliance";
import { Connection } from "./connection";
import { Container } from "./container";
import { Database } from "./database";
import { Exfiltration } from "./exfiltration";
import { File } from "./file";
import { IamBinding } from "./iambinding";
import { Indicator } from "./indicator";
import { Kubernetes } from "./kubernetes";
import { MitreAttack } from "./mitreattack";
import { Process } from "./process";
import { SecurityMarks } from "./securitymarks";
import { Vulnerability } from "./vulnerability";
import { ContactDetails } from "./contactdetails";
import { GoogleCloudSecuritycenterV1ExternalSystem } from "./googlecloudsecuritycenterv1externalsystem";
export declare enum FindingFindingClassEnum {
    FindingClassUnspecified = "FINDING_CLASS_UNSPECIFIED",
    Threat = "THREAT",
    Vulnerability = "VULNERABILITY",
    Misconfiguration = "MISCONFIGURATION",
    Observation = "OBSERVATION",
    SccError = "SCC_ERROR"
}
export declare enum FindingMuteEnum {
    MuteUnspecified = "MUTE_UNSPECIFIED",
    Muted = "MUTED",
    Unmuted = "UNMUTED",
    Undefined = "UNDEFINED"
}
export declare enum FindingSeverityEnum {
    SeverityUnspecified = "SEVERITY_UNSPECIFIED",
    Critical = "CRITICAL",
    High = "HIGH",
    Medium = "MEDIUM",
    Low = "LOW"
}
export declare enum FindingStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Inactive = "INACTIVE"
}
/**
 * Security Command Center finding. A finding is a record of assessment data like security, risk, health, or privacy, that is ingested into Security Command Center for presentation, notification, analysis, policy testing, and enforcement. For example, a cross-site scripting (XSS) vulnerability in an App Engine application is a finding.
**/
export declare class FindingInput extends SpeakeasyBase {
    access?: Access;
    canonicalName?: string;
    category?: string;
    compliances?: Compliance[];
    connections?: Connection[];
    containers?: Container[];
    createTime?: string;
    database?: Database;
    description?: string;
    eventTime?: string;
    exfiltration?: Exfiltration;
    externalUri?: string;
    files?: File[];
    findingClass?: FindingFindingClassEnum;
    iamBindings?: IamBinding[];
    indicator?: Indicator;
    kubernetes?: Kubernetes;
    mitreAttack?: MitreAttack;
    mute?: FindingMuteEnum;
    muteInitiator?: string;
    name?: string;
    nextSteps?: string;
    parent?: string;
    processes?: Process[];
    resourceName?: string;
    securityMarks?: SecurityMarks;
    severity?: FindingSeverityEnum;
    sourceProperties?: Map<string, any>;
    state?: FindingStateEnum;
    vulnerability?: Vulnerability;
}
/**
 * Security Command Center finding. A finding is a record of assessment data like security, risk, health, or privacy, that is ingested into Security Command Center for presentation, notification, analysis, policy testing, and enforcement. For example, a cross-site scripting (XSS) vulnerability in an App Engine application is a finding.
**/
export declare class Finding extends SpeakeasyBase {
    access?: Access;
    canonicalName?: string;
    category?: string;
    compliances?: Compliance[];
    connections?: Connection[];
    contacts?: Map<string, ContactDetails>;
    containers?: Container[];
    createTime?: string;
    database?: Database;
    description?: string;
    eventTime?: string;
    exfiltration?: Exfiltration;
    externalSystems?: Map<string, GoogleCloudSecuritycenterV1ExternalSystem>;
    externalUri?: string;
    files?: File[];
    findingClass?: FindingFindingClassEnum;
    iamBindings?: IamBinding[];
    indicator?: Indicator;
    kubernetes?: Kubernetes;
    mitreAttack?: MitreAttack;
    mute?: FindingMuteEnum;
    muteInitiator?: string;
    muteUpdateTime?: string;
    name?: string;
    nextSteps?: string;
    parent?: string;
    parentDisplayName?: string;
    processes?: Process[];
    resourceName?: string;
    securityMarks?: SecurityMarks;
    severity?: FindingSeverityEnum;
    sourceProperties?: Map<string, any>;
    state?: FindingStateEnum;
    vulnerability?: Vulnerability;
}
