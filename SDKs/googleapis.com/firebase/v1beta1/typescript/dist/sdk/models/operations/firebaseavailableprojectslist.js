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
var FirebaseAvailableProjectsListQueryParams = /** @class */ (function (_super) {
    __extends(FirebaseAvailableProjectsListQueryParams, _super);
    function FirebaseAvailableProjectsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirebaseAvailableProjectsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirebaseAvailableProjectsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirebaseAvailableProjectsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirebaseAvailableProjectsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirebaseAvailableProjectsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirebaseAvailableProjectsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirebaseAvailableProjectsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], FirebaseAvailableProjectsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], FirebaseAvailableProjectsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirebaseAvailableProjectsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirebaseAvailableProjectsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirebaseAvailableProjectsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirebaseAvailableProjectsListQueryParams.prototype, "uploadProtocol", void 0);
    return FirebaseAvailableProjectsListQueryParams;
}(SpeakeasyBase));
export { FirebaseAvailableProjectsListQueryParams };
var FirebaseAvailableProjectsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(FirebaseAvailableProjectsListSecurityOption1, _super);
    function FirebaseAvailableProjectsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaseAvailableProjectsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaseAvailableProjectsListSecurityOption1.prototype, "oauth2c", void 0);
    return FirebaseAvailableProjectsListSecurityOption1;
}(SpeakeasyBase));
export { FirebaseAvailableProjectsListSecurityOption1 };
var FirebaseAvailableProjectsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(FirebaseAvailableProjectsListSecurityOption2, _super);
    function FirebaseAvailableProjectsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaseAvailableProjectsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaseAvailableProjectsListSecurityOption2.prototype, "oauth2c", void 0);
    return FirebaseAvailableProjectsListSecurityOption2;
}(SpeakeasyBase));
export { FirebaseAvailableProjectsListSecurityOption2 };
var FirebaseAvailableProjectsListSecurityOption3 = /** @class */ (function (_super) {
    __extends(FirebaseAvailableProjectsListSecurityOption3, _super);
    function FirebaseAvailableProjectsListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaseAvailableProjectsListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaseAvailableProjectsListSecurityOption3.prototype, "oauth2c", void 0);
    return FirebaseAvailableProjectsListSecurityOption3;
}(SpeakeasyBase));
export { FirebaseAvailableProjectsListSecurityOption3 };
var FirebaseAvailableProjectsListSecurityOption4 = /** @class */ (function (_super) {
    __extends(FirebaseAvailableProjectsListSecurityOption4, _super);
    function FirebaseAvailableProjectsListSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaseAvailableProjectsListSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaseAvailableProjectsListSecurityOption4.prototype, "oauth2c", void 0);
    return FirebaseAvailableProjectsListSecurityOption4;
}(SpeakeasyBase));
export { FirebaseAvailableProjectsListSecurityOption4 };
var FirebaseAvailableProjectsListSecurity = /** @class */ (function (_super) {
    __extends(FirebaseAvailableProjectsListSecurity, _super);
    function FirebaseAvailableProjectsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebaseAvailableProjectsListSecurityOption1)
    ], FirebaseAvailableProjectsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebaseAvailableProjectsListSecurityOption2)
    ], FirebaseAvailableProjectsListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebaseAvailableProjectsListSecurityOption3)
    ], FirebaseAvailableProjectsListSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebaseAvailableProjectsListSecurityOption4)
    ], FirebaseAvailableProjectsListSecurity.prototype, "option4", void 0);
    return FirebaseAvailableProjectsListSecurity;
}(SpeakeasyBase));
export { FirebaseAvailableProjectsListSecurity };
var FirebaseAvailableProjectsListRequest = /** @class */ (function (_super) {
    __extends(FirebaseAvailableProjectsListRequest, _super);
    function FirebaseAvailableProjectsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebaseAvailableProjectsListQueryParams)
    ], FirebaseAvailableProjectsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebaseAvailableProjectsListSecurity)
    ], FirebaseAvailableProjectsListRequest.prototype, "security", void 0);
    return FirebaseAvailableProjectsListRequest;
}(SpeakeasyBase));
export { FirebaseAvailableProjectsListRequest };
var FirebaseAvailableProjectsListResponse = /** @class */ (function (_super) {
    __extends(FirebaseAvailableProjectsListResponse, _super);
    function FirebaseAvailableProjectsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FirebaseAvailableProjectsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListAvailableProjectsResponse)
    ], FirebaseAvailableProjectsListResponse.prototype, "listAvailableProjectsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FirebaseAvailableProjectsListResponse.prototype, "statusCode", void 0);
    return FirebaseAvailableProjectsListResponse;
}(SpeakeasyBase));
export { FirebaseAvailableProjectsListResponse };
