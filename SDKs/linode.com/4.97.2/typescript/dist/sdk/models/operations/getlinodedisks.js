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
var GetLinodeDisksPathParams = /** @class */ (function (_super) {
    __extends(GetLinodeDisksPathParams, _super);
    function GetLinodeDisksPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=linodeId" }),
        __metadata("design:type", Number)
    ], GetLinodeDisksPathParams.prototype, "linodeId", void 0);
    return GetLinodeDisksPathParams;
}(SpeakeasyBase));
export { GetLinodeDisksPathParams };
var GetLinodeDisksQueryParams = /** @class */ (function (_super) {
    __extends(GetLinodeDisksQueryParams, _super);
    function GetLinodeDisksQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetLinodeDisksQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], GetLinodeDisksQueryParams.prototype, "pageSize", void 0);
    return GetLinodeDisksQueryParams;
}(SpeakeasyBase));
export { GetLinodeDisksQueryParams };
var GetLinodeDisksSecurity = /** @class */ (function (_super) {
    __extends(GetLinodeDisksSecurity, _super);
    function GetLinodeDisksSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], GetLinodeDisksSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], GetLinodeDisksSecurity.prototype, "oauth", void 0);
    return GetLinodeDisksSecurity;
}(SpeakeasyBase));
export { GetLinodeDisksSecurity };
var GetLinodeDisks200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetLinodeDisks200ApplicationJson, _super);
    function GetLinodeDisks200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: shared.Disk }),
        __metadata("design:type", Array)
    ], GetLinodeDisks200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], GetLinodeDisks200ApplicationJson.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pages" }),
        __metadata("design:type", Number)
    ], GetLinodeDisks200ApplicationJson.prototype, "pages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results" }),
        __metadata("design:type", Number)
    ], GetLinodeDisks200ApplicationJson.prototype, "results", void 0);
    return GetLinodeDisks200ApplicationJson;
}(SpeakeasyBase));
export { GetLinodeDisks200ApplicationJson };
var GetLinodeDisksDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(GetLinodeDisksDefaultApplicationJson, _super);
    function GetLinodeDisksDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], GetLinodeDisksDefaultApplicationJson.prototype, "errors", void 0);
    return GetLinodeDisksDefaultApplicationJson;
}(SpeakeasyBase));
export { GetLinodeDisksDefaultApplicationJson };
var GetLinodeDisksRequest = /** @class */ (function (_super) {
    __extends(GetLinodeDisksRequest, _super);
    function GetLinodeDisksRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLinodeDisksPathParams)
    ], GetLinodeDisksRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLinodeDisksQueryParams)
    ], GetLinodeDisksRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLinodeDisksSecurity)
    ], GetLinodeDisksRequest.prototype, "security", void 0);
    return GetLinodeDisksRequest;
}(SpeakeasyBase));
export { GetLinodeDisksRequest };
var GetLinodeDisksResponse = /** @class */ (function (_super) {
    __extends(GetLinodeDisksResponse, _super);
    function GetLinodeDisksResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetLinodeDisksResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetLinodeDisksResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLinodeDisks200ApplicationJson)
    ], GetLinodeDisksResponse.prototype, "getLinodeDisks200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLinodeDisksDefaultApplicationJson)
    ], GetLinodeDisksResponse.prototype, "getLinodeDisksDefaultApplicationJsonObject", void 0);
    return GetLinodeDisksResponse;
}(SpeakeasyBase));
export { GetLinodeDisksResponse };
