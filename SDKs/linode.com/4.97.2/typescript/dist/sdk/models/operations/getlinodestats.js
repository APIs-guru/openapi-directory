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
var GetLinodeStatsPathParams = /** @class */ (function (_super) {
    __extends(GetLinodeStatsPathParams, _super);
    function GetLinodeStatsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=linodeId" }),
        __metadata("design:type", Number)
    ], GetLinodeStatsPathParams.prototype, "linodeId", void 0);
    return GetLinodeStatsPathParams;
}(SpeakeasyBase));
export { GetLinodeStatsPathParams };
var GetLinodeStatsSecurity = /** @class */ (function (_super) {
    __extends(GetLinodeStatsSecurity, _super);
    function GetLinodeStatsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], GetLinodeStatsSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], GetLinodeStatsSecurity.prototype, "oauth", void 0);
    return GetLinodeStatsSecurity;
}(SpeakeasyBase));
export { GetLinodeStatsSecurity };
var GetLinodeStatsDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(GetLinodeStatsDefaultApplicationJson, _super);
    function GetLinodeStatsDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], GetLinodeStatsDefaultApplicationJson.prototype, "errors", void 0);
    return GetLinodeStatsDefaultApplicationJson;
}(SpeakeasyBase));
export { GetLinodeStatsDefaultApplicationJson };
var GetLinodeStatsRequest = /** @class */ (function (_super) {
    __extends(GetLinodeStatsRequest, _super);
    function GetLinodeStatsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLinodeStatsPathParams)
    ], GetLinodeStatsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLinodeStatsSecurity)
    ], GetLinodeStatsRequest.prototype, "security", void 0);
    return GetLinodeStatsRequest;
}(SpeakeasyBase));
export { GetLinodeStatsRequest };
var GetLinodeStatsResponse = /** @class */ (function (_super) {
    __extends(GetLinodeStatsResponse, _super);
    function GetLinodeStatsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetLinodeStatsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LinodeStats)
    ], GetLinodeStatsResponse.prototype, "linodeStats", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetLinodeStatsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLinodeStatsDefaultApplicationJson)
    ], GetLinodeStatsResponse.prototype, "getLinodeStatsDefaultApplicationJsonObject", void 0);
    return GetLinodeStatsResponse;
}(SpeakeasyBase));
export { GetLinodeStatsResponse };
