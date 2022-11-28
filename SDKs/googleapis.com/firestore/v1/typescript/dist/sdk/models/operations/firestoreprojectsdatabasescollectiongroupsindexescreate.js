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
var FirestoreProjectsDatabasesCollectionGroupsIndexesCreatePathParams = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesCollectionGroupsIndexesCreatePathParams, _super);
    function FirestoreProjectsDatabasesCollectionGroupsIndexesCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesCollectionGroupsIndexesCreatePathParams.prototype, "parent", void 0);
    return FirestoreProjectsDatabasesCollectionGroupsIndexesCreatePathParams;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesCollectionGroupsIndexesCreatePathParams };
var FirestoreProjectsDatabasesCollectionGroupsIndexesCreateQueryParams = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesCollectionGroupsIndexesCreateQueryParams, _super);
    function FirestoreProjectsDatabasesCollectionGroupsIndexesCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesCollectionGroupsIndexesCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesCollectionGroupsIndexesCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesCollectionGroupsIndexesCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesCollectionGroupsIndexesCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesCollectionGroupsIndexesCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesCollectionGroupsIndexesCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesCollectionGroupsIndexesCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirestoreProjectsDatabasesCollectionGroupsIndexesCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesCollectionGroupsIndexesCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesCollectionGroupsIndexesCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesCollectionGroupsIndexesCreateQueryParams.prototype, "uploadProtocol", void 0);
    return FirestoreProjectsDatabasesCollectionGroupsIndexesCreateQueryParams;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesCollectionGroupsIndexesCreateQueryParams };
var FirestoreProjectsDatabasesCollectionGroupsIndexesCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesCollectionGroupsIndexesCreateSecurityOption1, _super);
    function FirestoreProjectsDatabasesCollectionGroupsIndexesCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirestoreProjectsDatabasesCollectionGroupsIndexesCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirestoreProjectsDatabasesCollectionGroupsIndexesCreateSecurityOption1.prototype, "oauth2c", void 0);
    return FirestoreProjectsDatabasesCollectionGroupsIndexesCreateSecurityOption1;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesCollectionGroupsIndexesCreateSecurityOption1 };
var FirestoreProjectsDatabasesCollectionGroupsIndexesCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesCollectionGroupsIndexesCreateSecurityOption2, _super);
    function FirestoreProjectsDatabasesCollectionGroupsIndexesCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirestoreProjectsDatabasesCollectionGroupsIndexesCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirestoreProjectsDatabasesCollectionGroupsIndexesCreateSecurityOption2.prototype, "oauth2c", void 0);
    return FirestoreProjectsDatabasesCollectionGroupsIndexesCreateSecurityOption2;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesCollectionGroupsIndexesCreateSecurityOption2 };
var FirestoreProjectsDatabasesCollectionGroupsIndexesCreateSecurity = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesCollectionGroupsIndexesCreateSecurity, _super);
    function FirestoreProjectsDatabasesCollectionGroupsIndexesCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirestoreProjectsDatabasesCollectionGroupsIndexesCreateSecurityOption1)
    ], FirestoreProjectsDatabasesCollectionGroupsIndexesCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirestoreProjectsDatabasesCollectionGroupsIndexesCreateSecurityOption2)
    ], FirestoreProjectsDatabasesCollectionGroupsIndexesCreateSecurity.prototype, "option2", void 0);
    return FirestoreProjectsDatabasesCollectionGroupsIndexesCreateSecurity;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesCollectionGroupsIndexesCreateSecurity };
var FirestoreProjectsDatabasesCollectionGroupsIndexesCreateRequest = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesCollectionGroupsIndexesCreateRequest, _super);
    function FirestoreProjectsDatabasesCollectionGroupsIndexesCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirestoreProjectsDatabasesCollectionGroupsIndexesCreatePathParams)
    ], FirestoreProjectsDatabasesCollectionGroupsIndexesCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirestoreProjectsDatabasesCollectionGroupsIndexesCreateQueryParams)
    ], FirestoreProjectsDatabasesCollectionGroupsIndexesCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleFirestoreAdminV1Index)
    ], FirestoreProjectsDatabasesCollectionGroupsIndexesCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirestoreProjectsDatabasesCollectionGroupsIndexesCreateSecurity)
    ], FirestoreProjectsDatabasesCollectionGroupsIndexesCreateRequest.prototype, "security", void 0);
    return FirestoreProjectsDatabasesCollectionGroupsIndexesCreateRequest;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesCollectionGroupsIndexesCreateRequest };
var FirestoreProjectsDatabasesCollectionGroupsIndexesCreateResponse = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesCollectionGroupsIndexesCreateResponse, _super);
    function FirestoreProjectsDatabasesCollectionGroupsIndexesCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesCollectionGroupsIndexesCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleLongrunningOperation)
    ], FirestoreProjectsDatabasesCollectionGroupsIndexesCreateResponse.prototype, "googleLongrunningOperation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FirestoreProjectsDatabasesCollectionGroupsIndexesCreateResponse.prototype, "statusCode", void 0);
    return FirestoreProjectsDatabasesCollectionGroupsIndexesCreateResponse;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesCollectionGroupsIndexesCreateResponse };
