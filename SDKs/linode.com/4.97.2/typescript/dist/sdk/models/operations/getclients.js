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
var GetClientsQueryParams = /** @class */ (function (_super) {
    __extends(GetClientsQueryParams, _super);
    function GetClientsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetClientsQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], GetClientsQueryParams.prototype, "pageSize", void 0);
    return GetClientsQueryParams;
}(SpeakeasyBase));
export { GetClientsQueryParams };
var GetClientsSecurity = /** @class */ (function (_super) {
    __extends(GetClientsSecurity, _super);
    function GetClientsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], GetClientsSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], GetClientsSecurity.prototype, "oauth", void 0);
    return GetClientsSecurity;
}(SpeakeasyBase));
export { GetClientsSecurity };
var GetClients200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetClients200ApplicationJson, _super);
    function GetClients200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: shared.OAuthClient }),
        __metadata("design:type", Array)
    ], GetClients200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], GetClients200ApplicationJson.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pages" }),
        __metadata("design:type", Number)
    ], GetClients200ApplicationJson.prototype, "pages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results" }),
        __metadata("design:type", Number)
    ], GetClients200ApplicationJson.prototype, "results", void 0);
    return GetClients200ApplicationJson;
}(SpeakeasyBase));
export { GetClients200ApplicationJson };
var GetClientsDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(GetClientsDefaultApplicationJson, _super);
    function GetClientsDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], GetClientsDefaultApplicationJson.prototype, "errors", void 0);
    return GetClientsDefaultApplicationJson;
}(SpeakeasyBase));
export { GetClientsDefaultApplicationJson };
var GetClientsRequest = /** @class */ (function (_super) {
    __extends(GetClientsRequest, _super);
    function GetClientsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetClientsQueryParams)
    ], GetClientsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetClientsSecurity)
    ], GetClientsRequest.prototype, "security", void 0);
    return GetClientsRequest;
}(SpeakeasyBase));
export { GetClientsRequest };
var GetClientsResponse = /** @class */ (function (_super) {
    __extends(GetClientsResponse, _super);
    function GetClientsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetClientsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetClientsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetClients200ApplicationJson)
    ], GetClientsResponse.prototype, "getClients200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetClientsDefaultApplicationJson)
    ], GetClientsResponse.prototype, "getClientsDefaultApplicationJsonObject", void 0);
    return GetClientsResponse;
}(SpeakeasyBase));
export { GetClientsResponse };
