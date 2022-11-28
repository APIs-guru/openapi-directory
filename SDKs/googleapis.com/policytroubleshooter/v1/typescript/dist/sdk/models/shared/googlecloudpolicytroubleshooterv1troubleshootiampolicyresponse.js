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
import { GoogleRpcStatus } from "./googlerpcstatus";
import { GoogleCloudPolicytroubleshooterV1ExplainedPolicy } from "./googlecloudpolicytroubleshooterv1explainedpolicy";
export var GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponseAccessEnum;
(function (GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponseAccessEnum) {
    GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponseAccessEnum["AccessStateUnspecified"] = "ACCESS_STATE_UNSPECIFIED";
    GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponseAccessEnum["Granted"] = "GRANTED";
    GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponseAccessEnum["NotGranted"] = "NOT_GRANTED";
    GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponseAccessEnum["UnknownConditional"] = "UNKNOWN_CONDITIONAL";
    GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponseAccessEnum["UnknownInfoDenied"] = "UNKNOWN_INFO_DENIED";
})(GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponseAccessEnum || (GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponseAccessEnum = {}));
// GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponse
/**
 * Response for TroubleshootIamPolicy.
**/
var GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponse = /** @class */ (function (_super) {
    __extends(GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponse, _super);
    function GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=access" }),
        __metadata("design:type", String)
    ], GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponse.prototype, "access", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: GoogleRpcStatus }),
        __metadata("design:type", Array)
    ], GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponse.prototype, "errors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=explainedPolicies", elemType: GoogleCloudPolicytroubleshooterV1ExplainedPolicy }),
        __metadata("design:type", Array)
    ], GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponse.prototype, "explainedPolicies", void 0);
    return GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponse;
}(SpeakeasyBase));
export { GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponse };
