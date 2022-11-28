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
export var GoogleCloudMlV1CapabilityAvailableAcceleratorsEnum;
(function (GoogleCloudMlV1CapabilityAvailableAcceleratorsEnum) {
    GoogleCloudMlV1CapabilityAvailableAcceleratorsEnum["AcceleratorTypeUnspecified"] = "ACCELERATOR_TYPE_UNSPECIFIED";
    GoogleCloudMlV1CapabilityAvailableAcceleratorsEnum["NvidiaTeslaK80"] = "NVIDIA_TESLA_K80";
    GoogleCloudMlV1CapabilityAvailableAcceleratorsEnum["NvidiaTeslaP100"] = "NVIDIA_TESLA_P100";
    GoogleCloudMlV1CapabilityAvailableAcceleratorsEnum["NvidiaTeslaV100"] = "NVIDIA_TESLA_V100";
    GoogleCloudMlV1CapabilityAvailableAcceleratorsEnum["NvidiaTeslaP4"] = "NVIDIA_TESLA_P4";
    GoogleCloudMlV1CapabilityAvailableAcceleratorsEnum["NvidiaTeslaT4"] = "NVIDIA_TESLA_T4";
    GoogleCloudMlV1CapabilityAvailableAcceleratorsEnum["NvidiaTeslaA100"] = "NVIDIA_TESLA_A100";
    GoogleCloudMlV1CapabilityAvailableAcceleratorsEnum["TpuV2"] = "TPU_V2";
    GoogleCloudMlV1CapabilityAvailableAcceleratorsEnum["TpuV3"] = "TPU_V3";
    GoogleCloudMlV1CapabilityAvailableAcceleratorsEnum["TpuV2Pod"] = "TPU_V2_POD";
    GoogleCloudMlV1CapabilityAvailableAcceleratorsEnum["TpuV3Pod"] = "TPU_V3_POD";
})(GoogleCloudMlV1CapabilityAvailableAcceleratorsEnum || (GoogleCloudMlV1CapabilityAvailableAcceleratorsEnum = {}));
export var GoogleCloudMlV1CapabilityTypeEnum;
(function (GoogleCloudMlV1CapabilityTypeEnum) {
    GoogleCloudMlV1CapabilityTypeEnum["TypeUnspecified"] = "TYPE_UNSPECIFIED";
    GoogleCloudMlV1CapabilityTypeEnum["Training"] = "TRAINING";
    GoogleCloudMlV1CapabilityTypeEnum["BatchPrediction"] = "BATCH_PREDICTION";
    GoogleCloudMlV1CapabilityTypeEnum["OnlinePrediction"] = "ONLINE_PREDICTION";
})(GoogleCloudMlV1CapabilityTypeEnum || (GoogleCloudMlV1CapabilityTypeEnum = {}));
var GoogleCloudMlV1Capability = /** @class */ (function (_super) {
    __extends(GoogleCloudMlV1Capability, _super);
    function GoogleCloudMlV1Capability() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=availableAccelerators" }),
        __metadata("design:type", Array)
    ], GoogleCloudMlV1Capability.prototype, "availableAccelerators", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GoogleCloudMlV1Capability.prototype, "type", void 0);
    return GoogleCloudMlV1Capability;
}(SpeakeasyBase));
export { GoogleCloudMlV1Capability };
