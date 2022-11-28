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
export var SchedulerAcceleratorConfigTypeEnum;
(function (SchedulerAcceleratorConfigTypeEnum) {
    SchedulerAcceleratorConfigTypeEnum["SchedulerAcceleratorTypeUnspecified"] = "SCHEDULER_ACCELERATOR_TYPE_UNSPECIFIED";
    SchedulerAcceleratorConfigTypeEnum["NvidiaTeslaK80"] = "NVIDIA_TESLA_K80";
    SchedulerAcceleratorConfigTypeEnum["NvidiaTeslaP100"] = "NVIDIA_TESLA_P100";
    SchedulerAcceleratorConfigTypeEnum["NvidiaTeslaV100"] = "NVIDIA_TESLA_V100";
    SchedulerAcceleratorConfigTypeEnum["NvidiaTeslaP4"] = "NVIDIA_TESLA_P4";
    SchedulerAcceleratorConfigTypeEnum["NvidiaTeslaT4"] = "NVIDIA_TESLA_T4";
    SchedulerAcceleratorConfigTypeEnum["NvidiaTeslaA100"] = "NVIDIA_TESLA_A100";
    SchedulerAcceleratorConfigTypeEnum["TpuV2"] = "TPU_V2";
    SchedulerAcceleratorConfigTypeEnum["TpuV3"] = "TPU_V3";
})(SchedulerAcceleratorConfigTypeEnum || (SchedulerAcceleratorConfigTypeEnum = {}));
// SchedulerAcceleratorConfig
/**
 * Definition of a hardware accelerator. Note that not all combinations of `type` and `core_count` are valid. Check [GPUs on Compute Engine](https://cloud.google.com/compute/docs/gpus) to find a valid combination. TPUs are not supported.
**/
var SchedulerAcceleratorConfig = /** @class */ (function (_super) {
    __extends(SchedulerAcceleratorConfig, _super);
    function SchedulerAcceleratorConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=coreCount" }),
        __metadata("design:type", String)
    ], SchedulerAcceleratorConfig.prototype, "coreCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], SchedulerAcceleratorConfig.prototype, "type", void 0);
    return SchedulerAcceleratorConfig;
}(SpeakeasyBase));
export { SchedulerAcceleratorConfig };
