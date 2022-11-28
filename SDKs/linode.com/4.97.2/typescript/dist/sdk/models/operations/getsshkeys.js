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
var GetSshKeysQueryParams = /** @class */ (function (_super) {
    __extends(GetSshKeysQueryParams, _super);
    function GetSshKeysQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetSshKeysQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], GetSshKeysQueryParams.prototype, "pageSize", void 0);
    return GetSshKeysQueryParams;
}(SpeakeasyBase));
export { GetSshKeysQueryParams };
var GetSshKeysSecurity = /** @class */ (function (_super) {
    __extends(GetSshKeysSecurity, _super);
    function GetSshKeysSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], GetSshKeysSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], GetSshKeysSecurity.prototype, "oauth", void 0);
    return GetSshKeysSecurity;
}(SpeakeasyBase));
export { GetSshKeysSecurity };
var GetSshKeys200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetSshKeys200ApplicationJson, _super);
    function GetSshKeys200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: shared.SshKey }),
        __metadata("design:type", Array)
    ], GetSshKeys200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], GetSshKeys200ApplicationJson.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pages" }),
        __metadata("design:type", Number)
    ], GetSshKeys200ApplicationJson.prototype, "pages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results" }),
        __metadata("design:type", Number)
    ], GetSshKeys200ApplicationJson.prototype, "results", void 0);
    return GetSshKeys200ApplicationJson;
}(SpeakeasyBase));
export { GetSshKeys200ApplicationJson };
var GetSshKeysDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(GetSshKeysDefaultApplicationJson, _super);
    function GetSshKeysDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], GetSshKeysDefaultApplicationJson.prototype, "errors", void 0);
    return GetSshKeysDefaultApplicationJson;
}(SpeakeasyBase));
export { GetSshKeysDefaultApplicationJson };
var GetSshKeysRequest = /** @class */ (function (_super) {
    __extends(GetSshKeysRequest, _super);
    function GetSshKeysRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSshKeysQueryParams)
    ], GetSshKeysRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSshKeysSecurity)
    ], GetSshKeysRequest.prototype, "security", void 0);
    return GetSshKeysRequest;
}(SpeakeasyBase));
export { GetSshKeysRequest };
var GetSshKeysResponse = /** @class */ (function (_super) {
    __extends(GetSshKeysResponse, _super);
    function GetSshKeysResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSshKeysResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSshKeysResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSshKeys200ApplicationJson)
    ], GetSshKeysResponse.prototype, "getSshKeys200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSshKeysDefaultApplicationJson)
    ], GetSshKeysResponse.prototype, "getSshKeysDefaultApplicationJsonObject", void 0);
    return GetSshKeysResponse;
}(SpeakeasyBase));
export { GetSshKeysResponse };
