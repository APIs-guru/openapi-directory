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
import { Application } from "./application";
import { DataType } from "./datatype";
import { Device } from "./device";
export var DataSourceDataQualityStandardEnum;
(function (DataSourceDataQualityStandardEnum) {
    DataSourceDataQualityStandardEnum["DataQualityUnknown"] = "dataQualityUnknown";
    DataSourceDataQualityStandardEnum["DataQualityBloodPressureEsh2002"] = "dataQualityBloodPressureEsh2002";
    DataSourceDataQualityStandardEnum["DataQualityBloodPressureEsh2010"] = "dataQualityBloodPressureEsh2010";
    DataSourceDataQualityStandardEnum["DataQualityBloodPressureAami"] = "dataQualityBloodPressureAami";
    DataSourceDataQualityStandardEnum["DataQualityBloodPressureBhsAa"] = "dataQualityBloodPressureBhsAA";
    DataSourceDataQualityStandardEnum["DataQualityBloodPressureBhsAb"] = "dataQualityBloodPressureBhsAB";
    DataSourceDataQualityStandardEnum["DataQualityBloodPressureBhsBa"] = "dataQualityBloodPressureBhsBA";
    DataSourceDataQualityStandardEnum["DataQualityBloodPressureBhsBb"] = "dataQualityBloodPressureBhsBB";
    DataSourceDataQualityStandardEnum["DataQualityBloodGlucoseIso151972003"] = "dataQualityBloodGlucoseIso151972003";
    DataSourceDataQualityStandardEnum["DataQualityBloodGlucoseIso151972013"] = "dataQualityBloodGlucoseIso151972013";
})(DataSourceDataQualityStandardEnum || (DataSourceDataQualityStandardEnum = {}));
export var DataSourceTypeEnum;
(function (DataSourceTypeEnum) {
    DataSourceTypeEnum["Raw"] = "raw";
    DataSourceTypeEnum["Derived"] = "derived";
})(DataSourceTypeEnum || (DataSourceTypeEnum = {}));
// DataSource
/**
 * Definition of a unique source of sensor data. Data sources can expose raw data coming from hardware sensors on local or companion devices. They can also expose derived data, created by transforming or merging other data sources. Multiple data sources can exist for the same data type. Every data point inserted into or read from this service has an associated data source. The data source contains enough information to uniquely identify its data, including the hardware device and the application that collected and/or transformed the data. It also holds useful metadata, such as the hardware and application versions, and the device type. Each data source produces a unique stream of data, with a unique identifier. Not all changes to data source affect the stream identifier, so that data collected by updated versions of the same application/device can still be considered to belong to the same data stream.
**/
var DataSource = /** @class */ (function (_super) {
    __extends(DataSource, _super);
    function DataSource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=application" }),
        __metadata("design:type", Application)
    ], DataSource.prototype, "application", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataQualityStandard" }),
        __metadata("design:type", Array)
    ], DataSource.prototype, "dataQualityStandard", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataStreamId" }),
        __metadata("design:type", String)
    ], DataSource.prototype, "dataStreamId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataStreamName" }),
        __metadata("design:type", String)
    ], DataSource.prototype, "dataStreamName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataType" }),
        __metadata("design:type", DataType)
    ], DataSource.prototype, "dataType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=device" }),
        __metadata("design:type", Device)
    ], DataSource.prototype, "device", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], DataSource.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], DataSource.prototype, "type", void 0);
    return DataSource;
}(SpeakeasyBase));
export { DataSource };
