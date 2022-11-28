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
var GetAppsBySafeNameSafeNamePathParams = /** @class */ (function (_super) {
    __extends(GetAppsBySafeNameSafeNamePathParams, _super);
    function GetAppsBySafeNameSafeNamePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=safeName" }),
        __metadata("design:type", String)
    ], GetAppsBySafeNameSafeNamePathParams.prototype, "safeName", void 0);
    return GetAppsBySafeNameSafeNamePathParams;
}(SpeakeasyBase));
export { GetAppsBySafeNameSafeNamePathParams };
var GetAppsBySafeNameSafeNameQueryParams = /** @class */ (function (_super) {
    __extends(GetAppsBySafeNameSafeNameQueryParams, _super);
    function GetAppsBySafeNameSafeNameQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=trackViews" }),
        __metadata("design:type", Boolean)
    ], GetAppsBySafeNameSafeNameQueryParams.prototype, "trackViews", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userId" }),
        __metadata("design:type", String)
    ], GetAppsBySafeNameSafeNameQueryParams.prototype, "userId", void 0);
    return GetAppsBySafeNameSafeNameQueryParams;
}(SpeakeasyBase));
export { GetAppsBySafeNameSafeNameQueryParams };
var GetAppsBySafeNameSafeNameRequest = /** @class */ (function (_super) {
    __extends(GetAppsBySafeNameSafeNameRequest, _super);
    function GetAppsBySafeNameSafeNameRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAppsBySafeNameSafeNamePathParams)
    ], GetAppsBySafeNameSafeNameRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAppsBySafeNameSafeNameQueryParams)
    ], GetAppsBySafeNameSafeNameRequest.prototype, "queryParams", void 0);
    return GetAppsBySafeNameSafeNameRequest;
}(SpeakeasyBase));
export { GetAppsBySafeNameSafeNameRequest };
var GetAppsBySafeNameSafeNameResponse = /** @class */ (function (_super) {
    __extends(GetAppsBySafeNameSafeNameResponse, _super);
    function GetAppsBySafeNameSafeNameResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetAppsBySafeNameSafeNameResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAppsBySafeNameSafeNameResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAppsBySafeNameSafeNameResponse.prototype, "statusCode", void 0);
    return GetAppsBySafeNameSafeNameResponse;
}(SpeakeasyBase));
export { GetAppsBySafeNameSafeNameResponse };
