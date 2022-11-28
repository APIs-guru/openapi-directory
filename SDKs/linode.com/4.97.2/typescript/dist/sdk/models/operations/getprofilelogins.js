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
var GetProfileLoginsSecurity = /** @class */ (function (_super) {
    __extends(GetProfileLoginsSecurity, _super);
    function GetProfileLoginsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], GetProfileLoginsSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], GetProfileLoginsSecurity.prototype, "oauth", void 0);
    return GetProfileLoginsSecurity;
}(SpeakeasyBase));
export { GetProfileLoginsSecurity };
var GetProfileLogins200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetProfileLogins200ApplicationJson, _super);
    function GetProfileLogins200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: shared.Login }),
        __metadata("design:type", Array)
    ], GetProfileLogins200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], GetProfileLogins200ApplicationJson.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pages" }),
        __metadata("design:type", Number)
    ], GetProfileLogins200ApplicationJson.prototype, "pages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results" }),
        __metadata("design:type", Number)
    ], GetProfileLogins200ApplicationJson.prototype, "results", void 0);
    return GetProfileLogins200ApplicationJson;
}(SpeakeasyBase));
export { GetProfileLogins200ApplicationJson };
var GetProfileLoginsDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(GetProfileLoginsDefaultApplicationJson, _super);
    function GetProfileLoginsDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], GetProfileLoginsDefaultApplicationJson.prototype, "errors", void 0);
    return GetProfileLoginsDefaultApplicationJson;
}(SpeakeasyBase));
export { GetProfileLoginsDefaultApplicationJson };
var GetProfileLoginsRequest = /** @class */ (function (_super) {
    __extends(GetProfileLoginsRequest, _super);
    function GetProfileLoginsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetProfileLoginsSecurity)
    ], GetProfileLoginsRequest.prototype, "security", void 0);
    return GetProfileLoginsRequest;
}(SpeakeasyBase));
export { GetProfileLoginsRequest };
var GetProfileLoginsResponse = /** @class */ (function (_super) {
    __extends(GetProfileLoginsResponse, _super);
    function GetProfileLoginsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetProfileLoginsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetProfileLoginsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetProfileLogins200ApplicationJson)
    ], GetProfileLoginsResponse.prototype, "getProfileLogins200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetProfileLoginsDefaultApplicationJson)
    ], GetProfileLoginsResponse.prototype, "getProfileLoginsDefaultApplicationJsonObject", void 0);
    return GetProfileLoginsResponse;
}(SpeakeasyBase));
export { GetProfileLoginsResponse };
