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
var GetProfileAppsQueryParams = /** @class */ (function (_super) {
    __extends(GetProfileAppsQueryParams, _super);
    function GetProfileAppsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetProfileAppsQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], GetProfileAppsQueryParams.prototype, "pageSize", void 0);
    return GetProfileAppsQueryParams;
}(SpeakeasyBase));
export { GetProfileAppsQueryParams };
var GetProfileAppsSecurity = /** @class */ (function (_super) {
    __extends(GetProfileAppsSecurity, _super);
    function GetProfileAppsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], GetProfileAppsSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], GetProfileAppsSecurity.prototype, "oauth", void 0);
    return GetProfileAppsSecurity;
}(SpeakeasyBase));
export { GetProfileAppsSecurity };
var GetProfileApps200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetProfileApps200ApplicationJson, _super);
    function GetProfileApps200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: shared.AuthorizedApp }),
        __metadata("design:type", Array)
    ], GetProfileApps200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], GetProfileApps200ApplicationJson.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pages" }),
        __metadata("design:type", Number)
    ], GetProfileApps200ApplicationJson.prototype, "pages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results" }),
        __metadata("design:type", Number)
    ], GetProfileApps200ApplicationJson.prototype, "results", void 0);
    return GetProfileApps200ApplicationJson;
}(SpeakeasyBase));
export { GetProfileApps200ApplicationJson };
var GetProfileAppsDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(GetProfileAppsDefaultApplicationJson, _super);
    function GetProfileAppsDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], GetProfileAppsDefaultApplicationJson.prototype, "errors", void 0);
    return GetProfileAppsDefaultApplicationJson;
}(SpeakeasyBase));
export { GetProfileAppsDefaultApplicationJson };
var GetProfileAppsRequest = /** @class */ (function (_super) {
    __extends(GetProfileAppsRequest, _super);
    function GetProfileAppsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetProfileAppsQueryParams)
    ], GetProfileAppsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetProfileAppsSecurity)
    ], GetProfileAppsRequest.prototype, "security", void 0);
    return GetProfileAppsRequest;
}(SpeakeasyBase));
export { GetProfileAppsRequest };
var GetProfileAppsResponse = /** @class */ (function (_super) {
    __extends(GetProfileAppsResponse, _super);
    function GetProfileAppsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetProfileAppsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetProfileAppsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetProfileApps200ApplicationJson)
    ], GetProfileAppsResponse.prototype, "getProfileApps200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetProfileAppsDefaultApplicationJson)
    ], GetProfileAppsResponse.prototype, "getProfileAppsDefaultApplicationJsonObject", void 0);
    return GetProfileAppsResponse;
}(SpeakeasyBase));
export { GetProfileAppsResponse };
