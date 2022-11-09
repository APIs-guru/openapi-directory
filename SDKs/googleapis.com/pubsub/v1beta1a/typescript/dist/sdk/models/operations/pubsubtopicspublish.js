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
var PubsubTopicsPublishQueryParams = /** @class */ (function (_super) {
    __extends(PubsubTopicsPublishQueryParams, _super);
    function PubsubTopicsPublishQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], PubsubTopicsPublishQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], PubsubTopicsPublishQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], PubsubTopicsPublishQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], PubsubTopicsPublishQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], PubsubTopicsPublishQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], PubsubTopicsPublishQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], PubsubTopicsPublishQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], PubsubTopicsPublishQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], PubsubTopicsPublishQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], PubsubTopicsPublishQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], PubsubTopicsPublishQueryParams.prototype, "uploadProtocol", void 0);
    return PubsubTopicsPublishQueryParams;
}(SpeakeasyBase));
export { PubsubTopicsPublishQueryParams };
var PubsubTopicsPublishSecurityOption1 = /** @class */ (function (_super) {
    __extends(PubsubTopicsPublishSecurityOption1, _super);
    function PubsubTopicsPublishSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PubsubTopicsPublishSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PubsubTopicsPublishSecurityOption1.prototype, "oauth2c", void 0);
    return PubsubTopicsPublishSecurityOption1;
}(SpeakeasyBase));
export { PubsubTopicsPublishSecurityOption1 };
var PubsubTopicsPublishSecurityOption2 = /** @class */ (function (_super) {
    __extends(PubsubTopicsPublishSecurityOption2, _super);
    function PubsubTopicsPublishSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PubsubTopicsPublishSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PubsubTopicsPublishSecurityOption2.prototype, "oauth2c", void 0);
    return PubsubTopicsPublishSecurityOption2;
}(SpeakeasyBase));
export { PubsubTopicsPublishSecurityOption2 };
var PubsubTopicsPublishSecurity = /** @class */ (function (_super) {
    __extends(PubsubTopicsPublishSecurity, _super);
    function PubsubTopicsPublishSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PubsubTopicsPublishSecurityOption1)
    ], PubsubTopicsPublishSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PubsubTopicsPublishSecurityOption2)
    ], PubsubTopicsPublishSecurity.prototype, "option2", void 0);
    return PubsubTopicsPublishSecurity;
}(SpeakeasyBase));
export { PubsubTopicsPublishSecurity };
var PubsubTopicsPublishRequest = /** @class */ (function (_super) {
    __extends(PubsubTopicsPublishRequest, _super);
    function PubsubTopicsPublishRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PubsubTopicsPublishQueryParams)
    ], PubsubTopicsPublishRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.PublishRequest)
    ], PubsubTopicsPublishRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PubsubTopicsPublishSecurity)
    ], PubsubTopicsPublishRequest.prototype, "security", void 0);
    return PubsubTopicsPublishRequest;
}(SpeakeasyBase));
export { PubsubTopicsPublishRequest };
var PubsubTopicsPublishResponse = /** @class */ (function (_super) {
    __extends(PubsubTopicsPublishResponse, _super);
    function PubsubTopicsPublishResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PubsubTopicsPublishResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], PubsubTopicsPublishResponse.prototype, "empty", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PubsubTopicsPublishResponse.prototype, "statusCode", void 0);
    return PubsubTopicsPublishResponse;
}(SpeakeasyBase));
export { PubsubTopicsPublishResponse };
