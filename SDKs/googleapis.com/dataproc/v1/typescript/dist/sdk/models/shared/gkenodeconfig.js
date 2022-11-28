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
import { GkeNodePoolAcceleratorConfig } from "./gkenodepoolacceleratorconfig";
// GkeNodeConfig
/**
 * Parameters that describe cluster nodes.
**/
var GkeNodeConfig = /** @class */ (function (_super) {
    __extends(GkeNodeConfig, _super);
    function GkeNodeConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accelerators", elemType: GkeNodePoolAcceleratorConfig }),
        __metadata("design:type", Array)
    ], GkeNodeConfig.prototype, "accelerators", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bootDiskKmsKey" }),
        __metadata("design:type", String)
    ], GkeNodeConfig.prototype, "bootDiskKmsKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=localSsdCount" }),
        __metadata("design:type", Number)
    ], GkeNodeConfig.prototype, "localSsdCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=machineType" }),
        __metadata("design:type", String)
    ], GkeNodeConfig.prototype, "machineType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minCpuPlatform" }),
        __metadata("design:type", String)
    ], GkeNodeConfig.prototype, "minCpuPlatform", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=preemptible" }),
        __metadata("design:type", Boolean)
    ], GkeNodeConfig.prototype, "preemptible", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=spot" }),
        __metadata("design:type", Boolean)
    ], GkeNodeConfig.prototype, "spot", void 0);
    return GkeNodeConfig;
}(SpeakeasyBase));
export { GkeNodeConfig };
