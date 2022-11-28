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
import { UsageMetrics } from "./usagemetrics";
// RuntimeInfo
/**
 * Runtime information about workload execution.
**/
var RuntimeInfo = /** @class */ (function (_super) {
    __extends(RuntimeInfo, _super);
    function RuntimeInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=approximateUsage" }),
        __metadata("design:type", UsageMetrics)
    ], RuntimeInfo.prototype, "approximateUsage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=diagnosticOutputUri" }),
        __metadata("design:type", String)
    ], RuntimeInfo.prototype, "diagnosticOutputUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endpoints" }),
        __metadata("design:type", Map)
    ], RuntimeInfo.prototype, "endpoints", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outputUri" }),
        __metadata("design:type", String)
    ], RuntimeInfo.prototype, "outputUri", void 0);
    return RuntimeInfo;
}(SpeakeasyBase));
export { RuntimeInfo };
// RuntimeInfoInput
/**
 * Runtime information about workload execution.
**/
var RuntimeInfoInput = /** @class */ (function (_super) {
    __extends(RuntimeInfoInput, _super);
    function RuntimeInfoInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=approximateUsage" }),
        __metadata("design:type", UsageMetrics)
    ], RuntimeInfoInput.prototype, "approximateUsage", void 0);
    return RuntimeInfoInput;
}(SpeakeasyBase));
export { RuntimeInfoInput };
