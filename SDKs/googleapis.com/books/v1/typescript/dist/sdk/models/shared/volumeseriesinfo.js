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
var VolumeseriesinfoVolumeSeriesIssue = /** @class */ (function (_super) {
    __extends(VolumeseriesinfoVolumeSeriesIssue, _super);
    function VolumeseriesinfoVolumeSeriesIssue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=issueDisplayNumber" }),
        __metadata("design:type", String)
    ], VolumeseriesinfoVolumeSeriesIssue.prototype, "issueDisplayNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=issueOrderNumber" }),
        __metadata("design:type", Number)
    ], VolumeseriesinfoVolumeSeriesIssue.prototype, "issueOrderNumber", void 0);
    return VolumeseriesinfoVolumeSeriesIssue;
}(SpeakeasyBase));
export { VolumeseriesinfoVolumeSeriesIssue };
var VolumeseriesinfoVolumeSeries = /** @class */ (function (_super) {
    __extends(VolumeseriesinfoVolumeSeries, _super);
    function VolumeseriesinfoVolumeSeries() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=issue", elemType: VolumeseriesinfoVolumeSeriesIssue }),
        __metadata("design:type", Array)
    ], VolumeseriesinfoVolumeSeries.prototype, "issue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=orderNumber" }),
        __metadata("design:type", Number)
    ], VolumeseriesinfoVolumeSeries.prototype, "orderNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=seriesBookType" }),
        __metadata("design:type", String)
    ], VolumeseriesinfoVolumeSeries.prototype, "seriesBookType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=seriesId" }),
        __metadata("design:type", String)
    ], VolumeseriesinfoVolumeSeries.prototype, "seriesId", void 0);
    return VolumeseriesinfoVolumeSeries;
}(SpeakeasyBase));
export { VolumeseriesinfoVolumeSeries };
var Volumeseriesinfo = /** @class */ (function (_super) {
    __extends(Volumeseriesinfo, _super);
    function Volumeseriesinfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bookDisplayNumber" }),
        __metadata("design:type", String)
    ], Volumeseriesinfo.prototype, "bookDisplayNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], Volumeseriesinfo.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shortSeriesBookTitle" }),
        __metadata("design:type", String)
    ], Volumeseriesinfo.prototype, "shortSeriesBookTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=volumeSeries", elemType: VolumeseriesinfoVolumeSeries }),
        __metadata("design:type", Array)
    ], Volumeseriesinfo.prototype, "volumeSeries", void 0);
    return Volumeseriesinfo;
}(SpeakeasyBase));
export { Volumeseriesinfo };
