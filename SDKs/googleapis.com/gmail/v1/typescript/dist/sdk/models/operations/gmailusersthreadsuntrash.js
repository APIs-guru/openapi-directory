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
var GmailUsersThreadsUntrashPathParams = /** @class */ (function (_super) {
    __extends(GmailUsersThreadsUntrashPathParams, _super);
    function GmailUsersThreadsUntrashPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GmailUsersThreadsUntrashPathParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], GmailUsersThreadsUntrashPathParams.prototype, "userId", void 0);
    return GmailUsersThreadsUntrashPathParams;
}(SpeakeasyBase));
export { GmailUsersThreadsUntrashPathParams };
var GmailUsersThreadsUntrashQueryParams = /** @class */ (function (_super) {
    __extends(GmailUsersThreadsUntrashQueryParams, _super);
    function GmailUsersThreadsUntrashQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], GmailUsersThreadsUntrashQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], GmailUsersThreadsUntrashQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GmailUsersThreadsUntrashQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GmailUsersThreadsUntrashQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GmailUsersThreadsUntrashQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GmailUsersThreadsUntrashQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GmailUsersThreadsUntrashQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GmailUsersThreadsUntrashQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GmailUsersThreadsUntrashQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], GmailUsersThreadsUntrashQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], GmailUsersThreadsUntrashQueryParams.prototype, "uploadProtocol", void 0);
    return GmailUsersThreadsUntrashQueryParams;
}(SpeakeasyBase));
export { GmailUsersThreadsUntrashQueryParams };
var GmailUsersThreadsUntrashSecurityOption1 = /** @class */ (function (_super) {
    __extends(GmailUsersThreadsUntrashSecurityOption1, _super);
    function GmailUsersThreadsUntrashSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersThreadsUntrashSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersThreadsUntrashSecurityOption1.prototype, "oauth2c", void 0);
    return GmailUsersThreadsUntrashSecurityOption1;
}(SpeakeasyBase));
export { GmailUsersThreadsUntrashSecurityOption1 };
var GmailUsersThreadsUntrashSecurityOption2 = /** @class */ (function (_super) {
    __extends(GmailUsersThreadsUntrashSecurityOption2, _super);
    function GmailUsersThreadsUntrashSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersThreadsUntrashSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersThreadsUntrashSecurityOption2.prototype, "oauth2c", void 0);
    return GmailUsersThreadsUntrashSecurityOption2;
}(SpeakeasyBase));
export { GmailUsersThreadsUntrashSecurityOption2 };
var GmailUsersThreadsUntrashSecurity = /** @class */ (function (_super) {
    __extends(GmailUsersThreadsUntrashSecurity, _super);
    function GmailUsersThreadsUntrashSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersThreadsUntrashSecurityOption1)
    ], GmailUsersThreadsUntrashSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersThreadsUntrashSecurityOption2)
    ], GmailUsersThreadsUntrashSecurity.prototype, "option2", void 0);
    return GmailUsersThreadsUntrashSecurity;
}(SpeakeasyBase));
export { GmailUsersThreadsUntrashSecurity };
var GmailUsersThreadsUntrashRequest = /** @class */ (function (_super) {
    __extends(GmailUsersThreadsUntrashRequest, _super);
    function GmailUsersThreadsUntrashRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersThreadsUntrashPathParams)
    ], GmailUsersThreadsUntrashRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersThreadsUntrashQueryParams)
    ], GmailUsersThreadsUntrashRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersThreadsUntrashSecurity)
    ], GmailUsersThreadsUntrashRequest.prototype, "security", void 0);
    return GmailUsersThreadsUntrashRequest;
}(SpeakeasyBase));
export { GmailUsersThreadsUntrashRequest };
var GmailUsersThreadsUntrashResponse = /** @class */ (function (_super) {
    __extends(GmailUsersThreadsUntrashResponse, _super);
    function GmailUsersThreadsUntrashResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GmailUsersThreadsUntrashResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GmailUsersThreadsUntrashResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Thread)
    ], GmailUsersThreadsUntrashResponse.prototype, "thread", void 0);
    return GmailUsersThreadsUntrashResponse;
}(SpeakeasyBase));
export { GmailUsersThreadsUntrashResponse };
