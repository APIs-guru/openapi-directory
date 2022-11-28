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
export var GoogleChromeManagementV1DeviceAueCountReportAueMonthEnum;
(function (GoogleChromeManagementV1DeviceAueCountReportAueMonthEnum) {
    GoogleChromeManagementV1DeviceAueCountReportAueMonthEnum["MonthUnspecified"] = "MONTH_UNSPECIFIED";
    GoogleChromeManagementV1DeviceAueCountReportAueMonthEnum["January"] = "JANUARY";
    GoogleChromeManagementV1DeviceAueCountReportAueMonthEnum["February"] = "FEBRUARY";
    GoogleChromeManagementV1DeviceAueCountReportAueMonthEnum["March"] = "MARCH";
    GoogleChromeManagementV1DeviceAueCountReportAueMonthEnum["April"] = "APRIL";
    GoogleChromeManagementV1DeviceAueCountReportAueMonthEnum["May"] = "MAY";
    GoogleChromeManagementV1DeviceAueCountReportAueMonthEnum["June"] = "JUNE";
    GoogleChromeManagementV1DeviceAueCountReportAueMonthEnum["July"] = "JULY";
    GoogleChromeManagementV1DeviceAueCountReportAueMonthEnum["August"] = "AUGUST";
    GoogleChromeManagementV1DeviceAueCountReportAueMonthEnum["September"] = "SEPTEMBER";
    GoogleChromeManagementV1DeviceAueCountReportAueMonthEnum["October"] = "OCTOBER";
    GoogleChromeManagementV1DeviceAueCountReportAueMonthEnum["November"] = "NOVEMBER";
    GoogleChromeManagementV1DeviceAueCountReportAueMonthEnum["December"] = "DECEMBER";
})(GoogleChromeManagementV1DeviceAueCountReportAueMonthEnum || (GoogleChromeManagementV1DeviceAueCountReportAueMonthEnum = {}));
// GoogleChromeManagementV1DeviceAueCountReport
/**
 * Report for CountChromeDevicesPerAueDateResponse, contains the count of devices of a specific model and auto update expiration range.
**/
var GoogleChromeManagementV1DeviceAueCountReport = /** @class */ (function (_super) {
    __extends(GoogleChromeManagementV1DeviceAueCountReport, _super);
    function GoogleChromeManagementV1DeviceAueCountReport() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=aueMonth" }),
        __metadata("design:type", String)
    ], GoogleChromeManagementV1DeviceAueCountReport.prototype, "aueMonth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=aueYear" }),
        __metadata("design:type", String)
    ], GoogleChromeManagementV1DeviceAueCountReport.prototype, "aueYear", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count" }),
        __metadata("design:type", String)
    ], GoogleChromeManagementV1DeviceAueCountReport.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expired" }),
        __metadata("design:type", Boolean)
    ], GoogleChromeManagementV1DeviceAueCountReport.prototype, "expired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=model" }),
        __metadata("design:type", String)
    ], GoogleChromeManagementV1DeviceAueCountReport.prototype, "model", void 0);
    return GoogleChromeManagementV1DeviceAueCountReport;
}(SpeakeasyBase));
export { GoogleChromeManagementV1DeviceAueCountReport };
