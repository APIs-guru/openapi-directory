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
var GetLinodeInstancesQueryParams = /** @class */ (function (_super) {
    __extends(GetLinodeInstancesQueryParams, _super);
    function GetLinodeInstancesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetLinodeInstancesQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], GetLinodeInstancesQueryParams.prototype, "pageSize", void 0);
    return GetLinodeInstancesQueryParams;
}(SpeakeasyBase));
export { GetLinodeInstancesQueryParams };
var GetLinodeInstancesSecurity = /** @class */ (function (_super) {
    __extends(GetLinodeInstancesSecurity, _super);
    function GetLinodeInstancesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], GetLinodeInstancesSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], GetLinodeInstancesSecurity.prototype, "oauth", void 0);
    return GetLinodeInstancesSecurity;
}(SpeakeasyBase));
export { GetLinodeInstancesSecurity };
var GetLinodeInstances200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetLinodeInstances200ApplicationJson, _super);
    function GetLinodeInstances200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: shared.Linode }),
        __metadata("design:type", Array)
    ], GetLinodeInstances200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], GetLinodeInstances200ApplicationJson.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pages" }),
        __metadata("design:type", Number)
    ], GetLinodeInstances200ApplicationJson.prototype, "pages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results" }),
        __metadata("design:type", Number)
    ], GetLinodeInstances200ApplicationJson.prototype, "results", void 0);
    return GetLinodeInstances200ApplicationJson;
}(SpeakeasyBase));
export { GetLinodeInstances200ApplicationJson };
var GetLinodeInstancesDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(GetLinodeInstancesDefaultApplicationJson, _super);
    function GetLinodeInstancesDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], GetLinodeInstancesDefaultApplicationJson.prototype, "errors", void 0);
    return GetLinodeInstancesDefaultApplicationJson;
}(SpeakeasyBase));
export { GetLinodeInstancesDefaultApplicationJson };
var GetLinodeInstancesRequest = /** @class */ (function (_super) {
    __extends(GetLinodeInstancesRequest, _super);
    function GetLinodeInstancesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLinodeInstancesQueryParams)
    ], GetLinodeInstancesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLinodeInstancesSecurity)
    ], GetLinodeInstancesRequest.prototype, "security", void 0);
    return GetLinodeInstancesRequest;
}(SpeakeasyBase));
export { GetLinodeInstancesRequest };
var GetLinodeInstancesResponse = /** @class */ (function (_super) {
    __extends(GetLinodeInstancesResponse, _super);
    function GetLinodeInstancesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetLinodeInstancesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetLinodeInstancesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLinodeInstances200ApplicationJson)
    ], GetLinodeInstancesResponse.prototype, "getLinodeInstances200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLinodeInstancesDefaultApplicationJson)
    ], GetLinodeInstancesResponse.prototype, "getLinodeInstancesDefaultApplicationJsonObject", void 0);
    return GetLinodeInstancesResponse;
}(SpeakeasyBase));
export { GetLinodeInstancesResponse };
