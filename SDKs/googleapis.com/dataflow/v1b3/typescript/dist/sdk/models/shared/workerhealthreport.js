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
// WorkerHealthReport
/**
 * WorkerHealthReport contains information about the health of a worker. The VM should be identified by the labels attached to the WorkerMessage that this health ping belongs to.
**/
var WorkerHealthReport = /** @class */ (function (_super) {
    __extends(WorkerHealthReport, _super);
    function WorkerHealthReport() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=msg" }),
        __metadata("design:type", String)
    ], WorkerHealthReport.prototype, "msg", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pods" }),
        __metadata("design:type", Array)
    ], WorkerHealthReport.prototype, "pods", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reportInterval" }),
        __metadata("design:type", String)
    ], WorkerHealthReport.prototype, "reportInterval", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vmBrokenCode" }),
        __metadata("design:type", String)
    ], WorkerHealthReport.prototype, "vmBrokenCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vmIsBroken" }),
        __metadata("design:type", Boolean)
    ], WorkerHealthReport.prototype, "vmIsBroken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vmIsHealthy" }),
        __metadata("design:type", Boolean)
    ], WorkerHealthReport.prototype, "vmIsHealthy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vmStartupTime" }),
        __metadata("design:type", String)
    ], WorkerHealthReport.prototype, "vmStartupTime", void 0);
    return WorkerHealthReport;
}(SpeakeasyBase));
export { WorkerHealthReport };
