var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
export var FindingFindingClassEnum;
(function (FindingFindingClassEnum) {
    FindingFindingClassEnum["FindingClassUnspecified"] = "FINDING_CLASS_UNSPECIFIED";
    FindingFindingClassEnum["Threat"] = "THREAT";
    FindingFindingClassEnum["Vulnerability"] = "VULNERABILITY";
    FindingFindingClassEnum["Misconfiguration"] = "MISCONFIGURATION";
    FindingFindingClassEnum["Observation"] = "OBSERVATION";
    FindingFindingClassEnum["SccError"] = "SCC_ERROR";
})(FindingFindingClassEnum || (FindingFindingClassEnum = {}));
export var FindingMuteEnum;
(function (FindingMuteEnum) {
    FindingMuteEnum["MuteUnspecified"] = "MUTE_UNSPECIFIED";
    FindingMuteEnum["Muted"] = "MUTED";
    FindingMuteEnum["Unmuted"] = "UNMUTED";
    FindingMuteEnum["Undefined"] = "UNDEFINED";
})(FindingMuteEnum || (FindingMuteEnum = {}));
export var FindingSeverityEnum;
(function (FindingSeverityEnum) {
    FindingSeverityEnum["SeverityUnspecified"] = "SEVERITY_UNSPECIFIED";
    FindingSeverityEnum["Critical"] = "CRITICAL";
    FindingSeverityEnum["High"] = "HIGH";
    FindingSeverityEnum["Medium"] = "MEDIUM";
    FindingSeverityEnum["Low"] = "LOW";
})(FindingSeverityEnum || (FindingSeverityEnum = {}));
export var FindingStateEnum;
(function (FindingStateEnum) {
    FindingStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    FindingStateEnum["Active"] = "ACTIVE";
    FindingStateEnum["Inactive"] = "INACTIVE";
})(FindingStateEnum || (FindingStateEnum = {}));
// FindingInput
/**
 * Security Command Center finding. A finding is a record of assessment data like security, risk, health, or privacy, that is ingested into Security Command Center for presentation, notification, analysis, policy testing, and enforcement. For example, a cross-site scripting (XSS) vulnerability in an App Engine application is a finding.
**/
var FindingInput = /** @class */ (function (_super) {
    __extends(FindingInput, _super);
    function FindingInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=access" }),
        __metadata("design:type", Access)
    ], FindingInput.prototype, "access", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canonicalName" }),
        __metadata("design:type", String)
    ], FindingInput.prototype, "canonicalName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=category" }),
        __metadata("design:type", String)
    ], FindingInput.prototype, "category", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=compliances", elemType: Compliance }),
        __metadata("design:type", Array)
    ], FindingInput.prototype, "compliances", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connections", elemType: Connection }),
        __metadata("design:type", Array)
    ], FindingInput.prototype, "connections", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=containers", elemType: Container }),
        __metadata("design:type", Array)
    ], FindingInput.prototype, "containers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], FindingInput.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=database" }),
        __metadata("design:type", Database)
    ], FindingInput.prototype, "database", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], FindingInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventTime" }),
        __metadata("design:type", String)
    ], FindingInput.prototype, "eventTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exfiltration" }),
        __metadata("design:type", Exfiltration)
    ], FindingInput.prototype, "exfiltration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=externalUri" }),
        __metadata("design:type", String)
    ], FindingInput.prototype, "externalUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=files", elemType: File }),
        __metadata("design:type", Array)
    ], FindingInput.prototype, "files", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=findingClass" }),
        __metadata("design:type", String)
    ], FindingInput.prototype, "findingClass", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=iamBindings", elemType: IamBinding }),
        __metadata("design:type", Array)
    ], FindingInput.prototype, "iamBindings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=indicator" }),
        __metadata("design:type", Indicator)
    ], FindingInput.prototype, "indicator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kubernetes" }),
        __metadata("design:type", Kubernetes)
    ], FindingInput.prototype, "kubernetes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mitreAttack" }),
        __metadata("design:type", MitreAttack)
    ], FindingInput.prototype, "mitreAttack", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mute" }),
        __metadata("design:type", String)
    ], FindingInput.prototype, "mute", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=muteInitiator" }),
        __metadata("design:type", String)
    ], FindingInput.prototype, "muteInitiator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], FindingInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nextSteps" }),
        __metadata("design:type", String)
    ], FindingInput.prototype, "nextSteps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parent" }),
        __metadata("design:type", String)
    ], FindingInput.prototype, "parent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=processes", elemType: Process }),
        __metadata("design:type", Array)
    ], FindingInput.prototype, "processes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceName" }),
        __metadata("design:type", String)
    ], FindingInput.prototype, "resourceName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=securityMarks" }),
        __metadata("design:type", SecurityMarks)
    ], FindingInput.prototype, "securityMarks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=severity" }),
        __metadata("design:type", String)
    ], FindingInput.prototype, "severity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sourceProperties" }),
        __metadata("design:type", Map)
    ], FindingInput.prototype, "sourceProperties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], FindingInput.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vulnerability" }),
        __metadata("design:type", Vulnerability)
    ], FindingInput.prototype, "vulnerability", void 0);
    return FindingInput;
}(SpeakeasyBase));
export { FindingInput };
// Finding
/**
 * Security Command Center finding. A finding is a record of assessment data like security, risk, health, or privacy, that is ingested into Security Command Center for presentation, notification, analysis, policy testing, and enforcement. For example, a cross-site scripting (XSS) vulnerability in an App Engine application is a finding.
**/
var Finding = /** @class */ (function (_super) {
    __extends(Finding, _super);
    function Finding() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=access" }),
        __metadata("design:type", Access)
    ], Finding.prototype, "access", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canonicalName" }),
        __metadata("design:type", String)
    ], Finding.prototype, "canonicalName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=category" }),
        __metadata("design:type", String)
    ], Finding.prototype, "category", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=compliances", elemType: Compliance }),
        __metadata("design:type", Array)
    ], Finding.prototype, "compliances", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connections", elemType: Connection }),
        __metadata("design:type", Array)
    ], Finding.prototype, "connections", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contacts", elemType: ContactDetails }),
        __metadata("design:type", Map)
    ], Finding.prototype, "contacts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=containers", elemType: Container }),
        __metadata("design:type", Array)
    ], Finding.prototype, "containers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], Finding.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=database" }),
        __metadata("design:type", Database)
    ], Finding.prototype, "database", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Finding.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventTime" }),
        __metadata("design:type", String)
    ], Finding.prototype, "eventTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exfiltration" }),
        __metadata("design:type", Exfiltration)
    ], Finding.prototype, "exfiltration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=externalSystems", elemType: GoogleCloudSecuritycenterV1ExternalSystem }),
        __metadata("design:type", Map)
    ], Finding.prototype, "externalSystems", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=externalUri" }),
        __metadata("design:type", String)
    ], Finding.prototype, "externalUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=files", elemType: File }),
        __metadata("design:type", Array)
    ], Finding.prototype, "files", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=findingClass" }),
        __metadata("design:type", String)
    ], Finding.prototype, "findingClass", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=iamBindings", elemType: IamBinding }),
        __metadata("design:type", Array)
    ], Finding.prototype, "iamBindings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=indicator" }),
        __metadata("design:type", Indicator)
    ], Finding.prototype, "indicator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kubernetes" }),
        __metadata("design:type", Kubernetes)
    ], Finding.prototype, "kubernetes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mitreAttack" }),
        __metadata("design:type", MitreAttack)
    ], Finding.prototype, "mitreAttack", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mute" }),
        __metadata("design:type", String)
    ], Finding.prototype, "mute", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=muteInitiator" }),
        __metadata("design:type", String)
    ], Finding.prototype, "muteInitiator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=muteUpdateTime" }),
        __metadata("design:type", String)
    ], Finding.prototype, "muteUpdateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Finding.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nextSteps" }),
        __metadata("design:type", String)
    ], Finding.prototype, "nextSteps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parent" }),
        __metadata("design:type", String)
    ], Finding.prototype, "parent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parentDisplayName" }),
        __metadata("design:type", String)
    ], Finding.prototype, "parentDisplayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=processes", elemType: Process }),
        __metadata("design:type", Array)
    ], Finding.prototype, "processes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceName" }),
        __metadata("design:type", String)
    ], Finding.prototype, "resourceName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=securityMarks" }),
        __metadata("design:type", SecurityMarks)
    ], Finding.prototype, "securityMarks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=severity" }),
        __metadata("design:type", String)
    ], Finding.prototype, "severity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sourceProperties" }),
        __metadata("design:type", Map)
    ], Finding.prototype, "sourceProperties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], Finding.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vulnerability" }),
        __metadata("design:type", Vulnerability)
    ], Finding.prototype, "vulnerability", void 0);
    return Finding;
}(SpeakeasyBase));
export { Finding };
