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
var GetDeviceCameraAnalyticsRecentPathParams = /** @class */ (function (_super) {
    __extends(GetDeviceCameraAnalyticsRecentPathParams, _super);
    function GetDeviceCameraAnalyticsRecentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serial" }),
        __metadata("design:type", String)
    ], GetDeviceCameraAnalyticsRecentPathParams.prototype, "serial", void 0);
    return GetDeviceCameraAnalyticsRecentPathParams;
}(SpeakeasyBase));
export { GetDeviceCameraAnalyticsRecentPathParams };
export var GetDeviceCameraAnalyticsRecentObjectTypeEnum;
(function (GetDeviceCameraAnalyticsRecentObjectTypeEnum) {
    GetDeviceCameraAnalyticsRecentObjectTypeEnum["Person"] = "person";
    GetDeviceCameraAnalyticsRecentObjectTypeEnum["Vehicle"] = "vehicle";
})(GetDeviceCameraAnalyticsRecentObjectTypeEnum || (GetDeviceCameraAnalyticsRecentObjectTypeEnum = {}));
var GetDeviceCameraAnalyticsRecentQueryParams = /** @class */ (function (_super) {
    __extends(GetDeviceCameraAnalyticsRecentQueryParams, _super);
    function GetDeviceCameraAnalyticsRecentQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=objectType" }),
        __metadata("design:type", String)
    ], GetDeviceCameraAnalyticsRecentQueryParams.prototype, "objectType", void 0);
    return GetDeviceCameraAnalyticsRecentQueryParams;
}(SpeakeasyBase));
export { GetDeviceCameraAnalyticsRecentQueryParams };
var GetDeviceCameraAnalyticsRecentRequest = /** @class */ (function (_super) {
    __extends(GetDeviceCameraAnalyticsRecentRequest, _super);
    function GetDeviceCameraAnalyticsRecentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDeviceCameraAnalyticsRecentPathParams)
    ], GetDeviceCameraAnalyticsRecentRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDeviceCameraAnalyticsRecentQueryParams)
    ], GetDeviceCameraAnalyticsRecentRequest.prototype, "queryParams", void 0);
    return GetDeviceCameraAnalyticsRecentRequest;
}(SpeakeasyBase));
export { GetDeviceCameraAnalyticsRecentRequest };
var GetDeviceCameraAnalyticsRecentResponse = /** @class */ (function (_super) {
    __extends(GetDeviceCameraAnalyticsRecentResponse, _super);
    function GetDeviceCameraAnalyticsRecentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDeviceCameraAnalyticsRecentResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDeviceCameraAnalyticsRecentResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetDeviceCameraAnalyticsRecentResponse.prototype, "getDeviceCameraAnalyticsRecent200ApplicationJsonObject", void 0);
    return GetDeviceCameraAnalyticsRecentResponse;
}(SpeakeasyBase));
export { GetDeviceCameraAnalyticsRecentResponse };
