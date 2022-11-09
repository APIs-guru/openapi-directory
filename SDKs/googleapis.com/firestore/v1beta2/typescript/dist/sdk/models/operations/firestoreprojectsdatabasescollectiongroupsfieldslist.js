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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var FirestoreProjectsDatabasesCollectionGroupsFieldsListPathParams = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesCollectionGroupsFieldsListPathParams, _super);
    function FirestoreProjectsDatabasesCollectionGroupsFieldsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesCollectionGroupsFieldsListPathParams.prototype, "parent", void 0);
    return FirestoreProjectsDatabasesCollectionGroupsFieldsListPathParams;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesCollectionGroupsFieldsListPathParams };
var FirestoreProjectsDatabasesCollectionGroupsFieldsListQueryParams = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesCollectionGroupsFieldsListQueryParams, _super);
    function FirestoreProjectsDatabasesCollectionGroupsFieldsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesCollectionGroupsFieldsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesCollectionGroupsFieldsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesCollectionGroupsFieldsListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesCollectionGroupsFieldsListQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesCollectionGroupsFieldsListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesCollectionGroupsFieldsListQueryParams.prototype, "filter", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesCollectionGroupsFieldsListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesCollectionGroupsFieldsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], FirestoreProjectsDatabasesCollectionGroupsFieldsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesCollectionGroupsFieldsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirestoreProjectsDatabasesCollectionGroupsFieldsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesCollectionGroupsFieldsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesCollectionGroupsFieldsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesCollectionGroupsFieldsListQueryParams.prototype, "uploadProtocol", void 0);
    return FirestoreProjectsDatabasesCollectionGroupsFieldsListQueryParams;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesCollectionGroupsFieldsListQueryParams };
var FirestoreProjectsDatabasesCollectionGroupsFieldsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesCollectionGroupsFieldsListSecurityOption1, _super);
    function FirestoreProjectsDatabasesCollectionGroupsFieldsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirestoreProjectsDatabasesCollectionGroupsFieldsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirestoreProjectsDatabasesCollectionGroupsFieldsListSecurityOption1.prototype, "oauth2c", void 0);
    return FirestoreProjectsDatabasesCollectionGroupsFieldsListSecurityOption1;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesCollectionGroupsFieldsListSecurityOption1 };
var FirestoreProjectsDatabasesCollectionGroupsFieldsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesCollectionGroupsFieldsListSecurityOption2, _super);
    function FirestoreProjectsDatabasesCollectionGroupsFieldsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirestoreProjectsDatabasesCollectionGroupsFieldsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirestoreProjectsDatabasesCollectionGroupsFieldsListSecurityOption2.prototype, "oauth2c", void 0);
    return FirestoreProjectsDatabasesCollectionGroupsFieldsListSecurityOption2;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesCollectionGroupsFieldsListSecurityOption2 };
var FirestoreProjectsDatabasesCollectionGroupsFieldsListSecurity = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesCollectionGroupsFieldsListSecurity, _super);
    function FirestoreProjectsDatabasesCollectionGroupsFieldsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", FirestoreProjectsDatabasesCollectionGroupsFieldsListSecurityOption1)
    ], FirestoreProjectsDatabasesCollectionGroupsFieldsListSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", FirestoreProjectsDatabasesCollectionGroupsFieldsListSecurityOption2)
    ], FirestoreProjectsDatabasesCollectionGroupsFieldsListSecurity.prototype, "option2", void 0);
    return FirestoreProjectsDatabasesCollectionGroupsFieldsListSecurity;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesCollectionGroupsFieldsListSecurity };
var FirestoreProjectsDatabasesCollectionGroupsFieldsListRequest = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesCollectionGroupsFieldsListRequest, _super);
    function FirestoreProjectsDatabasesCollectionGroupsFieldsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", FirestoreProjectsDatabasesCollectionGroupsFieldsListPathParams)
    ], FirestoreProjectsDatabasesCollectionGroupsFieldsListRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FirestoreProjectsDatabasesCollectionGroupsFieldsListQueryParams)
    ], FirestoreProjectsDatabasesCollectionGroupsFieldsListRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FirestoreProjectsDatabasesCollectionGroupsFieldsListSecurity)
    ], FirestoreProjectsDatabasesCollectionGroupsFieldsListRequest.prototype, "security", void 0);
    return FirestoreProjectsDatabasesCollectionGroupsFieldsListRequest;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesCollectionGroupsFieldsListRequest };
var FirestoreProjectsDatabasesCollectionGroupsFieldsListResponse = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesCollectionGroupsFieldsListResponse, _super);
    function FirestoreProjectsDatabasesCollectionGroupsFieldsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesCollectionGroupsFieldsListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GoogleFirestoreAdminV1beta2ListFieldsResponse)
    ], FirestoreProjectsDatabasesCollectionGroupsFieldsListResponse.prototype, "googleFirestoreAdminV1beta2ListFieldsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FirestoreProjectsDatabasesCollectionGroupsFieldsListResponse.prototype, "statusCode", void 0);
    return FirestoreProjectsDatabasesCollectionGroupsFieldsListResponse;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesCollectionGroupsFieldsListResponse };
