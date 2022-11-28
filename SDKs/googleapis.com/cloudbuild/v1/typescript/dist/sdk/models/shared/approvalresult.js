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
export var ApprovalResultDecisionEnum;
(function (ApprovalResultDecisionEnum) {
    ApprovalResultDecisionEnum["DecisionUnspecified"] = "DECISION_UNSPECIFIED";
    ApprovalResultDecisionEnum["Approved"] = "APPROVED";
    ApprovalResultDecisionEnum["Rejected"] = "REJECTED";
})(ApprovalResultDecisionEnum || (ApprovalResultDecisionEnum = {}));
// ApprovalResult
/**
 * ApprovalResult describes the decision and associated metadata of a manual approval of a build.
**/
var ApprovalResult = /** @class */ (function (_super) {
    __extends(ApprovalResult, _super);
    function ApprovalResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=approvalTime" }),
        __metadata("design:type", String)
    ], ApprovalResult.prototype, "approvalTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=approverAccount" }),
        __metadata("design:type", String)
    ], ApprovalResult.prototype, "approverAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comment" }),
        __metadata("design:type", String)
    ], ApprovalResult.prototype, "comment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=decision" }),
        __metadata("design:type", String)
    ], ApprovalResult.prototype, "decision", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ApprovalResult.prototype, "url", void 0);
    return ApprovalResult;
}(SpeakeasyBase));
export { ApprovalResult };
// ApprovalResultInput
/**
 * ApprovalResult describes the decision and associated metadata of a manual approval of a build.
**/
var ApprovalResultInput = /** @class */ (function (_super) {
    __extends(ApprovalResultInput, _super);
    function ApprovalResultInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comment" }),
        __metadata("design:type", String)
    ], ApprovalResultInput.prototype, "comment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=decision" }),
        __metadata("design:type", String)
    ], ApprovalResultInput.prototype, "decision", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ApprovalResultInput.prototype, "url", void 0);
    return ApprovalResultInput;
}(SpeakeasyBase));
export { ApprovalResultInput };
