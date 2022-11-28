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
var GmailUsersMessagesGetPathParams = /** @class */ (function (_super) {
    __extends(GmailUsersMessagesGetPathParams, _super);
    function GmailUsersMessagesGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GmailUsersMessagesGetPathParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], GmailUsersMessagesGetPathParams.prototype, "userId", void 0);
    return GmailUsersMessagesGetPathParams;
}(SpeakeasyBase));
export { GmailUsersMessagesGetPathParams };
export var GmailUsersMessagesGetFormatEnum;
(function (GmailUsersMessagesGetFormatEnum) {
    GmailUsersMessagesGetFormatEnum["Minimal"] = "minimal";
    GmailUsersMessagesGetFormatEnum["Full"] = "full";
    GmailUsersMessagesGetFormatEnum["Raw"] = "raw";
    GmailUsersMessagesGetFormatEnum["Metadata"] = "metadata";
})(GmailUsersMessagesGetFormatEnum || (GmailUsersMessagesGetFormatEnum = {}));
var GmailUsersMessagesGetQueryParams = /** @class */ (function (_super) {
    __extends(GmailUsersMessagesGetQueryParams, _super);
    function GmailUsersMessagesGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], GmailUsersMessagesGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], GmailUsersMessagesGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GmailUsersMessagesGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GmailUsersMessagesGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GmailUsersMessagesGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" }),
        __metadata("design:type", String)
    ], GmailUsersMessagesGetQueryParams.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GmailUsersMessagesGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=metadataHeaders" }),
        __metadata("design:type", Array)
    ], GmailUsersMessagesGetQueryParams.prototype, "metadataHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GmailUsersMessagesGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GmailUsersMessagesGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GmailUsersMessagesGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], GmailUsersMessagesGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], GmailUsersMessagesGetQueryParams.prototype, "uploadProtocol", void 0);
    return GmailUsersMessagesGetQueryParams;
}(SpeakeasyBase));
export { GmailUsersMessagesGetQueryParams };
var GmailUsersMessagesGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(GmailUsersMessagesGetSecurityOption1, _super);
    function GmailUsersMessagesGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersMessagesGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersMessagesGetSecurityOption1.prototype, "oauth2c", void 0);
    return GmailUsersMessagesGetSecurityOption1;
}(SpeakeasyBase));
export { GmailUsersMessagesGetSecurityOption1 };
var GmailUsersMessagesGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(GmailUsersMessagesGetSecurityOption2, _super);
    function GmailUsersMessagesGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersMessagesGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersMessagesGetSecurityOption2.prototype, "oauth2c", void 0);
    return GmailUsersMessagesGetSecurityOption2;
}(SpeakeasyBase));
export { GmailUsersMessagesGetSecurityOption2 };
var GmailUsersMessagesGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(GmailUsersMessagesGetSecurityOption3, _super);
    function GmailUsersMessagesGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersMessagesGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersMessagesGetSecurityOption3.prototype, "oauth2c", void 0);
    return GmailUsersMessagesGetSecurityOption3;
}(SpeakeasyBase));
export { GmailUsersMessagesGetSecurityOption3 };
var GmailUsersMessagesGetSecurityOption4 = /** @class */ (function (_super) {
    __extends(GmailUsersMessagesGetSecurityOption4, _super);
    function GmailUsersMessagesGetSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersMessagesGetSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersMessagesGetSecurityOption4.prototype, "oauth2c", void 0);
    return GmailUsersMessagesGetSecurityOption4;
}(SpeakeasyBase));
export { GmailUsersMessagesGetSecurityOption4 };
var GmailUsersMessagesGetSecurityOption5 = /** @class */ (function (_super) {
    __extends(GmailUsersMessagesGetSecurityOption5, _super);
    function GmailUsersMessagesGetSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersMessagesGetSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersMessagesGetSecurityOption5.prototype, "oauth2c", void 0);
    return GmailUsersMessagesGetSecurityOption5;
}(SpeakeasyBase));
export { GmailUsersMessagesGetSecurityOption5 };
var GmailUsersMessagesGetSecurityOption6 = /** @class */ (function (_super) {
    __extends(GmailUsersMessagesGetSecurityOption6, _super);
    function GmailUsersMessagesGetSecurityOption6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersMessagesGetSecurityOption6.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersMessagesGetSecurityOption6.prototype, "oauth2c", void 0);
    return GmailUsersMessagesGetSecurityOption6;
}(SpeakeasyBase));
export { GmailUsersMessagesGetSecurityOption6 };
var GmailUsersMessagesGetSecurityOption7 = /** @class */ (function (_super) {
    __extends(GmailUsersMessagesGetSecurityOption7, _super);
    function GmailUsersMessagesGetSecurityOption7() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersMessagesGetSecurityOption7.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersMessagesGetSecurityOption7.prototype, "oauth2c", void 0);
    return GmailUsersMessagesGetSecurityOption7;
}(SpeakeasyBase));
export { GmailUsersMessagesGetSecurityOption7 };
var GmailUsersMessagesGetSecurity = /** @class */ (function (_super) {
    __extends(GmailUsersMessagesGetSecurity, _super);
    function GmailUsersMessagesGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersMessagesGetSecurityOption1)
    ], GmailUsersMessagesGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersMessagesGetSecurityOption2)
    ], GmailUsersMessagesGetSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersMessagesGetSecurityOption3)
    ], GmailUsersMessagesGetSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersMessagesGetSecurityOption4)
    ], GmailUsersMessagesGetSecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersMessagesGetSecurityOption5)
    ], GmailUsersMessagesGetSecurity.prototype, "option5", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersMessagesGetSecurityOption6)
    ], GmailUsersMessagesGetSecurity.prototype, "option6", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersMessagesGetSecurityOption7)
    ], GmailUsersMessagesGetSecurity.prototype, "option7", void 0);
    return GmailUsersMessagesGetSecurity;
}(SpeakeasyBase));
export { GmailUsersMessagesGetSecurity };
var GmailUsersMessagesGetRequest = /** @class */ (function (_super) {
    __extends(GmailUsersMessagesGetRequest, _super);
    function GmailUsersMessagesGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersMessagesGetPathParams)
    ], GmailUsersMessagesGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersMessagesGetQueryParams)
    ], GmailUsersMessagesGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersMessagesGetSecurity)
    ], GmailUsersMessagesGetRequest.prototype, "security", void 0);
    return GmailUsersMessagesGetRequest;
}(SpeakeasyBase));
export { GmailUsersMessagesGetRequest };
var GmailUsersMessagesGetResponse = /** @class */ (function (_super) {
    __extends(GmailUsersMessagesGetResponse, _super);
    function GmailUsersMessagesGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GmailUsersMessagesGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Message)
    ], GmailUsersMessagesGetResponse.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GmailUsersMessagesGetResponse.prototype, "statusCode", void 0);
    return GmailUsersMessagesGetResponse;
}(SpeakeasyBase));
export { GmailUsersMessagesGetResponse };
