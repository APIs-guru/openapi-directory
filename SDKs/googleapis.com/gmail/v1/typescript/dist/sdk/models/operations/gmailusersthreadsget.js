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
var GmailUsersThreadsGetPathParams = /** @class */ (function (_super) {
    __extends(GmailUsersThreadsGetPathParams, _super);
    function GmailUsersThreadsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GmailUsersThreadsGetPathParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], GmailUsersThreadsGetPathParams.prototype, "userId", void 0);
    return GmailUsersThreadsGetPathParams;
}(SpeakeasyBase));
export { GmailUsersThreadsGetPathParams };
export var GmailUsersThreadsGetFormatEnum;
(function (GmailUsersThreadsGetFormatEnum) {
    GmailUsersThreadsGetFormatEnum["Full"] = "full";
    GmailUsersThreadsGetFormatEnum["Metadata"] = "metadata";
    GmailUsersThreadsGetFormatEnum["Minimal"] = "minimal";
})(GmailUsersThreadsGetFormatEnum || (GmailUsersThreadsGetFormatEnum = {}));
var GmailUsersThreadsGetQueryParams = /** @class */ (function (_super) {
    __extends(GmailUsersThreadsGetQueryParams, _super);
    function GmailUsersThreadsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], GmailUsersThreadsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], GmailUsersThreadsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GmailUsersThreadsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GmailUsersThreadsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GmailUsersThreadsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" }),
        __metadata("design:type", String)
    ], GmailUsersThreadsGetQueryParams.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GmailUsersThreadsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=metadataHeaders" }),
        __metadata("design:type", Array)
    ], GmailUsersThreadsGetQueryParams.prototype, "metadataHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GmailUsersThreadsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GmailUsersThreadsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GmailUsersThreadsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], GmailUsersThreadsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], GmailUsersThreadsGetQueryParams.prototype, "uploadProtocol", void 0);
    return GmailUsersThreadsGetQueryParams;
}(SpeakeasyBase));
export { GmailUsersThreadsGetQueryParams };
var GmailUsersThreadsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(GmailUsersThreadsGetSecurityOption1, _super);
    function GmailUsersThreadsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersThreadsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersThreadsGetSecurityOption1.prototype, "oauth2c", void 0);
    return GmailUsersThreadsGetSecurityOption1;
}(SpeakeasyBase));
export { GmailUsersThreadsGetSecurityOption1 };
var GmailUsersThreadsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(GmailUsersThreadsGetSecurityOption2, _super);
    function GmailUsersThreadsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersThreadsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersThreadsGetSecurityOption2.prototype, "oauth2c", void 0);
    return GmailUsersThreadsGetSecurityOption2;
}(SpeakeasyBase));
export { GmailUsersThreadsGetSecurityOption2 };
var GmailUsersThreadsGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(GmailUsersThreadsGetSecurityOption3, _super);
    function GmailUsersThreadsGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersThreadsGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersThreadsGetSecurityOption3.prototype, "oauth2c", void 0);
    return GmailUsersThreadsGetSecurityOption3;
}(SpeakeasyBase));
export { GmailUsersThreadsGetSecurityOption3 };
var GmailUsersThreadsGetSecurityOption4 = /** @class */ (function (_super) {
    __extends(GmailUsersThreadsGetSecurityOption4, _super);
    function GmailUsersThreadsGetSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersThreadsGetSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersThreadsGetSecurityOption4.prototype, "oauth2c", void 0);
    return GmailUsersThreadsGetSecurityOption4;
}(SpeakeasyBase));
export { GmailUsersThreadsGetSecurityOption4 };
var GmailUsersThreadsGetSecurityOption5 = /** @class */ (function (_super) {
    __extends(GmailUsersThreadsGetSecurityOption5, _super);
    function GmailUsersThreadsGetSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersThreadsGetSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersThreadsGetSecurityOption5.prototype, "oauth2c", void 0);
    return GmailUsersThreadsGetSecurityOption5;
}(SpeakeasyBase));
export { GmailUsersThreadsGetSecurityOption5 };
var GmailUsersThreadsGetSecurityOption6 = /** @class */ (function (_super) {
    __extends(GmailUsersThreadsGetSecurityOption6, _super);
    function GmailUsersThreadsGetSecurityOption6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersThreadsGetSecurityOption6.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersThreadsGetSecurityOption6.prototype, "oauth2c", void 0);
    return GmailUsersThreadsGetSecurityOption6;
}(SpeakeasyBase));
export { GmailUsersThreadsGetSecurityOption6 };
var GmailUsersThreadsGetSecurityOption7 = /** @class */ (function (_super) {
    __extends(GmailUsersThreadsGetSecurityOption7, _super);
    function GmailUsersThreadsGetSecurityOption7() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersThreadsGetSecurityOption7.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersThreadsGetSecurityOption7.prototype, "oauth2c", void 0);
    return GmailUsersThreadsGetSecurityOption7;
}(SpeakeasyBase));
export { GmailUsersThreadsGetSecurityOption7 };
var GmailUsersThreadsGetSecurity = /** @class */ (function (_super) {
    __extends(GmailUsersThreadsGetSecurity, _super);
    function GmailUsersThreadsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersThreadsGetSecurityOption1)
    ], GmailUsersThreadsGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersThreadsGetSecurityOption2)
    ], GmailUsersThreadsGetSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersThreadsGetSecurityOption3)
    ], GmailUsersThreadsGetSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersThreadsGetSecurityOption4)
    ], GmailUsersThreadsGetSecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersThreadsGetSecurityOption5)
    ], GmailUsersThreadsGetSecurity.prototype, "option5", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersThreadsGetSecurityOption6)
    ], GmailUsersThreadsGetSecurity.prototype, "option6", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersThreadsGetSecurityOption7)
    ], GmailUsersThreadsGetSecurity.prototype, "option7", void 0);
    return GmailUsersThreadsGetSecurity;
}(SpeakeasyBase));
export { GmailUsersThreadsGetSecurity };
var GmailUsersThreadsGetRequest = /** @class */ (function (_super) {
    __extends(GmailUsersThreadsGetRequest, _super);
    function GmailUsersThreadsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersThreadsGetPathParams)
    ], GmailUsersThreadsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersThreadsGetQueryParams)
    ], GmailUsersThreadsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersThreadsGetSecurity)
    ], GmailUsersThreadsGetRequest.prototype, "security", void 0);
    return GmailUsersThreadsGetRequest;
}(SpeakeasyBase));
export { GmailUsersThreadsGetRequest };
var GmailUsersThreadsGetResponse = /** @class */ (function (_super) {
    __extends(GmailUsersThreadsGetResponse, _super);
    function GmailUsersThreadsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GmailUsersThreadsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GmailUsersThreadsGetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Thread)
    ], GmailUsersThreadsGetResponse.prototype, "thread", void 0);
    return GmailUsersThreadsGetResponse;
}(SpeakeasyBase));
export { GmailUsersThreadsGetResponse };
