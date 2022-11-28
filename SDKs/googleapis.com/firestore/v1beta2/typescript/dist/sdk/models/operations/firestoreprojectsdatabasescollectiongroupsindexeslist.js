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
var FirestoreProjectsDatabasesCollectionGroupsIndexesListPathParams = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesCollectionGroupsIndexesListPathParams, _super);
    function FirestoreProjectsDatabasesCollectionGroupsIndexesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesCollectionGroupsIndexesListPathParams.prototype, "parent", void 0);
    return FirestoreProjectsDatabasesCollectionGroupsIndexesListPathParams;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesCollectionGroupsIndexesListPathParams };
var FirestoreProjectsDatabasesCollectionGroupsIndexesListQueryParams = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesCollectionGroupsIndexesListQueryParams, _super);
    function FirestoreProjectsDatabasesCollectionGroupsIndexesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesCollectionGroupsIndexesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesCollectionGroupsIndexesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesCollectionGroupsIndexesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesCollectionGroupsIndexesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesCollectionGroupsIndexesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesCollectionGroupsIndexesListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesCollectionGroupsIndexesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesCollectionGroupsIndexesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], FirestoreProjectsDatabasesCollectionGroupsIndexesListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesCollectionGroupsIndexesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirestoreProjectsDatabasesCollectionGroupsIndexesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesCollectionGroupsIndexesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesCollectionGroupsIndexesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesCollectionGroupsIndexesListQueryParams.prototype, "uploadProtocol", void 0);
    return FirestoreProjectsDatabasesCollectionGroupsIndexesListQueryParams;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesCollectionGroupsIndexesListQueryParams };
var FirestoreProjectsDatabasesCollectionGroupsIndexesListSecurityOption1 = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesCollectionGroupsIndexesListSecurityOption1, _super);
    function FirestoreProjectsDatabasesCollectionGroupsIndexesListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirestoreProjectsDatabasesCollectionGroupsIndexesListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirestoreProjectsDatabasesCollectionGroupsIndexesListSecurityOption1.prototype, "oauth2c", void 0);
    return FirestoreProjectsDatabasesCollectionGroupsIndexesListSecurityOption1;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesCollectionGroupsIndexesListSecurityOption1 };
var FirestoreProjectsDatabasesCollectionGroupsIndexesListSecurityOption2 = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesCollectionGroupsIndexesListSecurityOption2, _super);
    function FirestoreProjectsDatabasesCollectionGroupsIndexesListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirestoreProjectsDatabasesCollectionGroupsIndexesListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirestoreProjectsDatabasesCollectionGroupsIndexesListSecurityOption2.prototype, "oauth2c", void 0);
    return FirestoreProjectsDatabasesCollectionGroupsIndexesListSecurityOption2;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesCollectionGroupsIndexesListSecurityOption2 };
var FirestoreProjectsDatabasesCollectionGroupsIndexesListSecurity = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesCollectionGroupsIndexesListSecurity, _super);
    function FirestoreProjectsDatabasesCollectionGroupsIndexesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirestoreProjectsDatabasesCollectionGroupsIndexesListSecurityOption1)
    ], FirestoreProjectsDatabasesCollectionGroupsIndexesListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirestoreProjectsDatabasesCollectionGroupsIndexesListSecurityOption2)
    ], FirestoreProjectsDatabasesCollectionGroupsIndexesListSecurity.prototype, "option2", void 0);
    return FirestoreProjectsDatabasesCollectionGroupsIndexesListSecurity;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesCollectionGroupsIndexesListSecurity };
var FirestoreProjectsDatabasesCollectionGroupsIndexesListRequest = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesCollectionGroupsIndexesListRequest, _super);
    function FirestoreProjectsDatabasesCollectionGroupsIndexesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirestoreProjectsDatabasesCollectionGroupsIndexesListPathParams)
    ], FirestoreProjectsDatabasesCollectionGroupsIndexesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirestoreProjectsDatabasesCollectionGroupsIndexesListQueryParams)
    ], FirestoreProjectsDatabasesCollectionGroupsIndexesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirestoreProjectsDatabasesCollectionGroupsIndexesListSecurity)
    ], FirestoreProjectsDatabasesCollectionGroupsIndexesListRequest.prototype, "security", void 0);
    return FirestoreProjectsDatabasesCollectionGroupsIndexesListRequest;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesCollectionGroupsIndexesListRequest };
var FirestoreProjectsDatabasesCollectionGroupsIndexesListResponse = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesCollectionGroupsIndexesListResponse, _super);
    function FirestoreProjectsDatabasesCollectionGroupsIndexesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesCollectionGroupsIndexesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleFirestoreAdminV1beta2ListIndexesResponse)
    ], FirestoreProjectsDatabasesCollectionGroupsIndexesListResponse.prototype, "googleFirestoreAdminV1beta2ListIndexesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FirestoreProjectsDatabasesCollectionGroupsIndexesListResponse.prototype, "statusCode", void 0);
    return FirestoreProjectsDatabasesCollectionGroupsIndexesListResponse;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesCollectionGroupsIndexesListResponse };
