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
import { GoogleIamV1Policy } from "./googleiamv1policy";
export var GoogleCloudPolicysimulatorV1beta1ReplayConfigLogSourceEnum;
(function (GoogleCloudPolicysimulatorV1beta1ReplayConfigLogSourceEnum) {
    GoogleCloudPolicysimulatorV1beta1ReplayConfigLogSourceEnum["LogSourceUnspecified"] = "LOG_SOURCE_UNSPECIFIED";
    GoogleCloudPolicysimulatorV1beta1ReplayConfigLogSourceEnum["RecentAccesses"] = "RECENT_ACCESSES";
})(GoogleCloudPolicysimulatorV1beta1ReplayConfigLogSourceEnum || (GoogleCloudPolicysimulatorV1beta1ReplayConfigLogSourceEnum = {}));
// GoogleCloudPolicysimulatorV1beta1ReplayConfig
/**
 * The configuration used for a Replay.
**/
var GoogleCloudPolicysimulatorV1beta1ReplayConfig = /** @class */ (function (_super) {
    __extends(GoogleCloudPolicysimulatorV1beta1ReplayConfig, _super);
    function GoogleCloudPolicysimulatorV1beta1ReplayConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=logSource" }),
        __metadata("design:type", String)
    ], GoogleCloudPolicysimulatorV1beta1ReplayConfig.prototype, "logSource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=policyOverlay", elemType: GoogleIamV1Policy }),
        __metadata("design:type", Map)
    ], GoogleCloudPolicysimulatorV1beta1ReplayConfig.prototype, "policyOverlay", void 0);
    return GoogleCloudPolicysimulatorV1beta1ReplayConfig;
}(SpeakeasyBase));
export { GoogleCloudPolicysimulatorV1beta1ReplayConfig };
