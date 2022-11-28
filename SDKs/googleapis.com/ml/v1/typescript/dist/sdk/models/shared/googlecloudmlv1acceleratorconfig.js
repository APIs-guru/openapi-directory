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
export var GoogleCloudMlV1AcceleratorConfigTypeEnum;
(function (GoogleCloudMlV1AcceleratorConfigTypeEnum) {
    GoogleCloudMlV1AcceleratorConfigTypeEnum["AcceleratorTypeUnspecified"] = "ACCELERATOR_TYPE_UNSPECIFIED";
    GoogleCloudMlV1AcceleratorConfigTypeEnum["NvidiaTeslaK80"] = "NVIDIA_TESLA_K80";
    GoogleCloudMlV1AcceleratorConfigTypeEnum["NvidiaTeslaP100"] = "NVIDIA_TESLA_P100";
    GoogleCloudMlV1AcceleratorConfigTypeEnum["NvidiaTeslaV100"] = "NVIDIA_TESLA_V100";
    GoogleCloudMlV1AcceleratorConfigTypeEnum["NvidiaTeslaP4"] = "NVIDIA_TESLA_P4";
    GoogleCloudMlV1AcceleratorConfigTypeEnum["NvidiaTeslaT4"] = "NVIDIA_TESLA_T4";
    GoogleCloudMlV1AcceleratorConfigTypeEnum["NvidiaTeslaA100"] = "NVIDIA_TESLA_A100";
    GoogleCloudMlV1AcceleratorConfigTypeEnum["TpuV2"] = "TPU_V2";
    GoogleCloudMlV1AcceleratorConfigTypeEnum["TpuV3"] = "TPU_V3";
    GoogleCloudMlV1AcceleratorConfigTypeEnum["TpuV2Pod"] = "TPU_V2_POD";
    GoogleCloudMlV1AcceleratorConfigTypeEnum["TpuV3Pod"] = "TPU_V3_POD";
})(GoogleCloudMlV1AcceleratorConfigTypeEnum || (GoogleCloudMlV1AcceleratorConfigTypeEnum = {}));
// GoogleCloudMlV1AcceleratorConfig
/**
 * Represents a hardware accelerator request config. Note that the AcceleratorConfig can be used in both Jobs and Versions. Learn more about [accelerators for training](/ml-engine/docs/using-gpus) and [accelerators for online prediction](/ml-engine/docs/machine-types-online-prediction#gpus).
**/
var GoogleCloudMlV1AcceleratorConfig = /** @class */ (function (_super) {
    __extends(GoogleCloudMlV1AcceleratorConfig, _super);
    function GoogleCloudMlV1AcceleratorConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count" }),
        __metadata("design:type", String)
    ], GoogleCloudMlV1AcceleratorConfig.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GoogleCloudMlV1AcceleratorConfig.prototype, "type", void 0);
    return GoogleCloudMlV1AcceleratorConfig;
}(SpeakeasyBase));
export { GoogleCloudMlV1AcceleratorConfig };
