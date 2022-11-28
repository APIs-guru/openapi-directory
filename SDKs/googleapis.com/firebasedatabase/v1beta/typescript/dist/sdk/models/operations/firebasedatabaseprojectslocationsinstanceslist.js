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
var FirebasedatabaseProjectsLocationsInstancesListPathParams = /** @class */ (function (_super) {
    __extends(FirebasedatabaseProjectsLocationsInstancesListPathParams, _super);
    function FirebasedatabaseProjectsLocationsInstancesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], FirebasedatabaseProjectsLocationsInstancesListPathParams.prototype, "parent", void 0);
    return FirebasedatabaseProjectsLocationsInstancesListPathParams;
}(SpeakeasyBase));
export { FirebasedatabaseProjectsLocationsInstancesListPathParams };
var FirebasedatabaseProjectsLocationsInstancesListQueryParams = /** @class */ (function (_super) {
    __extends(FirebasedatabaseProjectsLocationsInstancesListQueryParams, _super);
    function FirebasedatabaseProjectsLocationsInstancesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirebasedatabaseProjectsLocationsInstancesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirebasedatabaseProjectsLocationsInstancesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirebasedatabaseProjectsLocationsInstancesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirebasedatabaseProjectsLocationsInstancesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirebasedatabaseProjectsLocationsInstancesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirebasedatabaseProjectsLocationsInstancesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirebasedatabaseProjectsLocationsInstancesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], FirebasedatabaseProjectsLocationsInstancesListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], FirebasedatabaseProjectsLocationsInstancesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirebasedatabaseProjectsLocationsInstancesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirebasedatabaseProjectsLocationsInstancesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=showDeleted" }),
        __metadata("design:type", Boolean)
    ], FirebasedatabaseProjectsLocationsInstancesListQueryParams.prototype, "showDeleted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirebasedatabaseProjectsLocationsInstancesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirebasedatabaseProjectsLocationsInstancesListQueryParams.prototype, "uploadProtocol", void 0);
    return FirebasedatabaseProjectsLocationsInstancesListQueryParams;
}(SpeakeasyBase));
export { FirebasedatabaseProjectsLocationsInstancesListQueryParams };
var FirebasedatabaseProjectsLocationsInstancesListSecurityOption1 = /** @class */ (function (_super) {
    __extends(FirebasedatabaseProjectsLocationsInstancesListSecurityOption1, _super);
    function FirebasedatabaseProjectsLocationsInstancesListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebasedatabaseProjectsLocationsInstancesListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebasedatabaseProjectsLocationsInstancesListSecurityOption1.prototype, "oauth2c", void 0);
    return FirebasedatabaseProjectsLocationsInstancesListSecurityOption1;
}(SpeakeasyBase));
export { FirebasedatabaseProjectsLocationsInstancesListSecurityOption1 };
var FirebasedatabaseProjectsLocationsInstancesListSecurityOption2 = /** @class */ (function (_super) {
    __extends(FirebasedatabaseProjectsLocationsInstancesListSecurityOption2, _super);
    function FirebasedatabaseProjectsLocationsInstancesListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebasedatabaseProjectsLocationsInstancesListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebasedatabaseProjectsLocationsInstancesListSecurityOption2.prototype, "oauth2c", void 0);
    return FirebasedatabaseProjectsLocationsInstancesListSecurityOption2;
}(SpeakeasyBase));
export { FirebasedatabaseProjectsLocationsInstancesListSecurityOption2 };
var FirebasedatabaseProjectsLocationsInstancesListSecurityOption3 = /** @class */ (function (_super) {
    __extends(FirebasedatabaseProjectsLocationsInstancesListSecurityOption3, _super);
    function FirebasedatabaseProjectsLocationsInstancesListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebasedatabaseProjectsLocationsInstancesListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebasedatabaseProjectsLocationsInstancesListSecurityOption3.prototype, "oauth2c", void 0);
    return FirebasedatabaseProjectsLocationsInstancesListSecurityOption3;
}(SpeakeasyBase));
export { FirebasedatabaseProjectsLocationsInstancesListSecurityOption3 };
var FirebasedatabaseProjectsLocationsInstancesListSecurityOption4 = /** @class */ (function (_super) {
    __extends(FirebasedatabaseProjectsLocationsInstancesListSecurityOption4, _super);
    function FirebasedatabaseProjectsLocationsInstancesListSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebasedatabaseProjectsLocationsInstancesListSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebasedatabaseProjectsLocationsInstancesListSecurityOption4.prototype, "oauth2c", void 0);
    return FirebasedatabaseProjectsLocationsInstancesListSecurityOption4;
}(SpeakeasyBase));
export { FirebasedatabaseProjectsLocationsInstancesListSecurityOption4 };
var FirebasedatabaseProjectsLocationsInstancesListSecurity = /** @class */ (function (_super) {
    __extends(FirebasedatabaseProjectsLocationsInstancesListSecurity, _super);
    function FirebasedatabaseProjectsLocationsInstancesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebasedatabaseProjectsLocationsInstancesListSecurityOption1)
    ], FirebasedatabaseProjectsLocationsInstancesListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebasedatabaseProjectsLocationsInstancesListSecurityOption2)
    ], FirebasedatabaseProjectsLocationsInstancesListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebasedatabaseProjectsLocationsInstancesListSecurityOption3)
    ], FirebasedatabaseProjectsLocationsInstancesListSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebasedatabaseProjectsLocationsInstancesListSecurityOption4)
    ], FirebasedatabaseProjectsLocationsInstancesListSecurity.prototype, "option4", void 0);
    return FirebasedatabaseProjectsLocationsInstancesListSecurity;
}(SpeakeasyBase));
export { FirebasedatabaseProjectsLocationsInstancesListSecurity };
var FirebasedatabaseProjectsLocationsInstancesListRequest = /** @class */ (function (_super) {
    __extends(FirebasedatabaseProjectsLocationsInstancesListRequest, _super);
    function FirebasedatabaseProjectsLocationsInstancesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebasedatabaseProjectsLocationsInstancesListPathParams)
    ], FirebasedatabaseProjectsLocationsInstancesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebasedatabaseProjectsLocationsInstancesListQueryParams)
    ], FirebasedatabaseProjectsLocationsInstancesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebasedatabaseProjectsLocationsInstancesListSecurity)
    ], FirebasedatabaseProjectsLocationsInstancesListRequest.prototype, "security", void 0);
    return FirebasedatabaseProjectsLocationsInstancesListRequest;
}(SpeakeasyBase));
export { FirebasedatabaseProjectsLocationsInstancesListRequest };
var FirebasedatabaseProjectsLocationsInstancesListResponse = /** @class */ (function (_super) {
    __extends(FirebasedatabaseProjectsLocationsInstancesListResponse, _super);
    function FirebasedatabaseProjectsLocationsInstancesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FirebasedatabaseProjectsLocationsInstancesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListDatabaseInstancesResponse)
    ], FirebasedatabaseProjectsLocationsInstancesListResponse.prototype, "listDatabaseInstancesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FirebasedatabaseProjectsLocationsInstancesListResponse.prototype, "statusCode", void 0);
    return FirebasedatabaseProjectsLocationsInstancesListResponse;
}(SpeakeasyBase));
export { FirebasedatabaseProjectsLocationsInstancesListResponse };
