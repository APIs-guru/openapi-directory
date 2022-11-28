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
var StorageProjectsHmacKeysListPathParams = /** @class */ (function (_super) {
    __extends(StorageProjectsHmacKeysListPathParams, _super);
    function StorageProjectsHmacKeysListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], StorageProjectsHmacKeysListPathParams.prototype, "projectId", void 0);
    return StorageProjectsHmacKeysListPathParams;
}(SpeakeasyBase));
export { StorageProjectsHmacKeysListPathParams };
var StorageProjectsHmacKeysListQueryParams = /** @class */ (function (_super) {
    __extends(StorageProjectsHmacKeysListQueryParams, _super);
    function StorageProjectsHmacKeysListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], StorageProjectsHmacKeysListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], StorageProjectsHmacKeysListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], StorageProjectsHmacKeysListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], StorageProjectsHmacKeysListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], StorageProjectsHmacKeysListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], StorageProjectsHmacKeysListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], StorageProjectsHmacKeysListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], StorageProjectsHmacKeysListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=serviceAccountEmail" }),
        __metadata("design:type", String)
    ], StorageProjectsHmacKeysListQueryParams.prototype, "serviceAccountEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=showDeletedKeys" }),
        __metadata("design:type", Boolean)
    ], StorageProjectsHmacKeysListQueryParams.prototype, "showDeletedKeys", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], StorageProjectsHmacKeysListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], StorageProjectsHmacKeysListQueryParams.prototype, "userIp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userProject" }),
        __metadata("design:type", String)
    ], StorageProjectsHmacKeysListQueryParams.prototype, "userProject", void 0);
    return StorageProjectsHmacKeysListQueryParams;
}(SpeakeasyBase));
export { StorageProjectsHmacKeysListQueryParams };
var StorageProjectsHmacKeysListSecurityOption1 = /** @class */ (function (_super) {
    __extends(StorageProjectsHmacKeysListSecurityOption1, _super);
    function StorageProjectsHmacKeysListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageProjectsHmacKeysListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageProjectsHmacKeysListSecurityOption1.prototype, "oauth2c", void 0);
    return StorageProjectsHmacKeysListSecurityOption1;
}(SpeakeasyBase));
export { StorageProjectsHmacKeysListSecurityOption1 };
var StorageProjectsHmacKeysListSecurityOption2 = /** @class */ (function (_super) {
    __extends(StorageProjectsHmacKeysListSecurityOption2, _super);
    function StorageProjectsHmacKeysListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageProjectsHmacKeysListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageProjectsHmacKeysListSecurityOption2.prototype, "oauth2c", void 0);
    return StorageProjectsHmacKeysListSecurityOption2;
}(SpeakeasyBase));
export { StorageProjectsHmacKeysListSecurityOption2 };
var StorageProjectsHmacKeysListSecurityOption3 = /** @class */ (function (_super) {
    __extends(StorageProjectsHmacKeysListSecurityOption3, _super);
    function StorageProjectsHmacKeysListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageProjectsHmacKeysListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageProjectsHmacKeysListSecurityOption3.prototype, "oauth2c", void 0);
    return StorageProjectsHmacKeysListSecurityOption3;
}(SpeakeasyBase));
export { StorageProjectsHmacKeysListSecurityOption3 };
var StorageProjectsHmacKeysListSecurityOption4 = /** @class */ (function (_super) {
    __extends(StorageProjectsHmacKeysListSecurityOption4, _super);
    function StorageProjectsHmacKeysListSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageProjectsHmacKeysListSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageProjectsHmacKeysListSecurityOption4.prototype, "oauth2c", void 0);
    return StorageProjectsHmacKeysListSecurityOption4;
}(SpeakeasyBase));
export { StorageProjectsHmacKeysListSecurityOption4 };
var StorageProjectsHmacKeysListSecurity = /** @class */ (function (_super) {
    __extends(StorageProjectsHmacKeysListSecurity, _super);
    function StorageProjectsHmacKeysListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", StorageProjectsHmacKeysListSecurityOption1)
    ], StorageProjectsHmacKeysListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", StorageProjectsHmacKeysListSecurityOption2)
    ], StorageProjectsHmacKeysListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", StorageProjectsHmacKeysListSecurityOption3)
    ], StorageProjectsHmacKeysListSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", StorageProjectsHmacKeysListSecurityOption4)
    ], StorageProjectsHmacKeysListSecurity.prototype, "option4", void 0);
    return StorageProjectsHmacKeysListSecurity;
}(SpeakeasyBase));
export { StorageProjectsHmacKeysListSecurity };
var StorageProjectsHmacKeysListRequest = /** @class */ (function (_super) {
    __extends(StorageProjectsHmacKeysListRequest, _super);
    function StorageProjectsHmacKeysListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StorageProjectsHmacKeysListPathParams)
    ], StorageProjectsHmacKeysListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StorageProjectsHmacKeysListQueryParams)
    ], StorageProjectsHmacKeysListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StorageProjectsHmacKeysListSecurity)
    ], StorageProjectsHmacKeysListRequest.prototype, "security", void 0);
    return StorageProjectsHmacKeysListRequest;
}(SpeakeasyBase));
export { StorageProjectsHmacKeysListRequest };
var StorageProjectsHmacKeysListResponse = /** @class */ (function (_super) {
    __extends(StorageProjectsHmacKeysListResponse, _super);
    function StorageProjectsHmacKeysListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], StorageProjectsHmacKeysListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.HmacKeysMetadata)
    ], StorageProjectsHmacKeysListResponse.prototype, "hmacKeysMetadata", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], StorageProjectsHmacKeysListResponse.prototype, "statusCode", void 0);
    return StorageProjectsHmacKeysListResponse;
}(SpeakeasyBase));
export { StorageProjectsHmacKeysListResponse };
