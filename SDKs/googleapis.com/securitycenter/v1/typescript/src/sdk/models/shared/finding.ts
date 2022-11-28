import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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


export enum FindingFindingClassEnum {
    FindingClassUnspecified = "FINDING_CLASS_UNSPECIFIED",
    Threat = "THREAT",
    Vulnerability = "VULNERABILITY",
    Misconfiguration = "MISCONFIGURATION",
    Observation = "OBSERVATION",
    SccError = "SCC_ERROR"
}

export enum FindingMuteEnum {
    MuteUnspecified = "MUTE_UNSPECIFIED",
    Muted = "MUTED",
    Unmuted = "UNMUTED",
    Undefined = "UNDEFINED"
}

export enum FindingSeverityEnum {
    SeverityUnspecified = "SEVERITY_UNSPECIFIED",
    Critical = "CRITICAL",
    High = "HIGH",
    Medium = "MEDIUM",
    Low = "LOW"
}

export enum FindingStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Inactive = "INACTIVE"
}


// FindingInput
/** 
 * Security Command Center finding. A finding is a record of assessment data like security, risk, health, or privacy, that is ingested into Security Command Center for presentation, notification, analysis, policy testing, and enforcement. For example, a cross-site scripting (XSS) vulnerability in an App Engine application is a finding.
**/
export class FindingInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access" })
  access?: Access;

  @SpeakeasyMetadata({ data: "json, name=canonicalName" })
  canonicalName?: string;

  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: string;

  @SpeakeasyMetadata({ data: "json, name=compliances", elemType: Compliance })
  compliances?: Compliance[];

  @SpeakeasyMetadata({ data: "json, name=connections", elemType: Connection })
  connections?: Connection[];

  @SpeakeasyMetadata({ data: "json, name=containers", elemType: Container })
  containers?: Container[];

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=database" })
  database?: Database;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=eventTime" })
  eventTime?: string;

  @SpeakeasyMetadata({ data: "json, name=exfiltration" })
  exfiltration?: Exfiltration;

  @SpeakeasyMetadata({ data: "json, name=externalUri" })
  externalUri?: string;

  @SpeakeasyMetadata({ data: "json, name=files", elemType: File })
  files?: File[];

  @SpeakeasyMetadata({ data: "json, name=findingClass" })
  findingClass?: FindingFindingClassEnum;

  @SpeakeasyMetadata({ data: "json, name=iamBindings", elemType: IamBinding })
  iamBindings?: IamBinding[];

  @SpeakeasyMetadata({ data: "json, name=indicator" })
  indicator?: Indicator;

  @SpeakeasyMetadata({ data: "json, name=kubernetes" })
  kubernetes?: Kubernetes;

  @SpeakeasyMetadata({ data: "json, name=mitreAttack" })
  mitreAttack?: MitreAttack;

  @SpeakeasyMetadata({ data: "json, name=mute" })
  mute?: FindingMuteEnum;

  @SpeakeasyMetadata({ data: "json, name=muteInitiator" })
  muteInitiator?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=nextSteps" })
  nextSteps?: string;

  @SpeakeasyMetadata({ data: "json, name=parent" })
  parent?: string;

  @SpeakeasyMetadata({ data: "json, name=processes", elemType: Process })
  processes?: Process[];

  @SpeakeasyMetadata({ data: "json, name=resourceName" })
  resourceName?: string;

  @SpeakeasyMetadata({ data: "json, name=securityMarks" })
  securityMarks?: SecurityMarks;

  @SpeakeasyMetadata({ data: "json, name=severity" })
  severity?: FindingSeverityEnum;

  @SpeakeasyMetadata({ data: "json, name=sourceProperties" })
  sourceProperties?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: FindingStateEnum;

  @SpeakeasyMetadata({ data: "json, name=vulnerability" })
  vulnerability?: Vulnerability;
}


// Finding
/** 
 * Security Command Center finding. A finding is a record of assessment data like security, risk, health, or privacy, that is ingested into Security Command Center for presentation, notification, analysis, policy testing, and enforcement. For example, a cross-site scripting (XSS) vulnerability in an App Engine application is a finding.
**/
export class Finding extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access" })
  access?: Access;

  @SpeakeasyMetadata({ data: "json, name=canonicalName" })
  canonicalName?: string;

  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: string;

  @SpeakeasyMetadata({ data: "json, name=compliances", elemType: Compliance })
  compliances?: Compliance[];

  @SpeakeasyMetadata({ data: "json, name=connections", elemType: Connection })
  connections?: Connection[];

  @SpeakeasyMetadata({ data: "json, name=contacts", elemType: ContactDetails })
  contacts?: Map<string, ContactDetails>;

  @SpeakeasyMetadata({ data: "json, name=containers", elemType: Container })
  containers?: Container[];

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=database" })
  database?: Database;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=eventTime" })
  eventTime?: string;

  @SpeakeasyMetadata({ data: "json, name=exfiltration" })
  exfiltration?: Exfiltration;

  @SpeakeasyMetadata({ data: "json, name=externalSystems", elemType: GoogleCloudSecuritycenterV1ExternalSystem })
  externalSystems?: Map<string, GoogleCloudSecuritycenterV1ExternalSystem>;

  @SpeakeasyMetadata({ data: "json, name=externalUri" })
  externalUri?: string;

  @SpeakeasyMetadata({ data: "json, name=files", elemType: File })
  files?: File[];

  @SpeakeasyMetadata({ data: "json, name=findingClass" })
  findingClass?: FindingFindingClassEnum;

  @SpeakeasyMetadata({ data: "json, name=iamBindings", elemType: IamBinding })
  iamBindings?: IamBinding[];

  @SpeakeasyMetadata({ data: "json, name=indicator" })
  indicator?: Indicator;

  @SpeakeasyMetadata({ data: "json, name=kubernetes" })
  kubernetes?: Kubernetes;

  @SpeakeasyMetadata({ data: "json, name=mitreAttack" })
  mitreAttack?: MitreAttack;

  @SpeakeasyMetadata({ data: "json, name=mute" })
  mute?: FindingMuteEnum;

  @SpeakeasyMetadata({ data: "json, name=muteInitiator" })
  muteInitiator?: string;

  @SpeakeasyMetadata({ data: "json, name=muteUpdateTime" })
  muteUpdateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=nextSteps" })
  nextSteps?: string;

  @SpeakeasyMetadata({ data: "json, name=parent" })
  parent?: string;

  @SpeakeasyMetadata({ data: "json, name=parentDisplayName" })
  parentDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=processes", elemType: Process })
  processes?: Process[];

  @SpeakeasyMetadata({ data: "json, name=resourceName" })
  resourceName?: string;

  @SpeakeasyMetadata({ data: "json, name=securityMarks" })
  securityMarks?: SecurityMarks;

  @SpeakeasyMetadata({ data: "json, name=severity" })
  severity?: FindingSeverityEnum;

  @SpeakeasyMetadata({ data: "json, name=sourceProperties" })
  sourceProperties?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: FindingStateEnum;

  @SpeakeasyMetadata({ data: "json, name=vulnerability" })
  vulnerability?: Vulnerability;
}
