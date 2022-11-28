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
var FirebasehostingSitesChannelsCreatePathParams = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesChannelsCreatePathParams, _super);
    function FirebasehostingSitesChannelsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesChannelsCreatePathParams.prototype, "parent", void 0);
    return FirebasehostingSitesChannelsCreatePathParams;
}(SpeakeasyBase));
export { FirebasehostingSitesChannelsCreatePathParams };
var FirebasehostingSitesChannelsCreateQueryParams = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesChannelsCreateQueryParams, _super);
    function FirebasehostingSitesChannelsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesChannelsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesChannelsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesChannelsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesChannelsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=channelId" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesChannelsCreateQueryParams.prototype, "channelId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesChannelsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesChannelsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesChannelsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirebasehostingSitesChannelsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesChannelsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesChannelsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesChannelsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return FirebasehostingSitesChannelsCreateQueryParams;
}(SpeakeasyBase));
export { FirebasehostingSitesChannelsCreateQueryParams };
var FirebasehostingSitesChannelsCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesChannelsCreateSecurityOption1, _super);
    function FirebasehostingSitesChannelsCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebasehostingSitesChannelsCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebasehostingSitesChannelsCreateSecurityOption1.prototype, "oauth2c", void 0);
    return FirebasehostingSitesChannelsCreateSecurityOption1;
}(SpeakeasyBase));
export { FirebasehostingSitesChannelsCreateSecurityOption1 };
var FirebasehostingSitesChannelsCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesChannelsCreateSecurityOption2, _super);
    function FirebasehostingSitesChannelsCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebasehostingSitesChannelsCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebasehostingSitesChannelsCreateSecurityOption2.prototype, "oauth2c", void 0);
    return FirebasehostingSitesChannelsCreateSecurityOption2;
}(SpeakeasyBase));
export { FirebasehostingSitesChannelsCreateSecurityOption2 };
var FirebasehostingSitesChannelsCreateSecurity = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesChannelsCreateSecurity, _super);
    function FirebasehostingSitesChannelsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebasehostingSitesChannelsCreateSecurityOption1)
    ], FirebasehostingSitesChannelsCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebasehostingSitesChannelsCreateSecurityOption2)
    ], FirebasehostingSitesChannelsCreateSecurity.prototype, "option2", void 0);
    return FirebasehostingSitesChannelsCreateSecurity;
}(SpeakeasyBase));
export { FirebasehostingSitesChannelsCreateSecurity };
var FirebasehostingSitesChannelsCreateRequest = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesChannelsCreateRequest, _super);
    function FirebasehostingSitesChannelsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebasehostingSitesChannelsCreatePathParams)
    ], FirebasehostingSitesChannelsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebasehostingSitesChannelsCreateQueryParams)
    ], FirebasehostingSitesChannelsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ChannelInput)
    ], FirebasehostingSitesChannelsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebasehostingSitesChannelsCreateSecurity)
    ], FirebasehostingSitesChannelsCreateRequest.prototype, "security", void 0);
    return FirebasehostingSitesChannelsCreateRequest;
}(SpeakeasyBase));
export { FirebasehostingSitesChannelsCreateRequest };
var FirebasehostingSitesChannelsCreateResponse = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesChannelsCreateResponse, _super);
    function FirebasehostingSitesChannelsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Channel)
    ], FirebasehostingSitesChannelsCreateResponse.prototype, "channel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FirebasehostingSitesChannelsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FirebasehostingSitesChannelsCreateResponse.prototype, "statusCode", void 0);
    return FirebasehostingSitesChannelsCreateResponse;
}(SpeakeasyBase));
export { FirebasehostingSitesChannelsCreateResponse };
