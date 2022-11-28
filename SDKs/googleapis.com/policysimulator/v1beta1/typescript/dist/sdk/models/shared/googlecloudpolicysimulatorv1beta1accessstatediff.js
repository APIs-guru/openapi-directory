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
import { GoogleCloudPolicysimulatorV1beta1ExplainedAccess } from "./googlecloudpolicysimulatorv1beta1explainedaccess";
export var GoogleCloudPolicysimulatorV1beta1AccessStateDiffAccessChangeEnum;
(function (GoogleCloudPolicysimulatorV1beta1AccessStateDiffAccessChangeEnum) {
    GoogleCloudPolicysimulatorV1beta1AccessStateDiffAccessChangeEnum["AccessChangeTypeUnspecified"] = "ACCESS_CHANGE_TYPE_UNSPECIFIED";
    GoogleCloudPolicysimulatorV1beta1AccessStateDiffAccessChangeEnum["NoChange"] = "NO_CHANGE";
    GoogleCloudPolicysimulatorV1beta1AccessStateDiffAccessChangeEnum["UnknownChange"] = "UNKNOWN_CHANGE";
    GoogleCloudPolicysimulatorV1beta1AccessStateDiffAccessChangeEnum["AccessRevoked"] = "ACCESS_REVOKED";
    GoogleCloudPolicysimulatorV1beta1AccessStateDiffAccessChangeEnum["AccessGained"] = "ACCESS_GAINED";
    GoogleCloudPolicysimulatorV1beta1AccessStateDiffAccessChangeEnum["AccessMaybeRevoked"] = "ACCESS_MAYBE_REVOKED";
    GoogleCloudPolicysimulatorV1beta1AccessStateDiffAccessChangeEnum["AccessMaybeGained"] = "ACCESS_MAYBE_GAINED";
})(GoogleCloudPolicysimulatorV1beta1AccessStateDiffAccessChangeEnum || (GoogleCloudPolicysimulatorV1beta1AccessStateDiffAccessChangeEnum = {}));
// GoogleCloudPolicysimulatorV1beta1AccessStateDiff
/**
 * A summary and comparison of the member's access under the current (baseline) policies and the proposed (simulated) policies for a single access tuple.
**/
var GoogleCloudPolicysimulatorV1beta1AccessStateDiff = /** @class */ (function (_super) {
    __extends(GoogleCloudPolicysimulatorV1beta1AccessStateDiff, _super);
    function GoogleCloudPolicysimulatorV1beta1AccessStateDiff() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accessChange" }),
        __metadata("design:type", String)
    ], GoogleCloudPolicysimulatorV1beta1AccessStateDiff.prototype, "accessChange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=baseline" }),
        __metadata("design:type", GoogleCloudPolicysimulatorV1beta1ExplainedAccess)
    ], GoogleCloudPolicysimulatorV1beta1AccessStateDiff.prototype, "baseline", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=simulated" }),
        __metadata("design:type", GoogleCloudPolicysimulatorV1beta1ExplainedAccess)
    ], GoogleCloudPolicysimulatorV1beta1AccessStateDiff.prototype, "simulated", void 0);
    return GoogleCloudPolicysimulatorV1beta1AccessStateDiff;
}(SpeakeasyBase));
export { GoogleCloudPolicysimulatorV1beta1AccessStateDiff };
