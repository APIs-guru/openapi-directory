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
export var SetInstanceAcceleratorRequestTypeEnum;
(function (SetInstanceAcceleratorRequestTypeEnum) {
    SetInstanceAcceleratorRequestTypeEnum["AcceleratorTypeUnspecified"] = "ACCELERATOR_TYPE_UNSPECIFIED";
    SetInstanceAcceleratorRequestTypeEnum["NvidiaTeslaK80"] = "NVIDIA_TESLA_K80";
    SetInstanceAcceleratorRequestTypeEnum["NvidiaTeslaP100"] = "NVIDIA_TESLA_P100";
    SetInstanceAcceleratorRequestTypeEnum["NvidiaTeslaV100"] = "NVIDIA_TESLA_V100";
    SetInstanceAcceleratorRequestTypeEnum["NvidiaTeslaP4"] = "NVIDIA_TESLA_P4";
    SetInstanceAcceleratorRequestTypeEnum["NvidiaTeslaT4"] = "NVIDIA_TESLA_T4";
    SetInstanceAcceleratorRequestTypeEnum["NvidiaTeslaA100"] = "NVIDIA_TESLA_A100";
    SetInstanceAcceleratorRequestTypeEnum["NvidiaTeslaT4Vws"] = "NVIDIA_TESLA_T4_VWS";
    SetInstanceAcceleratorRequestTypeEnum["NvidiaTeslaP100Vws"] = "NVIDIA_TESLA_P100_VWS";
    SetInstanceAcceleratorRequestTypeEnum["NvidiaTeslaP4Vws"] = "NVIDIA_TESLA_P4_VWS";
    SetInstanceAcceleratorRequestTypeEnum["TpuV2"] = "TPU_V2";
    SetInstanceAcceleratorRequestTypeEnum["TpuV3"] = "TPU_V3";
})(SetInstanceAcceleratorRequestTypeEnum || (SetInstanceAcceleratorRequestTypeEnum = {}));
// SetInstanceAcceleratorRequest
/**
 * Request for setting instance accelerator.
**/
var SetInstanceAcceleratorRequest = /** @class */ (function (_super) {
    __extends(SetInstanceAcceleratorRequest, _super);
    function SetInstanceAcceleratorRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=coreCount" }),
        __metadata("design:type", String)
    ], SetInstanceAcceleratorRequest.prototype, "coreCount", void 0);
    __decorate([
        Metadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], SetInstanceAcceleratorRequest.prototype, "type", void 0);
    return SetInstanceAcceleratorRequest;
}(SpeakeasyBase));
export { SetInstanceAcceleratorRequest };
