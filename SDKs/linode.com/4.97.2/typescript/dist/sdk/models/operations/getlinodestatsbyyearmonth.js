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
var GetLinodeStatsByYearMonthPathParams = /** @class */ (function (_super) {
    __extends(GetLinodeStatsByYearMonthPathParams, _super);
    function GetLinodeStatsByYearMonthPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=linodeId" }),
        __metadata("design:type", Number)
    ], GetLinodeStatsByYearMonthPathParams.prototype, "linodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=month" }),
        __metadata("design:type", Number)
    ], GetLinodeStatsByYearMonthPathParams.prototype, "month", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=year" }),
        __metadata("design:type", Number)
    ], GetLinodeStatsByYearMonthPathParams.prototype, "year", void 0);
    return GetLinodeStatsByYearMonthPathParams;
}(SpeakeasyBase));
export { GetLinodeStatsByYearMonthPathParams };
var GetLinodeStatsByYearMonthSecurity = /** @class */ (function (_super) {
    __extends(GetLinodeStatsByYearMonthSecurity, _super);
    function GetLinodeStatsByYearMonthSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], GetLinodeStatsByYearMonthSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], GetLinodeStatsByYearMonthSecurity.prototype, "oauth", void 0);
    return GetLinodeStatsByYearMonthSecurity;
}(SpeakeasyBase));
export { GetLinodeStatsByYearMonthSecurity };
var GetLinodeStatsByYearMonthDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(GetLinodeStatsByYearMonthDefaultApplicationJson, _super);
    function GetLinodeStatsByYearMonthDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], GetLinodeStatsByYearMonthDefaultApplicationJson.prototype, "errors", void 0);
    return GetLinodeStatsByYearMonthDefaultApplicationJson;
}(SpeakeasyBase));
export { GetLinodeStatsByYearMonthDefaultApplicationJson };
var GetLinodeStatsByYearMonthRequest = /** @class */ (function (_super) {
    __extends(GetLinodeStatsByYearMonthRequest, _super);
    function GetLinodeStatsByYearMonthRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLinodeStatsByYearMonthPathParams)
    ], GetLinodeStatsByYearMonthRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLinodeStatsByYearMonthSecurity)
    ], GetLinodeStatsByYearMonthRequest.prototype, "security", void 0);
    return GetLinodeStatsByYearMonthRequest;
}(SpeakeasyBase));
export { GetLinodeStatsByYearMonthRequest };
var GetLinodeStatsByYearMonthResponse = /** @class */ (function (_super) {
    __extends(GetLinodeStatsByYearMonthResponse, _super);
    function GetLinodeStatsByYearMonthResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetLinodeStatsByYearMonthResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LinodeStats)
    ], GetLinodeStatsByYearMonthResponse.prototype, "linodeStats", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetLinodeStatsByYearMonthResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLinodeStatsByYearMonthDefaultApplicationJson)
    ], GetLinodeStatsByYearMonthResponse.prototype, "getLinodeStatsByYearMonthDefaultApplicationJsonObject", void 0);
    return GetLinodeStatsByYearMonthResponse;
}(SpeakeasyBase));
export { GetLinodeStatsByYearMonthResponse };
