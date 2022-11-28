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
import * as shared from "../shared";
var GetLinodeTransferByYearMonthPathParams = /** @class */ (function (_super) {
    __extends(GetLinodeTransferByYearMonthPathParams, _super);
    function GetLinodeTransferByYearMonthPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=linodeId" }),
        __metadata("design:type", Number)
    ], GetLinodeTransferByYearMonthPathParams.prototype, "linodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=month" }),
        __metadata("design:type", Number)
    ], GetLinodeTransferByYearMonthPathParams.prototype, "month", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=year" }),
        __metadata("design:type", Number)
    ], GetLinodeTransferByYearMonthPathParams.prototype, "year", void 0);
    return GetLinodeTransferByYearMonthPathParams;
}(SpeakeasyBase));
export { GetLinodeTransferByYearMonthPathParams };
var GetLinodeTransferByYearMonthSecurity = /** @class */ (function (_super) {
    __extends(GetLinodeTransferByYearMonthSecurity, _super);
    function GetLinodeTransferByYearMonthSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], GetLinodeTransferByYearMonthSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], GetLinodeTransferByYearMonthSecurity.prototype, "oauth", void 0);
    return GetLinodeTransferByYearMonthSecurity;
}(SpeakeasyBase));
export { GetLinodeTransferByYearMonthSecurity };
var GetLinodeTransferByYearMonthDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(GetLinodeTransferByYearMonthDefaultApplicationJson, _super);
    function GetLinodeTransferByYearMonthDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], GetLinodeTransferByYearMonthDefaultApplicationJson.prototype, "errors", void 0);
    return GetLinodeTransferByYearMonthDefaultApplicationJson;
}(SpeakeasyBase));
export { GetLinodeTransferByYearMonthDefaultApplicationJson };
var GetLinodeTransferByYearMonthRequest = /** @class */ (function (_super) {
    __extends(GetLinodeTransferByYearMonthRequest, _super);
    function GetLinodeTransferByYearMonthRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLinodeTransferByYearMonthPathParams)
    ], GetLinodeTransferByYearMonthRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLinodeTransferByYearMonthSecurity)
    ], GetLinodeTransferByYearMonthRequest.prototype, "security", void 0);
    return GetLinodeTransferByYearMonthRequest;
}(SpeakeasyBase));
export { GetLinodeTransferByYearMonthRequest };
var GetLinodeTransferByYearMonthResponse = /** @class */ (function (_super) {
    __extends(GetLinodeTransferByYearMonthResponse, _super);
    function GetLinodeTransferByYearMonthResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetLinodeTransferByYearMonthResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetLinodeTransferByYearMonthResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetLinodeTransferByYearMonthResponse.prototype, "getLinodeTransferByYearMonth200ApplicationJsonAny", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLinodeTransferByYearMonthDefaultApplicationJson)
    ], GetLinodeTransferByYearMonthResponse.prototype, "getLinodeTransferByYearMonthDefaultApplicationJsonObject", void 0);
    return GetLinodeTransferByYearMonthResponse;
}(SpeakeasyBase));
export { GetLinodeTransferByYearMonthResponse };
