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
export var RuntimeAcceleratorConfigTypeEnum;
(function (RuntimeAcceleratorConfigTypeEnum) {
    RuntimeAcceleratorConfigTypeEnum["AcceleratorTypeUnspecified"] = "ACCELERATOR_TYPE_UNSPECIFIED";
    RuntimeAcceleratorConfigTypeEnum["NvidiaTeslaK80"] = "NVIDIA_TESLA_K80";
    RuntimeAcceleratorConfigTypeEnum["NvidiaTeslaP100"] = "NVIDIA_TESLA_P100";
    RuntimeAcceleratorConfigTypeEnum["NvidiaTeslaV100"] = "NVIDIA_TESLA_V100";
    RuntimeAcceleratorConfigTypeEnum["NvidiaTeslaP4"] = "NVIDIA_TESLA_P4";
    RuntimeAcceleratorConfigTypeEnum["NvidiaTeslaT4"] = "NVIDIA_TESLA_T4";
    RuntimeAcceleratorConfigTypeEnum["NvidiaTeslaA100"] = "NVIDIA_TESLA_A100";
    RuntimeAcceleratorConfigTypeEnum["TpuV2"] = "TPU_V2";
    RuntimeAcceleratorConfigTypeEnum["TpuV3"] = "TPU_V3";
    RuntimeAcceleratorConfigTypeEnum["NvidiaTeslaT4Vws"] = "NVIDIA_TESLA_T4_VWS";
    RuntimeAcceleratorConfigTypeEnum["NvidiaTeslaP100Vws"] = "NVIDIA_TESLA_P100_VWS";
    RuntimeAcceleratorConfigTypeEnum["NvidiaTeslaP4Vws"] = "NVIDIA_TESLA_P4_VWS";
})(RuntimeAcceleratorConfigTypeEnum || (RuntimeAcceleratorConfigTypeEnum = {}));
// RuntimeAcceleratorConfig
/**
 * Definition of the types of hardware accelerators that can be used. Definition of the types of hardware accelerators that can be used. See [Compute Engine AcceleratorTypes](https://cloud.google.com/compute/docs/reference/beta/acceleratorTypes). Examples: * `nvidia-tesla-k80` * `nvidia-tesla-p100` * `nvidia-tesla-v100` * `nvidia-tesla-p4` * `nvidia-tesla-t4` * `nvidia-tesla-a100`
**/
var RuntimeAcceleratorConfig = /** @class */ (function (_super) {
    __extends(RuntimeAcceleratorConfig, _super);
    function RuntimeAcceleratorConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=coreCount" }),
        __metadata("design:type", String)
    ], RuntimeAcceleratorConfig.prototype, "coreCount", void 0);
    __decorate([
        Metadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], RuntimeAcceleratorConfig.prototype, "type", void 0);
    return RuntimeAcceleratorConfig;
}(SpeakeasyBase));
export { RuntimeAcceleratorConfig };
