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
export var GetVlaNsServerList = [
    "https://api.linode.com/v4",
    "https://api.linode.com/v4beta",
];
var GetVlaNsQueryParams = /** @class */ (function (_super) {
    __extends(GetVlaNsQueryParams, _super);
    function GetVlaNsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetVlaNsQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], GetVlaNsQueryParams.prototype, "pageSize", void 0);
    return GetVlaNsQueryParams;
}(SpeakeasyBase));
export { GetVlaNsQueryParams };
var GetVlaNsSecurity = /** @class */ (function (_super) {
    __extends(GetVlaNsSecurity, _super);
    function GetVlaNsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], GetVlaNsSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], GetVlaNsSecurity.prototype, "oauth", void 0);
    return GetVlaNsSecurity;
}(SpeakeasyBase));
export { GetVlaNsSecurity };
var GetVlaNs200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetVlaNs200ApplicationJson, _super);
    function GetVlaNs200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: shared.Vlans }),
        __metadata("design:type", Array)
    ], GetVlaNs200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], GetVlaNs200ApplicationJson.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pages" }),
        __metadata("design:type", Number)
    ], GetVlaNs200ApplicationJson.prototype, "pages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results" }),
        __metadata("design:type", Number)
    ], GetVlaNs200ApplicationJson.prototype, "results", void 0);
    return GetVlaNs200ApplicationJson;
}(SpeakeasyBase));
export { GetVlaNs200ApplicationJson };
var GetVlaNsDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(GetVlaNsDefaultApplicationJson, _super);
    function GetVlaNsDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], GetVlaNsDefaultApplicationJson.prototype, "errors", void 0);
    return GetVlaNsDefaultApplicationJson;
}(SpeakeasyBase));
export { GetVlaNsDefaultApplicationJson };
var GetVlaNsRequest = /** @class */ (function (_super) {
    __extends(GetVlaNsRequest, _super);
    function GetVlaNsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetVlaNsRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetVlaNsQueryParams)
    ], GetVlaNsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetVlaNsSecurity)
    ], GetVlaNsRequest.prototype, "security", void 0);
    return GetVlaNsRequest;
}(SpeakeasyBase));
export { GetVlaNsRequest };
var GetVlaNsResponse = /** @class */ (function (_super) {
    __extends(GetVlaNsResponse, _super);
    function GetVlaNsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetVlaNsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetVlaNsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetVlaNs200ApplicationJson)
    ], GetVlaNsResponse.prototype, "getVlaNs200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetVlaNsDefaultApplicationJson)
    ], GetVlaNsResponse.prototype, "getVlaNsDefaultApplicationJsonObject", void 0);
    return GetVlaNsResponse;
}(SpeakeasyBase));
export { GetVlaNsResponse };
