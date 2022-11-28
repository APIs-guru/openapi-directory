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
export var AcceleratorConfigTypeEnum;
(function (AcceleratorConfigTypeEnum) {
    AcceleratorConfigTypeEnum["AcceleratorTypeUnspecified"] = "ACCELERATOR_TYPE_UNSPECIFIED";
    AcceleratorConfigTypeEnum["NvidiaTeslaK80"] = "NVIDIA_TESLA_K80";
    AcceleratorConfigTypeEnum["NvidiaTeslaP100"] = "NVIDIA_TESLA_P100";
    AcceleratorConfigTypeEnum["NvidiaTeslaV100"] = "NVIDIA_TESLA_V100";
    AcceleratorConfigTypeEnum["NvidiaTeslaP4"] = "NVIDIA_TESLA_P4";
    AcceleratorConfigTypeEnum["NvidiaTeslaT4"] = "NVIDIA_TESLA_T4";
    AcceleratorConfigTypeEnum["NvidiaTeslaA100"] = "NVIDIA_TESLA_A100";
    AcceleratorConfigTypeEnum["NvidiaTeslaT4Vws"] = "NVIDIA_TESLA_T4_VWS";
    AcceleratorConfigTypeEnum["NvidiaTeslaP100Vws"] = "NVIDIA_TESLA_P100_VWS";
    AcceleratorConfigTypeEnum["NvidiaTeslaP4Vws"] = "NVIDIA_TESLA_P4_VWS";
    AcceleratorConfigTypeEnum["TpuV2"] = "TPU_V2";
    AcceleratorConfigTypeEnum["TpuV3"] = "TPU_V3";
})(AcceleratorConfigTypeEnum || (AcceleratorConfigTypeEnum = {}));
// AcceleratorConfig
/**
 * Definition of a hardware accelerator. Note that not all combinations of `type` and `core_count` are valid. Check [GPUs on Compute Engine](/compute/docs/gpus/#gpus-list) to find a valid combination. TPUs are not supported.
**/
var AcceleratorConfig = /** @class */ (function (_super) {
    __extends(AcceleratorConfig, _super);
    function AcceleratorConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=coreCount" }),
        __metadata("design:type", String)
    ], AcceleratorConfig.prototype, "coreCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], AcceleratorConfig.prototype, "type", void 0);
    return AcceleratorConfig;
}(SpeakeasyBase));
export { AcceleratorConfig };
