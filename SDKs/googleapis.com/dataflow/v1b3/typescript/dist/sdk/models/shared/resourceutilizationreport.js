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
import { CpuTime } from "./cputime";
import { MemInfo } from "./meminfo";
// ResourceUtilizationReport
/**
 * Worker metrics exported from workers. This contains resource utilization metrics accumulated from a variety of sources. For more information, see go/df-resource-signals.
**/
var ResourceUtilizationReport = /** @class */ (function (_super) {
    __extends(ResourceUtilizationReport, _super);
    function ResourceUtilizationReport() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=containers", elemType: ResourceUtilizationReport }),
        __metadata("design:type", Map)
    ], ResourceUtilizationReport.prototype, "containers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cpuTime", elemType: CpuTime }),
        __metadata("design:type", Array)
    ], ResourceUtilizationReport.prototype, "cpuTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=memoryInfo", elemType: MemInfo }),
        __metadata("design:type", Array)
    ], ResourceUtilizationReport.prototype, "memoryInfo", void 0);
    return ResourceUtilizationReport;
}(SpeakeasyBase));
export { ResourceUtilizationReport };
