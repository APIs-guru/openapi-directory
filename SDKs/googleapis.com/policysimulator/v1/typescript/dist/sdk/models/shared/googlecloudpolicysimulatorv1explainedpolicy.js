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
import { GoogleCloudPolicysimulatorV1BindingExplanation } from "./googlecloudpolicysimulatorv1bindingexplanation";
import { GoogleIamV1Policy } from "./googleiamv1policy";
export var GoogleCloudPolicysimulatorV1ExplainedPolicyAccessEnum;
(function (GoogleCloudPolicysimulatorV1ExplainedPolicyAccessEnum) {
    GoogleCloudPolicysimulatorV1ExplainedPolicyAccessEnum["AccessStateUnspecified"] = "ACCESS_STATE_UNSPECIFIED";
    GoogleCloudPolicysimulatorV1ExplainedPolicyAccessEnum["Granted"] = "GRANTED";
    GoogleCloudPolicysimulatorV1ExplainedPolicyAccessEnum["NotGranted"] = "NOT_GRANTED";
    GoogleCloudPolicysimulatorV1ExplainedPolicyAccessEnum["UnknownConditional"] = "UNKNOWN_CONDITIONAL";
    GoogleCloudPolicysimulatorV1ExplainedPolicyAccessEnum["UnknownInfoDenied"] = "UNKNOWN_INFO_DENIED";
})(GoogleCloudPolicysimulatorV1ExplainedPolicyAccessEnum || (GoogleCloudPolicysimulatorV1ExplainedPolicyAccessEnum = {}));
export var GoogleCloudPolicysimulatorV1ExplainedPolicyRelevanceEnum;
(function (GoogleCloudPolicysimulatorV1ExplainedPolicyRelevanceEnum) {
    GoogleCloudPolicysimulatorV1ExplainedPolicyRelevanceEnum["HeuristicRelevanceUnspecified"] = "HEURISTIC_RELEVANCE_UNSPECIFIED";
    GoogleCloudPolicysimulatorV1ExplainedPolicyRelevanceEnum["Normal"] = "NORMAL";
    GoogleCloudPolicysimulatorV1ExplainedPolicyRelevanceEnum["High"] = "HIGH";
})(GoogleCloudPolicysimulatorV1ExplainedPolicyRelevanceEnum || (GoogleCloudPolicysimulatorV1ExplainedPolicyRelevanceEnum = {}));
// GoogleCloudPolicysimulatorV1ExplainedPolicy
/**
 * Details about how a specific IAM Policy contributed to the access check.
**/
var GoogleCloudPolicysimulatorV1ExplainedPolicy = /** @class */ (function (_super) {
    __extends(GoogleCloudPolicysimulatorV1ExplainedPolicy, _super);
    function GoogleCloudPolicysimulatorV1ExplainedPolicy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=access" }),
        __metadata("design:type", String)
    ], GoogleCloudPolicysimulatorV1ExplainedPolicy.prototype, "access", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bindingExplanations", elemType: GoogleCloudPolicysimulatorV1BindingExplanation }),
        __metadata("design:type", Array)
    ], GoogleCloudPolicysimulatorV1ExplainedPolicy.prototype, "bindingExplanations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fullResourceName" }),
        __metadata("design:type", String)
    ], GoogleCloudPolicysimulatorV1ExplainedPolicy.prototype, "fullResourceName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=policy" }),
        __metadata("design:type", GoogleIamV1Policy)
    ], GoogleCloudPolicysimulatorV1ExplainedPolicy.prototype, "policy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=relevance" }),
        __metadata("design:type", String)
    ], GoogleCloudPolicysimulatorV1ExplainedPolicy.prototype, "relevance", void 0);
    return GoogleCloudPolicysimulatorV1ExplainedPolicy;
}(SpeakeasyBase));
export { GoogleCloudPolicysimulatorV1ExplainedPolicy };
