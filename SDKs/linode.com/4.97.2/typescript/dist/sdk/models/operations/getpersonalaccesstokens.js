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
var GetPersonalAccessTokensSecurity = /** @class */ (function (_super) {
    __extends(GetPersonalAccessTokensSecurity, _super);
    function GetPersonalAccessTokensSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], GetPersonalAccessTokensSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], GetPersonalAccessTokensSecurity.prototype, "oauth", void 0);
    return GetPersonalAccessTokensSecurity;
}(SpeakeasyBase));
export { GetPersonalAccessTokensSecurity };
var GetPersonalAccessTokens200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetPersonalAccessTokens200ApplicationJson, _super);
    function GetPersonalAccessTokens200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: shared.PersonalAccessToken }),
        __metadata("design:type", Array)
    ], GetPersonalAccessTokens200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], GetPersonalAccessTokens200ApplicationJson.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pages" }),
        __metadata("design:type", Number)
    ], GetPersonalAccessTokens200ApplicationJson.prototype, "pages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results" }),
        __metadata("design:type", Number)
    ], GetPersonalAccessTokens200ApplicationJson.prototype, "results", void 0);
    return GetPersonalAccessTokens200ApplicationJson;
}(SpeakeasyBase));
export { GetPersonalAccessTokens200ApplicationJson };
var GetPersonalAccessTokensDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(GetPersonalAccessTokensDefaultApplicationJson, _super);
    function GetPersonalAccessTokensDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], GetPersonalAccessTokensDefaultApplicationJson.prototype, "errors", void 0);
    return GetPersonalAccessTokensDefaultApplicationJson;
}(SpeakeasyBase));
export { GetPersonalAccessTokensDefaultApplicationJson };
var GetPersonalAccessTokensRequest = /** @class */ (function (_super) {
    __extends(GetPersonalAccessTokensRequest, _super);
    function GetPersonalAccessTokensRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPersonalAccessTokensSecurity)
    ], GetPersonalAccessTokensRequest.prototype, "security", void 0);
    return GetPersonalAccessTokensRequest;
}(SpeakeasyBase));
export { GetPersonalAccessTokensRequest };
var GetPersonalAccessTokensResponse = /** @class */ (function (_super) {
    __extends(GetPersonalAccessTokensResponse, _super);
    function GetPersonalAccessTokensResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetPersonalAccessTokensResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetPersonalAccessTokensResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPersonalAccessTokens200ApplicationJson)
    ], GetPersonalAccessTokensResponse.prototype, "getPersonalAccessTokens200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPersonalAccessTokensDefaultApplicationJson)
    ], GetPersonalAccessTokensResponse.prototype, "getPersonalAccessTokensDefaultApplicationJsonObject", void 0);
    return GetPersonalAccessTokensResponse;
}(SpeakeasyBase));
export { GetPersonalAccessTokensResponse };
