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
import { GoogleCloudPolicysimulatorV1ExplainedPolicy } from "./googlecloudpolicysimulatorv1explainedpolicy";
export var GoogleCloudPolicysimulatorV1ExplainedAccessAccessStateEnum;
(function (GoogleCloudPolicysimulatorV1ExplainedAccessAccessStateEnum) {
    GoogleCloudPolicysimulatorV1ExplainedAccessAccessStateEnum["AccessStateUnspecified"] = "ACCESS_STATE_UNSPECIFIED";
    GoogleCloudPolicysimulatorV1ExplainedAccessAccessStateEnum["Granted"] = "GRANTED";
    GoogleCloudPolicysimulatorV1ExplainedAccessAccessStateEnum["NotGranted"] = "NOT_GRANTED";
    GoogleCloudPolicysimulatorV1ExplainedAccessAccessStateEnum["UnknownConditional"] = "UNKNOWN_CONDITIONAL";
    GoogleCloudPolicysimulatorV1ExplainedAccessAccessStateEnum["UnknownInfoDenied"] = "UNKNOWN_INFO_DENIED";
})(GoogleCloudPolicysimulatorV1ExplainedAccessAccessStateEnum || (GoogleCloudPolicysimulatorV1ExplainedAccessAccessStateEnum = {}));
// GoogleCloudPolicysimulatorV1ExplainedAccess
/**
 * Details about how a set of policies, listed in ExplainedPolicy, resulted in a certain AccessState when replaying an access tuple.
**/
var GoogleCloudPolicysimulatorV1ExplainedAccess = /** @class */ (function (_super) {
    __extends(GoogleCloudPolicysimulatorV1ExplainedAccess, _super);
    function GoogleCloudPolicysimulatorV1ExplainedAccess() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accessState" }),
        __metadata("design:type", String)
    ], GoogleCloudPolicysimulatorV1ExplainedAccess.prototype, "accessState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: GoogleRpcStatus }),
        __metadata("design:type", Array)
    ], GoogleCloudPolicysimulatorV1ExplainedAccess.prototype, "errors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=policies", elemType: GoogleCloudPolicysimulatorV1ExplainedPolicy }),
        __metadata("design:type", Array)
    ], GoogleCloudPolicysimulatorV1ExplainedAccess.prototype, "policies", void 0);
    return GoogleCloudPolicysimulatorV1ExplainedAccess;
}(SpeakeasyBase));
export { GoogleCloudPolicysimulatorV1ExplainedAccess };
