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
import { TimeSeriesQuery } from "./timeseriesquery";
export var DataSetPlotTypeEnum;
(function (DataSetPlotTypeEnum) {
    DataSetPlotTypeEnum["PlotTypeUnspecified"] = "PLOT_TYPE_UNSPECIFIED";
    DataSetPlotTypeEnum["Line"] = "LINE";
    DataSetPlotTypeEnum["StackedArea"] = "STACKED_AREA";
    DataSetPlotTypeEnum["StackedBar"] = "STACKED_BAR";
    DataSetPlotTypeEnum["Heatmap"] = "HEATMAP";
})(DataSetPlotTypeEnum || (DataSetPlotTypeEnum = {}));
export var DataSetTargetAxisEnum;
(function (DataSetTargetAxisEnum) {
    DataSetTargetAxisEnum["TargetAxisUnspecified"] = "TARGET_AXIS_UNSPECIFIED";
    DataSetTargetAxisEnum["Y1"] = "Y1";
    DataSetTargetAxisEnum["Y2"] = "Y2";
})(DataSetTargetAxisEnum || (DataSetTargetAxisEnum = {}));
// DataSet
/**
 * Groups a time series query definition with charting options.
**/
var DataSet = /** @class */ (function (_super) {
    __extends(DataSet, _super);
    function DataSet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=legendTemplate" }),
        __metadata("design:type", String)
    ], DataSet.prototype, "legendTemplate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minAlignmentPeriod" }),
        __metadata("design:type", String)
    ], DataSet.prototype, "minAlignmentPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=plotType" }),
        __metadata("design:type", String)
    ], DataSet.prototype, "plotType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetAxis" }),
        __metadata("design:type", String)
    ], DataSet.prototype, "targetAxis", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeSeriesQuery" }),
        __metadata("design:type", TimeSeriesQuery)
    ], DataSet.prototype, "timeSeriesQuery", void 0);
    return DataSet;
}(SpeakeasyBase));
export { DataSet };
