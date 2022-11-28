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
var GmailUsersLabelsUpdatePathParams = /** @class */ (function (_super) {
    __extends(GmailUsersLabelsUpdatePathParams, _super);
    function GmailUsersLabelsUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GmailUsersLabelsUpdatePathParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], GmailUsersLabelsUpdatePathParams.prototype, "userId", void 0);
    return GmailUsersLabelsUpdatePathParams;
}(SpeakeasyBase));
export { GmailUsersLabelsUpdatePathParams };
var GmailUsersLabelsUpdateQueryParams = /** @class */ (function (_super) {
    __extends(GmailUsersLabelsUpdateQueryParams, _super);
    function GmailUsersLabelsUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], GmailUsersLabelsUpdateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], GmailUsersLabelsUpdateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GmailUsersLabelsUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GmailUsersLabelsUpdateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GmailUsersLabelsUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GmailUsersLabelsUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GmailUsersLabelsUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GmailUsersLabelsUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GmailUsersLabelsUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], GmailUsersLabelsUpdateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], GmailUsersLabelsUpdateQueryParams.prototype, "uploadProtocol", void 0);
    return GmailUsersLabelsUpdateQueryParams;
}(SpeakeasyBase));
export { GmailUsersLabelsUpdateQueryParams };
var GmailUsersLabelsUpdateSecurityOption1 = /** @class */ (function (_super) {
    __extends(GmailUsersLabelsUpdateSecurityOption1, _super);
    function GmailUsersLabelsUpdateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersLabelsUpdateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersLabelsUpdateSecurityOption1.prototype, "oauth2c", void 0);
    return GmailUsersLabelsUpdateSecurityOption1;
}(SpeakeasyBase));
export { GmailUsersLabelsUpdateSecurityOption1 };
var GmailUsersLabelsUpdateSecurityOption2 = /** @class */ (function (_super) {
    __extends(GmailUsersLabelsUpdateSecurityOption2, _super);
    function GmailUsersLabelsUpdateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersLabelsUpdateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersLabelsUpdateSecurityOption2.prototype, "oauth2c", void 0);
    return GmailUsersLabelsUpdateSecurityOption2;
}(SpeakeasyBase));
export { GmailUsersLabelsUpdateSecurityOption2 };
var GmailUsersLabelsUpdateSecurityOption3 = /** @class */ (function (_super) {
    __extends(GmailUsersLabelsUpdateSecurityOption3, _super);
    function GmailUsersLabelsUpdateSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersLabelsUpdateSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersLabelsUpdateSecurityOption3.prototype, "oauth2c", void 0);
    return GmailUsersLabelsUpdateSecurityOption3;
}(SpeakeasyBase));
export { GmailUsersLabelsUpdateSecurityOption3 };
var GmailUsersLabelsUpdateSecurity = /** @class */ (function (_super) {
    __extends(GmailUsersLabelsUpdateSecurity, _super);
    function GmailUsersLabelsUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersLabelsUpdateSecurityOption1)
    ], GmailUsersLabelsUpdateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersLabelsUpdateSecurityOption2)
    ], GmailUsersLabelsUpdateSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersLabelsUpdateSecurityOption3)
    ], GmailUsersLabelsUpdateSecurity.prototype, "option3", void 0);
    return GmailUsersLabelsUpdateSecurity;
}(SpeakeasyBase));
export { GmailUsersLabelsUpdateSecurity };
var GmailUsersLabelsUpdateRequest = /** @class */ (function (_super) {
    __extends(GmailUsersLabelsUpdateRequest, _super);
    function GmailUsersLabelsUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersLabelsUpdatePathParams)
    ], GmailUsersLabelsUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersLabelsUpdateQueryParams)
    ], GmailUsersLabelsUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Label)
    ], GmailUsersLabelsUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersLabelsUpdateSecurity)
    ], GmailUsersLabelsUpdateRequest.prototype, "security", void 0);
    return GmailUsersLabelsUpdateRequest;
}(SpeakeasyBase));
export { GmailUsersLabelsUpdateRequest };
var GmailUsersLabelsUpdateResponse = /** @class */ (function (_super) {
    __extends(GmailUsersLabelsUpdateResponse, _super);
    function GmailUsersLabelsUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GmailUsersLabelsUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Label)
    ], GmailUsersLabelsUpdateResponse.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GmailUsersLabelsUpdateResponse.prototype, "statusCode", void 0);
    return GmailUsersLabelsUpdateResponse;
}(SpeakeasyBase));
export { GmailUsersLabelsUpdateResponse };
