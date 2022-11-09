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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var PubsubProjectsTopicsGetPathParams = /** @class */ (function (_super) {
    __extends(PubsubProjectsTopicsGetPathParams, _super);
    function PubsubProjectsTopicsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=topic" }),
        __metadata("design:type", String)
    ], PubsubProjectsTopicsGetPathParams.prototype, "topic", void 0);
    return PubsubProjectsTopicsGetPathParams;
}(SpeakeasyBase));
export { PubsubProjectsTopicsGetPathParams };
var PubsubProjectsTopicsGetQueryParams = /** @class */ (function (_super) {
    __extends(PubsubProjectsTopicsGetQueryParams, _super);
    function PubsubProjectsTopicsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], PubsubProjectsTopicsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], PubsubProjectsTopicsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], PubsubProjectsTopicsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], PubsubProjectsTopicsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], PubsubProjectsTopicsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], PubsubProjectsTopicsGetQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], PubsubProjectsTopicsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], PubsubProjectsTopicsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], PubsubProjectsTopicsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], PubsubProjectsTopicsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], PubsubProjectsTopicsGetQueryParams.prototype, "uploadProtocol", void 0);
    return PubsubProjectsTopicsGetQueryParams;
}(SpeakeasyBase));
export { PubsubProjectsTopicsGetQueryParams };
var PubsubProjectsTopicsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(PubsubProjectsTopicsGetSecurityOption1, _super);
    function PubsubProjectsTopicsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PubsubProjectsTopicsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PubsubProjectsTopicsGetSecurityOption1.prototype, "oauth2c", void 0);
    return PubsubProjectsTopicsGetSecurityOption1;
}(SpeakeasyBase));
export { PubsubProjectsTopicsGetSecurityOption1 };
var PubsubProjectsTopicsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(PubsubProjectsTopicsGetSecurityOption2, _super);
    function PubsubProjectsTopicsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PubsubProjectsTopicsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PubsubProjectsTopicsGetSecurityOption2.prototype, "oauth2c", void 0);
    return PubsubProjectsTopicsGetSecurityOption2;
}(SpeakeasyBase));
export { PubsubProjectsTopicsGetSecurityOption2 };
var PubsubProjectsTopicsGetSecurity = /** @class */ (function (_super) {
    __extends(PubsubProjectsTopicsGetSecurity, _super);
    function PubsubProjectsTopicsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PubsubProjectsTopicsGetSecurityOption1)
    ], PubsubProjectsTopicsGetSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PubsubProjectsTopicsGetSecurityOption2)
    ], PubsubProjectsTopicsGetSecurity.prototype, "option2", void 0);
    return PubsubProjectsTopicsGetSecurity;
}(SpeakeasyBase));
export { PubsubProjectsTopicsGetSecurity };
var PubsubProjectsTopicsGetRequest = /** @class */ (function (_super) {
    __extends(PubsubProjectsTopicsGetRequest, _super);
    function PubsubProjectsTopicsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PubsubProjectsTopicsGetPathParams)
    ], PubsubProjectsTopicsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PubsubProjectsTopicsGetQueryParams)
    ], PubsubProjectsTopicsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PubsubProjectsTopicsGetSecurity)
    ], PubsubProjectsTopicsGetRequest.prototype, "security", void 0);
    return PubsubProjectsTopicsGetRequest;
}(SpeakeasyBase));
export { PubsubProjectsTopicsGetRequest };
var PubsubProjectsTopicsGetResponse = /** @class */ (function (_super) {
    __extends(PubsubProjectsTopicsGetResponse, _super);
    function PubsubProjectsTopicsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PubsubProjectsTopicsGetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PubsubProjectsTopicsGetResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Topic)
    ], PubsubProjectsTopicsGetResponse.prototype, "topic", void 0);
    return PubsubProjectsTopicsGetResponse;
}(SpeakeasyBase));
export { PubsubProjectsTopicsGetResponse };
