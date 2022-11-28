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
var FirebasehostingProjectsSitesListPathParams = /** @class */ (function (_super) {
    __extends(FirebasehostingProjectsSitesListPathParams, _super);
    function FirebasehostingProjectsSitesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], FirebasehostingProjectsSitesListPathParams.prototype, "parent", void 0);
    return FirebasehostingProjectsSitesListPathParams;
}(SpeakeasyBase));
export { FirebasehostingProjectsSitesListPathParams };
var FirebasehostingProjectsSitesListQueryParams = /** @class */ (function (_super) {
    __extends(FirebasehostingProjectsSitesListQueryParams, _super);
    function FirebasehostingProjectsSitesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirebasehostingProjectsSitesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirebasehostingProjectsSitesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirebasehostingProjectsSitesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirebasehostingProjectsSitesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirebasehostingProjectsSitesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirebasehostingProjectsSitesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirebasehostingProjectsSitesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], FirebasehostingProjectsSitesListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], FirebasehostingProjectsSitesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirebasehostingProjectsSitesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirebasehostingProjectsSitesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirebasehostingProjectsSitesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirebasehostingProjectsSitesListQueryParams.prototype, "uploadProtocol", void 0);
    return FirebasehostingProjectsSitesListQueryParams;
}(SpeakeasyBase));
export { FirebasehostingProjectsSitesListQueryParams };
var FirebasehostingProjectsSitesListSecurityOption1 = /** @class */ (function (_super) {
    __extends(FirebasehostingProjectsSitesListSecurityOption1, _super);
    function FirebasehostingProjectsSitesListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebasehostingProjectsSitesListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebasehostingProjectsSitesListSecurityOption1.prototype, "oauth2c", void 0);
    return FirebasehostingProjectsSitesListSecurityOption1;
}(SpeakeasyBase));
export { FirebasehostingProjectsSitesListSecurityOption1 };
var FirebasehostingProjectsSitesListSecurityOption2 = /** @class */ (function (_super) {
    __extends(FirebasehostingProjectsSitesListSecurityOption2, _super);
    function FirebasehostingProjectsSitesListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebasehostingProjectsSitesListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebasehostingProjectsSitesListSecurityOption2.prototype, "oauth2c", void 0);
    return FirebasehostingProjectsSitesListSecurityOption2;
}(SpeakeasyBase));
export { FirebasehostingProjectsSitesListSecurityOption2 };
var FirebasehostingProjectsSitesListSecurityOption3 = /** @class */ (function (_super) {
    __extends(FirebasehostingProjectsSitesListSecurityOption3, _super);
    function FirebasehostingProjectsSitesListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebasehostingProjectsSitesListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebasehostingProjectsSitesListSecurityOption3.prototype, "oauth2c", void 0);
    return FirebasehostingProjectsSitesListSecurityOption3;
}(SpeakeasyBase));
export { FirebasehostingProjectsSitesListSecurityOption3 };
var FirebasehostingProjectsSitesListSecurityOption4 = /** @class */ (function (_super) {
    __extends(FirebasehostingProjectsSitesListSecurityOption4, _super);
    function FirebasehostingProjectsSitesListSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebasehostingProjectsSitesListSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebasehostingProjectsSitesListSecurityOption4.prototype, "oauth2c", void 0);
    return FirebasehostingProjectsSitesListSecurityOption4;
}(SpeakeasyBase));
export { FirebasehostingProjectsSitesListSecurityOption4 };
var FirebasehostingProjectsSitesListSecurity = /** @class */ (function (_super) {
    __extends(FirebasehostingProjectsSitesListSecurity, _super);
    function FirebasehostingProjectsSitesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebasehostingProjectsSitesListSecurityOption1)
    ], FirebasehostingProjectsSitesListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebasehostingProjectsSitesListSecurityOption2)
    ], FirebasehostingProjectsSitesListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebasehostingProjectsSitesListSecurityOption3)
    ], FirebasehostingProjectsSitesListSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebasehostingProjectsSitesListSecurityOption4)
    ], FirebasehostingProjectsSitesListSecurity.prototype, "option4", void 0);
    return FirebasehostingProjectsSitesListSecurity;
}(SpeakeasyBase));
export { FirebasehostingProjectsSitesListSecurity };
var FirebasehostingProjectsSitesListRequest = /** @class */ (function (_super) {
    __extends(FirebasehostingProjectsSitesListRequest, _super);
    function FirebasehostingProjectsSitesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebasehostingProjectsSitesListPathParams)
    ], FirebasehostingProjectsSitesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebasehostingProjectsSitesListQueryParams)
    ], FirebasehostingProjectsSitesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebasehostingProjectsSitesListSecurity)
    ], FirebasehostingProjectsSitesListRequest.prototype, "security", void 0);
    return FirebasehostingProjectsSitesListRequest;
}(SpeakeasyBase));
export { FirebasehostingProjectsSitesListRequest };
var FirebasehostingProjectsSitesListResponse = /** @class */ (function (_super) {
    __extends(FirebasehostingProjectsSitesListResponse, _super);
    function FirebasehostingProjectsSitesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FirebasehostingProjectsSitesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListSitesResponse)
    ], FirebasehostingProjectsSitesListResponse.prototype, "listSitesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FirebasehostingProjectsSitesListResponse.prototype, "statusCode", void 0);
    return FirebasehostingProjectsSitesListResponse;
}(SpeakeasyBase));
export { FirebasehostingProjectsSitesListResponse };
