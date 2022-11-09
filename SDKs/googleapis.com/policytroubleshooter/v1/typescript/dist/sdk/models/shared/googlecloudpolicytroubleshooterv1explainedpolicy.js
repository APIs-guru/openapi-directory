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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleIamV1Policy } from "./googleiamv1policy";
export var GoogleCloudPolicytroubleshooterV1ExplainedPolicyAccessEnum;
(function (GoogleCloudPolicytroubleshooterV1ExplainedPolicyAccessEnum) {
    GoogleCloudPolicytroubleshooterV1ExplainedPolicyAccessEnum["AccessStateUnspecified"] = "ACCESS_STATE_UNSPECIFIED";
    GoogleCloudPolicytroubleshooterV1ExplainedPolicyAccessEnum["Granted"] = "GRANTED";
    GoogleCloudPolicytroubleshooterV1ExplainedPolicyAccessEnum["NotGranted"] = "NOT_GRANTED";
    GoogleCloudPolicytroubleshooterV1ExplainedPolicyAccessEnum["UnknownConditional"] = "UNKNOWN_CONDITIONAL";
    GoogleCloudPolicytroubleshooterV1ExplainedPolicyAccessEnum["UnknownInfoDenied"] = "UNKNOWN_INFO_DENIED";
})(GoogleCloudPolicytroubleshooterV1ExplainedPolicyAccessEnum || (GoogleCloudPolicytroubleshooterV1ExplainedPolicyAccessEnum = {}));
export var GoogleCloudPolicytroubleshooterV1ExplainedPolicyRelevanceEnum;
(function (GoogleCloudPolicytroubleshooterV1ExplainedPolicyRelevanceEnum) {
    GoogleCloudPolicytroubleshooterV1ExplainedPolicyRelevanceEnum["HeuristicRelevanceUnspecified"] = "HEURISTIC_RELEVANCE_UNSPECIFIED";
    GoogleCloudPolicytroubleshooterV1ExplainedPolicyRelevanceEnum["Normal"] = "NORMAL";
    GoogleCloudPolicytroubleshooterV1ExplainedPolicyRelevanceEnum["High"] = "HIGH";
})(GoogleCloudPolicytroubleshooterV1ExplainedPolicyRelevanceEnum || (GoogleCloudPolicytroubleshooterV1ExplainedPolicyRelevanceEnum = {}));
// GoogleCloudPolicytroubleshooterV1ExplainedPolicy
/**
 * Details about how a specific IAM Policy contributed to the access check.
**/
var GoogleCloudPolicytroubleshooterV1ExplainedPolicy = /** @class */ (function (_super) {
    __extends(GoogleCloudPolicytroubleshooterV1ExplainedPolicy, _super);
    function GoogleCloudPolicytroubleshooterV1ExplainedPolicy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=access" }),
        __metadata("design:type", String)
    ], GoogleCloudPolicytroubleshooterV1ExplainedPolicy.prototype, "access", void 0);
    __decorate([
        Metadata({ data: "json, name=bindingExplanations", elemType: shared.GoogleCloudPolicytroubleshooterV1BindingExplanation }),
        __metadata("design:type", Array)
    ], GoogleCloudPolicytroubleshooterV1ExplainedPolicy.prototype, "bindingExplanations", void 0);
    __decorate([
        Metadata({ data: "json, name=fullResourceName" }),
        __metadata("design:type", String)
    ], GoogleCloudPolicytroubleshooterV1ExplainedPolicy.prototype, "fullResourceName", void 0);
    __decorate([
        Metadata({ data: "json, name=policy" }),
        __metadata("design:type", GoogleIamV1Policy)
    ], GoogleCloudPolicytroubleshooterV1ExplainedPolicy.prototype, "policy", void 0);
    __decorate([
        Metadata({ data: "json, name=relevance" }),
        __metadata("design:type", String)
    ], GoogleCloudPolicytroubleshooterV1ExplainedPolicy.prototype, "relevance", void 0);
    return GoogleCloudPolicytroubleshooterV1ExplainedPolicy;
}(SpeakeasyBase));
export { GoogleCloudPolicytroubleshooterV1ExplainedPolicy };
