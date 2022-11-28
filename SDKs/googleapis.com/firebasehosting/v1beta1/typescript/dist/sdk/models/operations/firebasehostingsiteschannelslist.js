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
var FirebasehostingSitesChannelsListPathParams = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesChannelsListPathParams, _super);
    function FirebasehostingSitesChannelsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesChannelsListPathParams.prototype, "parent", void 0);
    return FirebasehostingSitesChannelsListPathParams;
}(SpeakeasyBase));
export { FirebasehostingSitesChannelsListPathParams };
var FirebasehostingSitesChannelsListQueryParams = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesChannelsListQueryParams, _super);
    function FirebasehostingSitesChannelsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesChannelsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesChannelsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesChannelsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesChannelsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesChannelsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesChannelsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesChannelsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], FirebasehostingSitesChannelsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesChannelsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirebasehostingSitesChannelsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesChannelsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesChannelsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesChannelsListQueryParams.prototype, "uploadProtocol", void 0);
    return FirebasehostingSitesChannelsListQueryParams;
}(SpeakeasyBase));
export { FirebasehostingSitesChannelsListQueryParams };
var FirebasehostingSitesChannelsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesChannelsListSecurityOption1, _super);
    function FirebasehostingSitesChannelsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebasehostingSitesChannelsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebasehostingSitesChannelsListSecurityOption1.prototype, "oauth2c", void 0);
    return FirebasehostingSitesChannelsListSecurityOption1;
}(SpeakeasyBase));
export { FirebasehostingSitesChannelsListSecurityOption1 };
var FirebasehostingSitesChannelsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesChannelsListSecurityOption2, _super);
    function FirebasehostingSitesChannelsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebasehostingSitesChannelsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebasehostingSitesChannelsListSecurityOption2.prototype, "oauth2c", void 0);
    return FirebasehostingSitesChannelsListSecurityOption2;
}(SpeakeasyBase));
export { FirebasehostingSitesChannelsListSecurityOption2 };
var FirebasehostingSitesChannelsListSecurityOption3 = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesChannelsListSecurityOption3, _super);
    function FirebasehostingSitesChannelsListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebasehostingSitesChannelsListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebasehostingSitesChannelsListSecurityOption3.prototype, "oauth2c", void 0);
    return FirebasehostingSitesChannelsListSecurityOption3;
}(SpeakeasyBase));
export { FirebasehostingSitesChannelsListSecurityOption3 };
var FirebasehostingSitesChannelsListSecurityOption4 = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesChannelsListSecurityOption4, _super);
    function FirebasehostingSitesChannelsListSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebasehostingSitesChannelsListSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebasehostingSitesChannelsListSecurityOption4.prototype, "oauth2c", void 0);
    return FirebasehostingSitesChannelsListSecurityOption4;
}(SpeakeasyBase));
export { FirebasehostingSitesChannelsListSecurityOption4 };
var FirebasehostingSitesChannelsListSecurity = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesChannelsListSecurity, _super);
    function FirebasehostingSitesChannelsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebasehostingSitesChannelsListSecurityOption1)
    ], FirebasehostingSitesChannelsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebasehostingSitesChannelsListSecurityOption2)
    ], FirebasehostingSitesChannelsListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebasehostingSitesChannelsListSecurityOption3)
    ], FirebasehostingSitesChannelsListSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebasehostingSitesChannelsListSecurityOption4)
    ], FirebasehostingSitesChannelsListSecurity.prototype, "option4", void 0);
    return FirebasehostingSitesChannelsListSecurity;
}(SpeakeasyBase));
export { FirebasehostingSitesChannelsListSecurity };
var FirebasehostingSitesChannelsListRequest = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesChannelsListRequest, _super);
    function FirebasehostingSitesChannelsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebasehostingSitesChannelsListPathParams)
    ], FirebasehostingSitesChannelsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebasehostingSitesChannelsListQueryParams)
    ], FirebasehostingSitesChannelsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebasehostingSitesChannelsListSecurity)
    ], FirebasehostingSitesChannelsListRequest.prototype, "security", void 0);
    return FirebasehostingSitesChannelsListRequest;
}(SpeakeasyBase));
export { FirebasehostingSitesChannelsListRequest };
var FirebasehostingSitesChannelsListResponse = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesChannelsListResponse, _super);
    function FirebasehostingSitesChannelsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FirebasehostingSitesChannelsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListChannelsResponse)
    ], FirebasehostingSitesChannelsListResponse.prototype, "listChannelsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FirebasehostingSitesChannelsListResponse.prototype, "statusCode", void 0);
    return FirebasehostingSitesChannelsListResponse;
}(SpeakeasyBase));
export { FirebasehostingSitesChannelsListResponse };
