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
var GetDeviceCameraAnalyticsOverviewPathParams = /** @class */ (function (_super) {
    __extends(GetDeviceCameraAnalyticsOverviewPathParams, _super);
    function GetDeviceCameraAnalyticsOverviewPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serial" }),
        __metadata("design:type", String)
    ], GetDeviceCameraAnalyticsOverviewPathParams.prototype, "serial", void 0);
    return GetDeviceCameraAnalyticsOverviewPathParams;
}(SpeakeasyBase));
export { GetDeviceCameraAnalyticsOverviewPathParams };
export var GetDeviceCameraAnalyticsOverviewObjectTypeEnum;
(function (GetDeviceCameraAnalyticsOverviewObjectTypeEnum) {
    GetDeviceCameraAnalyticsOverviewObjectTypeEnum["Person"] = "person";
    GetDeviceCameraAnalyticsOverviewObjectTypeEnum["Vehicle"] = "vehicle";
})(GetDeviceCameraAnalyticsOverviewObjectTypeEnum || (GetDeviceCameraAnalyticsOverviewObjectTypeEnum = {}));
var GetDeviceCameraAnalyticsOverviewQueryParams = /** @class */ (function (_super) {
    __extends(GetDeviceCameraAnalyticsOverviewQueryParams, _super);
    function GetDeviceCameraAnalyticsOverviewQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=objectType" }),
        __metadata("design:type", String)
    ], GetDeviceCameraAnalyticsOverviewQueryParams.prototype, "objectType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=t0" }),
        __metadata("design:type", String)
    ], GetDeviceCameraAnalyticsOverviewQueryParams.prototype, "t0", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=t1" }),
        __metadata("design:type", String)
    ], GetDeviceCameraAnalyticsOverviewQueryParams.prototype, "t1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timespan" }),
        __metadata("design:type", Number)
    ], GetDeviceCameraAnalyticsOverviewQueryParams.prototype, "timespan", void 0);
    return GetDeviceCameraAnalyticsOverviewQueryParams;
}(SpeakeasyBase));
export { GetDeviceCameraAnalyticsOverviewQueryParams };
var GetDeviceCameraAnalyticsOverviewRequest = /** @class */ (function (_super) {
    __extends(GetDeviceCameraAnalyticsOverviewRequest, _super);
    function GetDeviceCameraAnalyticsOverviewRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDeviceCameraAnalyticsOverviewPathParams)
    ], GetDeviceCameraAnalyticsOverviewRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDeviceCameraAnalyticsOverviewQueryParams)
    ], GetDeviceCameraAnalyticsOverviewRequest.prototype, "queryParams", void 0);
    return GetDeviceCameraAnalyticsOverviewRequest;
}(SpeakeasyBase));
export { GetDeviceCameraAnalyticsOverviewRequest };
var GetDeviceCameraAnalyticsOverviewResponse = /** @class */ (function (_super) {
    __extends(GetDeviceCameraAnalyticsOverviewResponse, _super);
    function GetDeviceCameraAnalyticsOverviewResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDeviceCameraAnalyticsOverviewResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDeviceCameraAnalyticsOverviewResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetDeviceCameraAnalyticsOverviewResponse.prototype, "getDeviceCameraAnalyticsOverview200ApplicationJsonObject", void 0);
    return GetDeviceCameraAnalyticsOverviewResponse;
}(SpeakeasyBase));
export { GetDeviceCameraAnalyticsOverviewResponse };
