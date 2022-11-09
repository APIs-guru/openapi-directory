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
var PubsubTopicsGetPathParams = /** @class */ (function (_super) {
    __extends(PubsubTopicsGetPathParams, _super);
    function PubsubTopicsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=topic" }),
        __metadata("design:type", String)
    ], PubsubTopicsGetPathParams.prototype, "topic", void 0);
    return PubsubTopicsGetPathParams;
}(SpeakeasyBase));
export { PubsubTopicsGetPathParams };
var PubsubTopicsGetQueryParams = /** @class */ (function (_super) {
    __extends(PubsubTopicsGetQueryParams, _super);
    function PubsubTopicsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], PubsubTopicsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], PubsubTopicsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], PubsubTopicsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], PubsubTopicsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], PubsubTopicsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], PubsubTopicsGetQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], PubsubTopicsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], PubsubTopicsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], PubsubTopicsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], PubsubTopicsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], PubsubTopicsGetQueryParams.prototype, "uploadProtocol", void 0);
    return PubsubTopicsGetQueryParams;
}(SpeakeasyBase));
export { PubsubTopicsGetQueryParams };
var PubsubTopicsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(PubsubTopicsGetSecurityOption1, _super);
    function PubsubTopicsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PubsubTopicsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PubsubTopicsGetSecurityOption1.prototype, "oauth2c", void 0);
    return PubsubTopicsGetSecurityOption1;
}(SpeakeasyBase));
export { PubsubTopicsGetSecurityOption1 };
var PubsubTopicsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(PubsubTopicsGetSecurityOption2, _super);
    function PubsubTopicsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PubsubTopicsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PubsubTopicsGetSecurityOption2.prototype, "oauth2c", void 0);
    return PubsubTopicsGetSecurityOption2;
}(SpeakeasyBase));
export { PubsubTopicsGetSecurityOption2 };
var PubsubTopicsGetSecurity = /** @class */ (function (_super) {
    __extends(PubsubTopicsGetSecurity, _super);
    function PubsubTopicsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PubsubTopicsGetSecurityOption1)
    ], PubsubTopicsGetSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PubsubTopicsGetSecurityOption2)
    ], PubsubTopicsGetSecurity.prototype, "option2", void 0);
    return PubsubTopicsGetSecurity;
}(SpeakeasyBase));
export { PubsubTopicsGetSecurity };
var PubsubTopicsGetRequest = /** @class */ (function (_super) {
    __extends(PubsubTopicsGetRequest, _super);
    function PubsubTopicsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PubsubTopicsGetPathParams)
    ], PubsubTopicsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PubsubTopicsGetQueryParams)
    ], PubsubTopicsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PubsubTopicsGetSecurity)
    ], PubsubTopicsGetRequest.prototype, "security", void 0);
    return PubsubTopicsGetRequest;
}(SpeakeasyBase));
export { PubsubTopicsGetRequest };
var PubsubTopicsGetResponse = /** @class */ (function (_super) {
    __extends(PubsubTopicsGetResponse, _super);
    function PubsubTopicsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PubsubTopicsGetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PubsubTopicsGetResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Topic)
    ], PubsubTopicsGetResponse.prototype, "topic", void 0);
    return PubsubTopicsGetResponse;
}(SpeakeasyBase));
export { PubsubTopicsGetResponse };
