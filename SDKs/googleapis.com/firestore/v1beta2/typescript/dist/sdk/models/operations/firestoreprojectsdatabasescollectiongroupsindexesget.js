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
var FirestoreProjectsDatabasesCollectionGroupsIndexesGetPathParams = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesCollectionGroupsIndexesGetPathParams, _super);
    function FirestoreProjectsDatabasesCollectionGroupsIndexesGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesCollectionGroupsIndexesGetPathParams.prototype, "name", void 0);
    return FirestoreProjectsDatabasesCollectionGroupsIndexesGetPathParams;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesCollectionGroupsIndexesGetPathParams };
var FirestoreProjectsDatabasesCollectionGroupsIndexesGetQueryParams = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesCollectionGroupsIndexesGetQueryParams, _super);
    function FirestoreProjectsDatabasesCollectionGroupsIndexesGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesCollectionGroupsIndexesGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesCollectionGroupsIndexesGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesCollectionGroupsIndexesGetQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesCollectionGroupsIndexesGetQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesCollectionGroupsIndexesGetQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesCollectionGroupsIndexesGetQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesCollectionGroupsIndexesGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirestoreProjectsDatabasesCollectionGroupsIndexesGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesCollectionGroupsIndexesGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesCollectionGroupsIndexesGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesCollectionGroupsIndexesGetQueryParams.prototype, "uploadProtocol", void 0);
    return FirestoreProjectsDatabasesCollectionGroupsIndexesGetQueryParams;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesCollectionGroupsIndexesGetQueryParams };
var FirestoreProjectsDatabasesCollectionGroupsIndexesGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesCollectionGroupsIndexesGetSecurityOption1, _super);
    function FirestoreProjectsDatabasesCollectionGroupsIndexesGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirestoreProjectsDatabasesCollectionGroupsIndexesGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirestoreProjectsDatabasesCollectionGroupsIndexesGetSecurityOption1.prototype, "oauth2c", void 0);
    return FirestoreProjectsDatabasesCollectionGroupsIndexesGetSecurityOption1;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesCollectionGroupsIndexesGetSecurityOption1 };
var FirestoreProjectsDatabasesCollectionGroupsIndexesGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesCollectionGroupsIndexesGetSecurityOption2, _super);
    function FirestoreProjectsDatabasesCollectionGroupsIndexesGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirestoreProjectsDatabasesCollectionGroupsIndexesGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirestoreProjectsDatabasesCollectionGroupsIndexesGetSecurityOption2.prototype, "oauth2c", void 0);
    return FirestoreProjectsDatabasesCollectionGroupsIndexesGetSecurityOption2;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesCollectionGroupsIndexesGetSecurityOption2 };
var FirestoreProjectsDatabasesCollectionGroupsIndexesGetSecurity = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesCollectionGroupsIndexesGetSecurity, _super);
    function FirestoreProjectsDatabasesCollectionGroupsIndexesGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", FirestoreProjectsDatabasesCollectionGroupsIndexesGetSecurityOption1)
    ], FirestoreProjectsDatabasesCollectionGroupsIndexesGetSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", FirestoreProjectsDatabasesCollectionGroupsIndexesGetSecurityOption2)
    ], FirestoreProjectsDatabasesCollectionGroupsIndexesGetSecurity.prototype, "option2", void 0);
    return FirestoreProjectsDatabasesCollectionGroupsIndexesGetSecurity;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesCollectionGroupsIndexesGetSecurity };
var FirestoreProjectsDatabasesCollectionGroupsIndexesGetRequest = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesCollectionGroupsIndexesGetRequest, _super);
    function FirestoreProjectsDatabasesCollectionGroupsIndexesGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", FirestoreProjectsDatabasesCollectionGroupsIndexesGetPathParams)
    ], FirestoreProjectsDatabasesCollectionGroupsIndexesGetRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FirestoreProjectsDatabasesCollectionGroupsIndexesGetQueryParams)
    ], FirestoreProjectsDatabasesCollectionGroupsIndexesGetRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FirestoreProjectsDatabasesCollectionGroupsIndexesGetSecurity)
    ], FirestoreProjectsDatabasesCollectionGroupsIndexesGetRequest.prototype, "security", void 0);
    return FirestoreProjectsDatabasesCollectionGroupsIndexesGetRequest;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesCollectionGroupsIndexesGetRequest };
var FirestoreProjectsDatabasesCollectionGroupsIndexesGetResponse = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesCollectionGroupsIndexesGetResponse, _super);
    function FirestoreProjectsDatabasesCollectionGroupsIndexesGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesCollectionGroupsIndexesGetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GoogleFirestoreAdminV1beta2Index)
    ], FirestoreProjectsDatabasesCollectionGroupsIndexesGetResponse.prototype, "googleFirestoreAdminV1beta2Index", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FirestoreProjectsDatabasesCollectionGroupsIndexesGetResponse.prototype, "statusCode", void 0);
    return FirestoreProjectsDatabasesCollectionGroupsIndexesGetResponse;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesCollectionGroupsIndexesGetResponse };
