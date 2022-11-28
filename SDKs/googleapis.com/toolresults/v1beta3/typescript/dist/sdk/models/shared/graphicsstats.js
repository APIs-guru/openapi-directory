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
import { GraphicsStatsBucket } from "./graphicsstatsbucket";
// GraphicsStats
/**
 * Graphics statistics for the App. The information is collected from 'adb shell dumpsys graphicsstats'. For more info see: https://developer.android.com/training/testing/performance.html Statistics will only be present for API 23+.
**/
var GraphicsStats = /** @class */ (function (_super) {
    __extends(GraphicsStats, _super);
    function GraphicsStats() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=buckets", elemType: GraphicsStatsBucket }),
        __metadata("design:type", Array)
    ], GraphicsStats.prototype, "buckets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=highInputLatencyCount" }),
        __metadata("design:type", String)
    ], GraphicsStats.prototype, "highInputLatencyCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jankyFrames" }),
        __metadata("design:type", String)
    ], GraphicsStats.prototype, "jankyFrames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=missedVsyncCount" }),
        __metadata("design:type", String)
    ], GraphicsStats.prototype, "missedVsyncCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=p50Millis" }),
        __metadata("design:type", String)
    ], GraphicsStats.prototype, "p50Millis", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=p90Millis" }),
        __metadata("design:type", String)
    ], GraphicsStats.prototype, "p90Millis", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=p95Millis" }),
        __metadata("design:type", String)
    ], GraphicsStats.prototype, "p95Millis", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=p99Millis" }),
        __metadata("design:type", String)
    ], GraphicsStats.prototype, "p99Millis", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=slowBitmapUploadCount" }),
        __metadata("design:type", String)
    ], GraphicsStats.prototype, "slowBitmapUploadCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=slowDrawCount" }),
        __metadata("design:type", String)
    ], GraphicsStats.prototype, "slowDrawCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=slowUiThreadCount" }),
        __metadata("design:type", String)
    ], GraphicsStats.prototype, "slowUiThreadCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalFrames" }),
        __metadata("design:type", String)
    ], GraphicsStats.prototype, "totalFrames", void 0);
    return GraphicsStats;
}(SpeakeasyBase));
export { GraphicsStats };
