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
var StorageProjectsServiceAccountGetPathParams = /** @class */ (function (_super) {
    __extends(StorageProjectsServiceAccountGetPathParams, _super);
    function StorageProjectsServiceAccountGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], StorageProjectsServiceAccountGetPathParams.prototype, "projectId", void 0);
    return StorageProjectsServiceAccountGetPathParams;
}(SpeakeasyBase));
export { StorageProjectsServiceAccountGetPathParams };
var StorageProjectsServiceAccountGetQueryParams = /** @class */ (function (_super) {
    __extends(StorageProjectsServiceAccountGetQueryParams, _super);
    function StorageProjectsServiceAccountGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], StorageProjectsServiceAccountGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], StorageProjectsServiceAccountGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], StorageProjectsServiceAccountGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], StorageProjectsServiceAccountGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], StorageProjectsServiceAccountGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], StorageProjectsServiceAccountGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], StorageProjectsServiceAccountGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], StorageProjectsServiceAccountGetQueryParams.prototype, "userIp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userProject" }),
        __metadata("design:type", String)
    ], StorageProjectsServiceAccountGetQueryParams.prototype, "userProject", void 0);
    return StorageProjectsServiceAccountGetQueryParams;
}(SpeakeasyBase));
export { StorageProjectsServiceAccountGetQueryParams };
var StorageProjectsServiceAccountGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(StorageProjectsServiceAccountGetSecurityOption1, _super);
    function StorageProjectsServiceAccountGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageProjectsServiceAccountGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageProjectsServiceAccountGetSecurityOption1.prototype, "oauth2c", void 0);
    return StorageProjectsServiceAccountGetSecurityOption1;
}(SpeakeasyBase));
export { StorageProjectsServiceAccountGetSecurityOption1 };
var StorageProjectsServiceAccountGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(StorageProjectsServiceAccountGetSecurityOption2, _super);
    function StorageProjectsServiceAccountGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageProjectsServiceAccountGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageProjectsServiceAccountGetSecurityOption2.prototype, "oauth2c", void 0);
    return StorageProjectsServiceAccountGetSecurityOption2;
}(SpeakeasyBase));
export { StorageProjectsServiceAccountGetSecurityOption2 };
var StorageProjectsServiceAccountGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(StorageProjectsServiceAccountGetSecurityOption3, _super);
    function StorageProjectsServiceAccountGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageProjectsServiceAccountGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageProjectsServiceAccountGetSecurityOption3.prototype, "oauth2c", void 0);
    return StorageProjectsServiceAccountGetSecurityOption3;
}(SpeakeasyBase));
export { StorageProjectsServiceAccountGetSecurityOption3 };
var StorageProjectsServiceAccountGetSecurityOption4 = /** @class */ (function (_super) {
    __extends(StorageProjectsServiceAccountGetSecurityOption4, _super);
    function StorageProjectsServiceAccountGetSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageProjectsServiceAccountGetSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageProjectsServiceAccountGetSecurityOption4.prototype, "oauth2c", void 0);
    return StorageProjectsServiceAccountGetSecurityOption4;
}(SpeakeasyBase));
export { StorageProjectsServiceAccountGetSecurityOption4 };
var StorageProjectsServiceAccountGetSecurityOption5 = /** @class */ (function (_super) {
    __extends(StorageProjectsServiceAccountGetSecurityOption5, _super);
    function StorageProjectsServiceAccountGetSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageProjectsServiceAccountGetSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageProjectsServiceAccountGetSecurityOption5.prototype, "oauth2c", void 0);
    return StorageProjectsServiceAccountGetSecurityOption5;
}(SpeakeasyBase));
export { StorageProjectsServiceAccountGetSecurityOption5 };
var StorageProjectsServiceAccountGetSecurity = /** @class */ (function (_super) {
    __extends(StorageProjectsServiceAccountGetSecurity, _super);
    function StorageProjectsServiceAccountGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", StorageProjectsServiceAccountGetSecurityOption1)
    ], StorageProjectsServiceAccountGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", StorageProjectsServiceAccountGetSecurityOption2)
    ], StorageProjectsServiceAccountGetSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", StorageProjectsServiceAccountGetSecurityOption3)
    ], StorageProjectsServiceAccountGetSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", StorageProjectsServiceAccountGetSecurityOption4)
    ], StorageProjectsServiceAccountGetSecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", StorageProjectsServiceAccountGetSecurityOption5)
    ], StorageProjectsServiceAccountGetSecurity.prototype, "option5", void 0);
    return StorageProjectsServiceAccountGetSecurity;
}(SpeakeasyBase));
export { StorageProjectsServiceAccountGetSecurity };
var StorageProjectsServiceAccountGetRequest = /** @class */ (function (_super) {
    __extends(StorageProjectsServiceAccountGetRequest, _super);
    function StorageProjectsServiceAccountGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StorageProjectsServiceAccountGetPathParams)
    ], StorageProjectsServiceAccountGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StorageProjectsServiceAccountGetQueryParams)
    ], StorageProjectsServiceAccountGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StorageProjectsServiceAccountGetSecurity)
    ], StorageProjectsServiceAccountGetRequest.prototype, "security", void 0);
    return StorageProjectsServiceAccountGetRequest;
}(SpeakeasyBase));
export { StorageProjectsServiceAccountGetRequest };
var StorageProjectsServiceAccountGetResponse = /** @class */ (function (_super) {
    __extends(StorageProjectsServiceAccountGetResponse, _super);
    function StorageProjectsServiceAccountGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], StorageProjectsServiceAccountGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ServiceAccount)
    ], StorageProjectsServiceAccountGetResponse.prototype, "serviceAccount", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], StorageProjectsServiceAccountGetResponse.prototype, "statusCode", void 0);
    return StorageProjectsServiceAccountGetResponse;
}(SpeakeasyBase));
export { StorageProjectsServiceAccountGetResponse };
