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
var GetLinodeConfigsPathParams = /** @class */ (function (_super) {
    __extends(GetLinodeConfigsPathParams, _super);
    function GetLinodeConfigsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=linodeId" }),
        __metadata("design:type", Number)
    ], GetLinodeConfigsPathParams.prototype, "linodeId", void 0);
    return GetLinodeConfigsPathParams;
}(SpeakeasyBase));
export { GetLinodeConfigsPathParams };
var GetLinodeConfigsQueryParams = /** @class */ (function (_super) {
    __extends(GetLinodeConfigsQueryParams, _super);
    function GetLinodeConfigsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetLinodeConfigsQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], GetLinodeConfigsQueryParams.prototype, "pageSize", void 0);
    return GetLinodeConfigsQueryParams;
}(SpeakeasyBase));
export { GetLinodeConfigsQueryParams };
var GetLinodeConfigsSecurity = /** @class */ (function (_super) {
    __extends(GetLinodeConfigsSecurity, _super);
    function GetLinodeConfigsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], GetLinodeConfigsSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], GetLinodeConfigsSecurity.prototype, "oauth", void 0);
    return GetLinodeConfigsSecurity;
}(SpeakeasyBase));
export { GetLinodeConfigsSecurity };
var GetLinodeConfigs200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetLinodeConfigs200ApplicationJson, _super);
    function GetLinodeConfigs200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: shared.LinodeConfig }),
        __metadata("design:type", Array)
    ], GetLinodeConfigs200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], GetLinodeConfigs200ApplicationJson.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pages" }),
        __metadata("design:type", Number)
    ], GetLinodeConfigs200ApplicationJson.prototype, "pages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results" }),
        __metadata("design:type", Number)
    ], GetLinodeConfigs200ApplicationJson.prototype, "results", void 0);
    return GetLinodeConfigs200ApplicationJson;
}(SpeakeasyBase));
export { GetLinodeConfigs200ApplicationJson };
var GetLinodeConfigsRequest = /** @class */ (function (_super) {
    __extends(GetLinodeConfigsRequest, _super);
    function GetLinodeConfigsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLinodeConfigsPathParams)
    ], GetLinodeConfigsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLinodeConfigsQueryParams)
    ], GetLinodeConfigsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLinodeConfigsSecurity)
    ], GetLinodeConfigsRequest.prototype, "security", void 0);
    return GetLinodeConfigsRequest;
}(SpeakeasyBase));
export { GetLinodeConfigsRequest };
var GetLinodeConfigsResponse = /** @class */ (function (_super) {
    __extends(GetLinodeConfigsResponse, _super);
    function GetLinodeConfigsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetLinodeConfigsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetLinodeConfigsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLinodeConfigs200ApplicationJson)
    ], GetLinodeConfigsResponse.prototype, "getLinodeConfigs200ApplicationJsonObject", void 0);
    return GetLinodeConfigsResponse;
}(SpeakeasyBase));
export { GetLinodeConfigsResponse };
