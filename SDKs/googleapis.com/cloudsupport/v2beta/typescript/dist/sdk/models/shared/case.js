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
import { CaseClassification } from "./caseclassification";
import { Actor } from "./actor";
import { ActorInput } from "./actor";
export var CasePriorityEnum;
(function (CasePriorityEnum) {
    CasePriorityEnum["PriorityUnspecified"] = "PRIORITY_UNSPECIFIED";
    CasePriorityEnum["P0"] = "P0";
    CasePriorityEnum["P1"] = "P1";
    CasePriorityEnum["P2"] = "P2";
    CasePriorityEnum["P3"] = "P3";
    CasePriorityEnum["P4"] = "P4";
})(CasePriorityEnum || (CasePriorityEnum = {}));
export var CaseSeverityEnum;
(function (CaseSeverityEnum) {
    CaseSeverityEnum["SeverityUnspecified"] = "SEVERITY_UNSPECIFIED";
    CaseSeverityEnum["S0"] = "S0";
    CaseSeverityEnum["S1"] = "S1";
    CaseSeverityEnum["S2"] = "S2";
    CaseSeverityEnum["S3"] = "S3";
    CaseSeverityEnum["S4"] = "S4";
})(CaseSeverityEnum || (CaseSeverityEnum = {}));
export var CaseStateEnum;
(function (CaseStateEnum) {
    CaseStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    CaseStateEnum["New"] = "NEW";
    CaseStateEnum["InProgressGoogleSupport"] = "IN_PROGRESS_GOOGLE_SUPPORT";
    CaseStateEnum["ActionRequired"] = "ACTION_REQUIRED";
    CaseStateEnum["SolutionProvided"] = "SOLUTION_PROVIDED";
    CaseStateEnum["Closed"] = "CLOSED";
})(CaseStateEnum || (CaseStateEnum = {}));
// Case
/**
 * A support case.
**/
var Case = /** @class */ (function (_super) {
    __extends(Case, _super);
    function Case() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=classification" }),
        __metadata("design:type", CaseClassification)
    ], Case.prototype, "classification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], Case.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creator" }),
        __metadata("design:type", Actor)
    ], Case.prototype, "creator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Case.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], Case.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=escalated" }),
        __metadata("design:type", Boolean)
    ], Case.prototype, "escalated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Case.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=priority" }),
        __metadata("design:type", String)
    ], Case.prototype, "priority", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=severity" }),
        __metadata("design:type", String)
    ], Case.prototype, "severity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], Case.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subscriberEmailAddresses" }),
        __metadata("design:type", Array)
    ], Case.prototype, "subscriberEmailAddresses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=testCase" }),
        __metadata("design:type", Boolean)
    ], Case.prototype, "testCase", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeZone" }),
        __metadata("design:type", String)
    ], Case.prototype, "timeZone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], Case.prototype, "updateTime", void 0);
    return Case;
}(SpeakeasyBase));
export { Case };
// CaseInput
/**
 * A support case.
**/
var CaseInput = /** @class */ (function (_super) {
    __extends(CaseInput, _super);
    function CaseInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=classification" }),
        __metadata("design:type", CaseClassification)
    ], CaseInput.prototype, "classification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creator" }),
        __metadata("design:type", ActorInput)
    ], CaseInput.prototype, "creator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], CaseInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], CaseInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=escalated" }),
        __metadata("design:type", Boolean)
    ], CaseInput.prototype, "escalated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CaseInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=priority" }),
        __metadata("design:type", String)
    ], CaseInput.prototype, "priority", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=severity" }),
        __metadata("design:type", String)
    ], CaseInput.prototype, "severity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subscriberEmailAddresses" }),
        __metadata("design:type", Array)
    ], CaseInput.prototype, "subscriberEmailAddresses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=testCase" }),
        __metadata("design:type", Boolean)
    ], CaseInput.prototype, "testCase", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeZone" }),
        __metadata("design:type", String)
    ], CaseInput.prototype, "timeZone", void 0);
    return CaseInput;
}(SpeakeasyBase));
export { CaseInput };
