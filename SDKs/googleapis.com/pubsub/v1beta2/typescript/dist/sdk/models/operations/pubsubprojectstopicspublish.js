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
var PubsubProjectsTopicsPublishPathParams = /** @class */ (function (_super) {
    __extends(PubsubProjectsTopicsPublishPathParams, _super);
    function PubsubProjectsTopicsPublishPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=topic" }),
        __metadata("design:type", String)
    ], PubsubProjectsTopicsPublishPathParams.prototype, "topic", void 0);
    return PubsubProjectsTopicsPublishPathParams;
}(SpeakeasyBase));
export { PubsubProjectsTopicsPublishPathParams };
var PubsubProjectsTopicsPublishQueryParams = /** @class */ (function (_super) {
    __extends(PubsubProjectsTopicsPublishQueryParams, _super);
    function PubsubProjectsTopicsPublishQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], PubsubProjectsTopicsPublishQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], PubsubProjectsTopicsPublishQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], PubsubProjectsTopicsPublishQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], PubsubProjectsTopicsPublishQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], PubsubProjectsTopicsPublishQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], PubsubProjectsTopicsPublishQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], PubsubProjectsTopicsPublishQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], PubsubProjectsTopicsPublishQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], PubsubProjectsTopicsPublishQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], PubsubProjectsTopicsPublishQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], PubsubProjectsTopicsPublishQueryParams.prototype, "uploadProtocol", void 0);
    return PubsubProjectsTopicsPublishQueryParams;
}(SpeakeasyBase));
export { PubsubProjectsTopicsPublishQueryParams };
var PubsubProjectsTopicsPublishSecurityOption1 = /** @class */ (function (_super) {
    __extends(PubsubProjectsTopicsPublishSecurityOption1, _super);
    function PubsubProjectsTopicsPublishSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PubsubProjectsTopicsPublishSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PubsubProjectsTopicsPublishSecurityOption1.prototype, "oauth2c", void 0);
    return PubsubProjectsTopicsPublishSecurityOption1;
}(SpeakeasyBase));
export { PubsubProjectsTopicsPublishSecurityOption1 };
var PubsubProjectsTopicsPublishSecurityOption2 = /** @class */ (function (_super) {
    __extends(PubsubProjectsTopicsPublishSecurityOption2, _super);
    function PubsubProjectsTopicsPublishSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PubsubProjectsTopicsPublishSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PubsubProjectsTopicsPublishSecurityOption2.prototype, "oauth2c", void 0);
    return PubsubProjectsTopicsPublishSecurityOption2;
}(SpeakeasyBase));
export { PubsubProjectsTopicsPublishSecurityOption2 };
var PubsubProjectsTopicsPublishSecurity = /** @class */ (function (_super) {
    __extends(PubsubProjectsTopicsPublishSecurity, _super);
    function PubsubProjectsTopicsPublishSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", PubsubProjectsTopicsPublishSecurityOption1)
    ], PubsubProjectsTopicsPublishSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", PubsubProjectsTopicsPublishSecurityOption2)
    ], PubsubProjectsTopicsPublishSecurity.prototype, "option2", void 0);
    return PubsubProjectsTopicsPublishSecurity;
}(SpeakeasyBase));
export { PubsubProjectsTopicsPublishSecurity };
var PubsubProjectsTopicsPublishRequest = /** @class */ (function (_super) {
    __extends(PubsubProjectsTopicsPublishRequest, _super);
    function PubsubProjectsTopicsPublishRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PubsubProjectsTopicsPublishPathParams)
    ], PubsubProjectsTopicsPublishRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PubsubProjectsTopicsPublishQueryParams)
    ], PubsubProjectsTopicsPublishRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.PublishRequest)
    ], PubsubProjectsTopicsPublishRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PubsubProjectsTopicsPublishSecurity)
    ], PubsubProjectsTopicsPublishRequest.prototype, "security", void 0);
    return PubsubProjectsTopicsPublishRequest;
}(SpeakeasyBase));
export { PubsubProjectsTopicsPublishRequest };
var PubsubProjectsTopicsPublishResponse = /** @class */ (function (_super) {
    __extends(PubsubProjectsTopicsPublishResponse, _super);
    function PubsubProjectsTopicsPublishResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PubsubProjectsTopicsPublishResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PublishResponse)
    ], PubsubProjectsTopicsPublishResponse.prototype, "publishResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PubsubProjectsTopicsPublishResponse.prototype, "statusCode", void 0);
    return PubsubProjectsTopicsPublishResponse;
}(SpeakeasyBase));
export { PubsubProjectsTopicsPublishResponse };
