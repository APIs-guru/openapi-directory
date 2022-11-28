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
import { Filtering } from "./filtering";
import { Location } from "./location";
export var DataExporterConfigTypEnum;
(function (DataExporterConfigTypEnum) {
    DataExporterConfigTypEnum["Kafka"] = "kafka";
    DataExporterConfigTypEnum["Pulsar"] = "pulsar";
    DataExporterConfigTypEnum["File"] = "file";
    DataExporterConfigTypEnum["Mailer"] = "mailer";
    DataExporterConfigTypEnum["Elastic"] = "elastic";
    DataExporterConfigTypEnum["Console"] = "console";
    DataExporterConfigTypEnum["Custom"] = "custom";
})(DataExporterConfigTypEnum || (DataExporterConfigTypEnum = {}));
// DataExporterConfig
/**
 * Settings to export Otorshi events
**/
var DataExporterConfig = /** @class */ (function (_super) {
    __extends(DataExporterConfig, _super);
    function DataExporterConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bufferSize" }),
        __metadata("design:type", Number)
    ], DataExporterConfig.prototype, "bufferSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=config" }),
        __metadata("design:type", Object)
    ], DataExporterConfig.prototype, "config", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=desc" }),
        __metadata("design:type", String)
    ], DataExporterConfig.prototype, "desc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabled" }),
        __metadata("design:type", String)
    ], DataExporterConfig.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filtering" }),
        __metadata("design:type", Filtering)
    ], DataExporterConfig.prototype, "filtering", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groupDuration" }),
        __metadata("design:type", Number)
    ], DataExporterConfig.prototype, "groupDuration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groupSize" }),
        __metadata("design:type", Number)
    ], DataExporterConfig.prototype, "groupSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], DataExporterConfig.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jsonWorkers" }),
        __metadata("design:type", Number)
    ], DataExporterConfig.prototype, "jsonWorkers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", Location)
    ], DataExporterConfig.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", Map)
    ], DataExporterConfig.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], DataExporterConfig.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=projection" }),
        __metadata("design:type", Map)
    ], DataExporterConfig.prototype, "projection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sendWorkers" }),
        __metadata("design:type", Number)
    ], DataExporterConfig.prototype, "sendWorkers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=typ" }),
        __metadata("design:type", String)
    ], DataExporterConfig.prototype, "typ", void 0);
    return DataExporterConfig;
}(SpeakeasyBase));
export { DataExporterConfig };
