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
import { GoogleCloudPolicytroubleshooterV1betaExplainedPolicy } from "./googlecloudpolicytroubleshooterv1betaexplainedpolicy";
export var GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyResponseAccessEnum;
(function (GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyResponseAccessEnum) {
    GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyResponseAccessEnum["AccessStateUnspecified"] = "ACCESS_STATE_UNSPECIFIED";
    GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyResponseAccessEnum["Granted"] = "GRANTED";
    GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyResponseAccessEnum["NotGranted"] = "NOT_GRANTED";
    GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyResponseAccessEnum["UnknownConditional"] = "UNKNOWN_CONDITIONAL";
    GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyResponseAccessEnum["UnknownInfoDenied"] = "UNKNOWN_INFO_DENIED";
})(GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyResponseAccessEnum || (GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyResponseAccessEnum = {}));
// GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyResponse
/**
 * Response for TroubleshootIamPolicy.
**/
var GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyResponse = /** @class */ (function (_super) {
    __extends(GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyResponse, _super);
    function GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=access" }),
        __metadata("design:type", String)
    ], GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyResponse.prototype, "access", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=explainedPolicies", elemType: GoogleCloudPolicytroubleshooterV1betaExplainedPolicy }),
        __metadata("design:type", Array)
    ], GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyResponse.prototype, "explainedPolicies", void 0);
    return GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyResponse;
}(SpeakeasyBase));
export { GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyResponse };
