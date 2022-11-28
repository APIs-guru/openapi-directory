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
var FirebaseProjectsAndroidAppsShaListPathParams = /** @class */ (function (_super) {
    __extends(FirebaseProjectsAndroidAppsShaListPathParams, _super);
    function FirebaseProjectsAndroidAppsShaListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], FirebaseProjectsAndroidAppsShaListPathParams.prototype, "parent", void 0);
    return FirebaseProjectsAndroidAppsShaListPathParams;
}(SpeakeasyBase));
export { FirebaseProjectsAndroidAppsShaListPathParams };
var FirebaseProjectsAndroidAppsShaListQueryParams = /** @class */ (function (_super) {
    __extends(FirebaseProjectsAndroidAppsShaListQueryParams, _super);
    function FirebaseProjectsAndroidAppsShaListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirebaseProjectsAndroidAppsShaListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirebaseProjectsAndroidAppsShaListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirebaseProjectsAndroidAppsShaListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirebaseProjectsAndroidAppsShaListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirebaseProjectsAndroidAppsShaListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirebaseProjectsAndroidAppsShaListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirebaseProjectsAndroidAppsShaListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirebaseProjectsAndroidAppsShaListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirebaseProjectsAndroidAppsShaListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirebaseProjectsAndroidAppsShaListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirebaseProjectsAndroidAppsShaListQueryParams.prototype, "uploadProtocol", void 0);
    return FirebaseProjectsAndroidAppsShaListQueryParams;
}(SpeakeasyBase));
export { FirebaseProjectsAndroidAppsShaListQueryParams };
var FirebaseProjectsAndroidAppsShaListSecurityOption1 = /** @class */ (function (_super) {
    __extends(FirebaseProjectsAndroidAppsShaListSecurityOption1, _super);
    function FirebaseProjectsAndroidAppsShaListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaseProjectsAndroidAppsShaListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaseProjectsAndroidAppsShaListSecurityOption1.prototype, "oauth2c", void 0);
    return FirebaseProjectsAndroidAppsShaListSecurityOption1;
}(SpeakeasyBase));
export { FirebaseProjectsAndroidAppsShaListSecurityOption1 };
var FirebaseProjectsAndroidAppsShaListSecurityOption2 = /** @class */ (function (_super) {
    __extends(FirebaseProjectsAndroidAppsShaListSecurityOption2, _super);
    function FirebaseProjectsAndroidAppsShaListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaseProjectsAndroidAppsShaListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaseProjectsAndroidAppsShaListSecurityOption2.prototype, "oauth2c", void 0);
    return FirebaseProjectsAndroidAppsShaListSecurityOption2;
}(SpeakeasyBase));
export { FirebaseProjectsAndroidAppsShaListSecurityOption2 };
var FirebaseProjectsAndroidAppsShaListSecurityOption3 = /** @class */ (function (_super) {
    __extends(FirebaseProjectsAndroidAppsShaListSecurityOption3, _super);
    function FirebaseProjectsAndroidAppsShaListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaseProjectsAndroidAppsShaListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaseProjectsAndroidAppsShaListSecurityOption3.prototype, "oauth2c", void 0);
    return FirebaseProjectsAndroidAppsShaListSecurityOption3;
}(SpeakeasyBase));
export { FirebaseProjectsAndroidAppsShaListSecurityOption3 };
var FirebaseProjectsAndroidAppsShaListSecurityOption4 = /** @class */ (function (_super) {
    __extends(FirebaseProjectsAndroidAppsShaListSecurityOption4, _super);
    function FirebaseProjectsAndroidAppsShaListSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaseProjectsAndroidAppsShaListSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaseProjectsAndroidAppsShaListSecurityOption4.prototype, "oauth2c", void 0);
    return FirebaseProjectsAndroidAppsShaListSecurityOption4;
}(SpeakeasyBase));
export { FirebaseProjectsAndroidAppsShaListSecurityOption4 };
var FirebaseProjectsAndroidAppsShaListSecurity = /** @class */ (function (_super) {
    __extends(FirebaseProjectsAndroidAppsShaListSecurity, _super);
    function FirebaseProjectsAndroidAppsShaListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebaseProjectsAndroidAppsShaListSecurityOption1)
    ], FirebaseProjectsAndroidAppsShaListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebaseProjectsAndroidAppsShaListSecurityOption2)
    ], FirebaseProjectsAndroidAppsShaListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebaseProjectsAndroidAppsShaListSecurityOption3)
    ], FirebaseProjectsAndroidAppsShaListSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebaseProjectsAndroidAppsShaListSecurityOption4)
    ], FirebaseProjectsAndroidAppsShaListSecurity.prototype, "option4", void 0);
    return FirebaseProjectsAndroidAppsShaListSecurity;
}(SpeakeasyBase));
export { FirebaseProjectsAndroidAppsShaListSecurity };
var FirebaseProjectsAndroidAppsShaListRequest = /** @class */ (function (_super) {
    __extends(FirebaseProjectsAndroidAppsShaListRequest, _super);
    function FirebaseProjectsAndroidAppsShaListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebaseProjectsAndroidAppsShaListPathParams)
    ], FirebaseProjectsAndroidAppsShaListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebaseProjectsAndroidAppsShaListQueryParams)
    ], FirebaseProjectsAndroidAppsShaListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebaseProjectsAndroidAppsShaListSecurity)
    ], FirebaseProjectsAndroidAppsShaListRequest.prototype, "security", void 0);
    return FirebaseProjectsAndroidAppsShaListRequest;
}(SpeakeasyBase));
export { FirebaseProjectsAndroidAppsShaListRequest };
var FirebaseProjectsAndroidAppsShaListResponse = /** @class */ (function (_super) {
    __extends(FirebaseProjectsAndroidAppsShaListResponse, _super);
    function FirebaseProjectsAndroidAppsShaListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FirebaseProjectsAndroidAppsShaListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListShaCertificatesResponse)
    ], FirebaseProjectsAndroidAppsShaListResponse.prototype, "listShaCertificatesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FirebaseProjectsAndroidAppsShaListResponse.prototype, "statusCode", void 0);
    return FirebaseProjectsAndroidAppsShaListResponse;
}(SpeakeasyBase));
export { FirebaseProjectsAndroidAppsShaListResponse };
