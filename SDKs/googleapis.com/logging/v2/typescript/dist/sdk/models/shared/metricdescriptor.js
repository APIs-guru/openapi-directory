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
import * as shared from "../shared";
import { MetricDescriptorMetadata } from "./metricdescriptormetadata";
export var MetricDescriptorLaunchStageEnum;
(function (MetricDescriptorLaunchStageEnum) {
    MetricDescriptorLaunchStageEnum["LaunchStageUnspecified"] = "LAUNCH_STAGE_UNSPECIFIED";
    MetricDescriptorLaunchStageEnum["Unimplemented"] = "UNIMPLEMENTED";
    MetricDescriptorLaunchStageEnum["Prelaunch"] = "PRELAUNCH";
    MetricDescriptorLaunchStageEnum["EarlyAccess"] = "EARLY_ACCESS";
    MetricDescriptorLaunchStageEnum["Alpha"] = "ALPHA";
    MetricDescriptorLaunchStageEnum["Beta"] = "BETA";
    MetricDescriptorLaunchStageEnum["Ga"] = "GA";
    MetricDescriptorLaunchStageEnum["Deprecated"] = "DEPRECATED";
})(MetricDescriptorLaunchStageEnum || (MetricDescriptorLaunchStageEnum = {}));
export var MetricDescriptorMetricKindEnum;
(function (MetricDescriptorMetricKindEnum) {
    MetricDescriptorMetricKindEnum["MetricKindUnspecified"] = "METRIC_KIND_UNSPECIFIED";
    MetricDescriptorMetricKindEnum["Gauge"] = "GAUGE";
    MetricDescriptorMetricKindEnum["Delta"] = "DELTA";
    MetricDescriptorMetricKindEnum["Cumulative"] = "CUMULATIVE";
})(MetricDescriptorMetricKindEnum || (MetricDescriptorMetricKindEnum = {}));
export var MetricDescriptorValueTypeEnum;
(function (MetricDescriptorValueTypeEnum) {
    MetricDescriptorValueTypeEnum["ValueTypeUnspecified"] = "VALUE_TYPE_UNSPECIFIED";
    MetricDescriptorValueTypeEnum["Bool"] = "BOOL";
    MetricDescriptorValueTypeEnum["Int64"] = "INT64";
    MetricDescriptorValueTypeEnum["Double"] = "DOUBLE";
    MetricDescriptorValueTypeEnum["String"] = "STRING";
    MetricDescriptorValueTypeEnum["Distribution"] = "DISTRIBUTION";
    MetricDescriptorValueTypeEnum["Money"] = "MONEY";
})(MetricDescriptorValueTypeEnum || (MetricDescriptorValueTypeEnum = {}));
// MetricDescriptor
/**
 * Defines a metric type and its schema. Once a metric descriptor is created, deleting or altering it stops data collection and makes the metric type's existing data unusable.
**/
var MetricDescriptor = /** @class */ (function (_super) {
    __extends(MetricDescriptor, _super);
    function MetricDescriptor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], MetricDescriptor.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], MetricDescriptor.prototype, "displayName", void 0);
    __decorate([
        Metadata({ data: "json, name=labels", elemType: shared.LabelDescriptor }),
        __metadata("design:type", Array)
    ], MetricDescriptor.prototype, "labels", void 0);
    __decorate([
        Metadata({ data: "json, name=launchStage" }),
        __metadata("design:type", String)
    ], MetricDescriptor.prototype, "launchStage", void 0);
    __decorate([
        Metadata({ data: "json, name=metadata" }),
        __metadata("design:type", MetricDescriptorMetadata)
    ], MetricDescriptor.prototype, "metadata", void 0);
    __decorate([
        Metadata({ data: "json, name=metricKind" }),
        __metadata("design:type", String)
    ], MetricDescriptor.prototype, "metricKind", void 0);
    __decorate([
        Metadata({ data: "json, name=monitoredResourceTypes" }),
        __metadata("design:type", Array)
    ], MetricDescriptor.prototype, "monitoredResourceTypes", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], MetricDescriptor.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], MetricDescriptor.prototype, "type", void 0);
    __decorate([
        Metadata({ data: "json, name=unit" }),
        __metadata("design:type", String)
    ], MetricDescriptor.prototype, "unit", void 0);
    __decorate([
        Metadata({ data: "json, name=valueType" }),
        __metadata("design:type", String)
    ], MetricDescriptor.prototype, "valueType", void 0);
    return MetricDescriptor;
}(SpeakeasyBase));
export { MetricDescriptor };
