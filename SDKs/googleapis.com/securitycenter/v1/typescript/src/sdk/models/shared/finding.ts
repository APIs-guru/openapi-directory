import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Access } from "./access";
import { Compliance } from "./compliance";
import { Connection } from "./connection";
import { ContactDetails } from "./contactdetails";
import { Container } from "./container";
import { Database } from "./database";
import { Exfiltration } from "./exfiltration";
import { GoogleCloudSecuritycenterV1ExternalSystem } from "./googlecloudsecuritycenterv1externalsystem";
import { IamBinding } from "./iambinding";
import { Indicator } from "./indicator";
import { Kubernetes } from "./kubernetes";
import { MitreAttack } from "./mitreattack";
import { Process } from "./process";
import { SecurityMarks } from "./securitymarks";
import { Vulnerability } from "./vulnerability";

export enum FindingFindingClassEnum {
    FindingClassUnspecified = "FINDING_CLASS_UNSPECIFIED"
,    Threat = "THREAT"
,    Vulnerability = "VULNERABILITY"
,    Misconfiguration = "MISCONFIGURATION"
,    Observation = "OBSERVATION"
,    SccError = "SCC_ERROR"
}

export enum FindingMuteEnum {
    MuteUnspecified = "MUTE_UNSPECIFIED"
,    Muted = "MUTED"
,    Unmuted = "UNMUTED"
,    Undefined = "UNDEFINED"
}

export enum FindingSeverityEnum {
    SeverityUnspecified = "SEVERITY_UNSPECIFIED"
,    Critical = "CRITICAL"
,    High = "HIGH"
,    Medium = "MEDIUM"
,    Low = "LOW"
}

export enum FindingStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Active = "ACTIVE"
,    Inactive = "INACTIVE"
}


// Finding
/** 
 * Security Command Center finding. A finding is a record of assessment data like security, risk, health, or privacy, that is ingested into Security Command Center for presentation, notification, analysis, policy testing, and enforcement. For example, a cross-site scripting (XSS) vulnerability in an App Engine application is a finding.
**/
export class Finding extends SpeakeasyBase {
  @Metadata({ data: "json, name=access" })
  access?: Access;

  @Metadata({ data: "json, name=canonicalName" })
  canonicalName?: string;

  @Metadata({ data: "json, name=category" })
  category?: string;

  @Metadata({ data: "json, name=compliances", elemType: shared.Compliance })
  compliances?: Compliance[];

  @Metadata({ data: "json, name=connections", elemType: shared.Connection })
  connections?: Connection[];

  @Metadata({ data: "json, name=contacts", elemType: shared.ContactDetails })
  contacts?: Map<string, ContactDetails>;

  @Metadata({ data: "json, name=containers", elemType: shared.Container })
  containers?: Container[];

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=database" })
  database?: Database;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=eventTime" })
  eventTime?: string;

  @Metadata({ data: "json, name=exfiltration" })
  exfiltration?: Exfiltration;

  @Metadata({ data: "json, name=externalSystems", elemType: shared.GoogleCloudSecuritycenterV1ExternalSystem })
  externalSystems?: Map<string, GoogleCloudSecuritycenterV1ExternalSystem>;

  @Metadata({ data: "json, name=externalUri" })
  externalUri?: string;

  @Metadata({ data: "json, name=findingClass" })
  findingClass?: FindingFindingClassEnum;

  @Metadata({ data: "json, name=iamBindings", elemType: shared.IamBinding })
  iamBindings?: IamBinding[];

  @Metadata({ data: "json, name=indicator" })
  indicator?: Indicator;

  @Metadata({ data: "json, name=kubernetes" })
  kubernetes?: Kubernetes;

  @Metadata({ data: "json, name=mitreAttack" })
  mitreAttack?: MitreAttack;

  @Metadata({ data: "json, name=mute" })
  mute?: FindingMuteEnum;

  @Metadata({ data: "json, name=muteInitiator" })
  muteInitiator?: string;

  @Metadata({ data: "json, name=muteUpdateTime" })
  muteUpdateTime?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=nextSteps" })
  nextSteps?: string;

  @Metadata({ data: "json, name=parent" })
  parent?: string;

  @Metadata({ data: "json, name=parentDisplayName" })
  parentDisplayName?: string;

  @Metadata({ data: "json, name=processes", elemType: shared.Process })
  processes?: Process[];

  @Metadata({ data: "json, name=resourceName" })
  resourceName?: string;

  @Metadata({ data: "json, name=securityMarks" })
  securityMarks?: SecurityMarks;

  @Metadata({ data: "json, name=severity" })
  severity?: FindingSeverityEnum;

  @Metadata({ data: "json, name=sourceProperties" })
  sourceProperties?: Map<string, any>;

  @Metadata({ data: "json, name=state" })
  state?: FindingStateEnum;

  @Metadata({ data: "json, name=vulnerability" })
  vulnerability?: Vulnerability;
}
