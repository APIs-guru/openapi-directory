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
var FirebasehostingSitesVersionsFilesListPathParams = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesVersionsFilesListPathParams, _super);
    function FirebasehostingSitesVersionsFilesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesVersionsFilesListPathParams.prototype, "parent", void 0);
    return FirebasehostingSitesVersionsFilesListPathParams;
}(SpeakeasyBase));
export { FirebasehostingSitesVersionsFilesListPathParams };
export var FirebasehostingSitesVersionsFilesListStatusEnum;
(function (FirebasehostingSitesVersionsFilesListStatusEnum) {
    FirebasehostingSitesVersionsFilesListStatusEnum["StatusUnspecified"] = "STATUS_UNSPECIFIED";
    FirebasehostingSitesVersionsFilesListStatusEnum["Expected"] = "EXPECTED";
    FirebasehostingSitesVersionsFilesListStatusEnum["Active"] = "ACTIVE";
})(FirebasehostingSitesVersionsFilesListStatusEnum || (FirebasehostingSitesVersionsFilesListStatusEnum = {}));
var FirebasehostingSitesVersionsFilesListQueryParams = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesVersionsFilesListQueryParams, _super);
    function FirebasehostingSitesVersionsFilesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesVersionsFilesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesVersionsFilesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesVersionsFilesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesVersionsFilesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesVersionsFilesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesVersionsFilesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesVersionsFilesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], FirebasehostingSitesVersionsFilesListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesVersionsFilesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirebasehostingSitesVersionsFilesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesVersionsFilesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesVersionsFilesListQueryParams.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesVersionsFilesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesVersionsFilesListQueryParams.prototype, "uploadProtocol", void 0);
    return FirebasehostingSitesVersionsFilesListQueryParams;
}(SpeakeasyBase));
export { FirebasehostingSitesVersionsFilesListQueryParams };
var FirebasehostingSitesVersionsFilesListSecurityOption1 = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesVersionsFilesListSecurityOption1, _super);
    function FirebasehostingSitesVersionsFilesListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebasehostingSitesVersionsFilesListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebasehostingSitesVersionsFilesListSecurityOption1.prototype, "oauth2c", void 0);
    return FirebasehostingSitesVersionsFilesListSecurityOption1;
}(SpeakeasyBase));
export { FirebasehostingSitesVersionsFilesListSecurityOption1 };
var FirebasehostingSitesVersionsFilesListSecurityOption2 = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesVersionsFilesListSecurityOption2, _super);
    function FirebasehostingSitesVersionsFilesListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebasehostingSitesVersionsFilesListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebasehostingSitesVersionsFilesListSecurityOption2.prototype, "oauth2c", void 0);
    return FirebasehostingSitesVersionsFilesListSecurityOption2;
}(SpeakeasyBase));
export { FirebasehostingSitesVersionsFilesListSecurityOption2 };
var FirebasehostingSitesVersionsFilesListSecurityOption3 = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesVersionsFilesListSecurityOption3, _super);
    function FirebasehostingSitesVersionsFilesListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebasehostingSitesVersionsFilesListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebasehostingSitesVersionsFilesListSecurityOption3.prototype, "oauth2c", void 0);
    return FirebasehostingSitesVersionsFilesListSecurityOption3;
}(SpeakeasyBase));
export { FirebasehostingSitesVersionsFilesListSecurityOption3 };
var FirebasehostingSitesVersionsFilesListSecurityOption4 = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesVersionsFilesListSecurityOption4, _super);
    function FirebasehostingSitesVersionsFilesListSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebasehostingSitesVersionsFilesListSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebasehostingSitesVersionsFilesListSecurityOption4.prototype, "oauth2c", void 0);
    return FirebasehostingSitesVersionsFilesListSecurityOption4;
}(SpeakeasyBase));
export { FirebasehostingSitesVersionsFilesListSecurityOption4 };
var FirebasehostingSitesVersionsFilesListSecurity = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesVersionsFilesListSecurity, _super);
    function FirebasehostingSitesVersionsFilesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebasehostingSitesVersionsFilesListSecurityOption1)
    ], FirebasehostingSitesVersionsFilesListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebasehostingSitesVersionsFilesListSecurityOption2)
    ], FirebasehostingSitesVersionsFilesListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebasehostingSitesVersionsFilesListSecurityOption3)
    ], FirebasehostingSitesVersionsFilesListSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebasehostingSitesVersionsFilesListSecurityOption4)
    ], FirebasehostingSitesVersionsFilesListSecurity.prototype, "option4", void 0);
    return FirebasehostingSitesVersionsFilesListSecurity;
}(SpeakeasyBase));
export { FirebasehostingSitesVersionsFilesListSecurity };
var FirebasehostingSitesVersionsFilesListRequest = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesVersionsFilesListRequest, _super);
    function FirebasehostingSitesVersionsFilesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebasehostingSitesVersionsFilesListPathParams)
    ], FirebasehostingSitesVersionsFilesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebasehostingSitesVersionsFilesListQueryParams)
    ], FirebasehostingSitesVersionsFilesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebasehostingSitesVersionsFilesListSecurity)
    ], FirebasehostingSitesVersionsFilesListRequest.prototype, "security", void 0);
    return FirebasehostingSitesVersionsFilesListRequest;
}(SpeakeasyBase));
export { FirebasehostingSitesVersionsFilesListRequest };
var FirebasehostingSitesVersionsFilesListResponse = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesVersionsFilesListResponse, _super);
    function FirebasehostingSitesVersionsFilesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FirebasehostingSitesVersionsFilesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListVersionFilesResponse)
    ], FirebasehostingSitesVersionsFilesListResponse.prototype, "listVersionFilesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FirebasehostingSitesVersionsFilesListResponse.prototype, "statusCode", void 0);
    return FirebasehostingSitesVersionsFilesListResponse;
}(SpeakeasyBase));
export { FirebasehostingSitesVersionsFilesListResponse };
