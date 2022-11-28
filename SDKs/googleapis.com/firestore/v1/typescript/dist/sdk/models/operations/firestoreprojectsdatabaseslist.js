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
var FirestoreProjectsDatabasesListPathParams = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesListPathParams, _super);
    function FirestoreProjectsDatabasesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesListPathParams.prototype, "parent", void 0);
    return FirestoreProjectsDatabasesListPathParams;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesListPathParams };
var FirestoreProjectsDatabasesListQueryParams = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesListQueryParams, _super);
    function FirestoreProjectsDatabasesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirestoreProjectsDatabasesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesListQueryParams.prototype, "uploadProtocol", void 0);
    return FirestoreProjectsDatabasesListQueryParams;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesListQueryParams };
var FirestoreProjectsDatabasesListSecurityOption1 = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesListSecurityOption1, _super);
    function FirestoreProjectsDatabasesListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirestoreProjectsDatabasesListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirestoreProjectsDatabasesListSecurityOption1.prototype, "oauth2c", void 0);
    return FirestoreProjectsDatabasesListSecurityOption1;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesListSecurityOption1 };
var FirestoreProjectsDatabasesListSecurityOption2 = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesListSecurityOption2, _super);
    function FirestoreProjectsDatabasesListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirestoreProjectsDatabasesListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirestoreProjectsDatabasesListSecurityOption2.prototype, "oauth2c", void 0);
    return FirestoreProjectsDatabasesListSecurityOption2;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesListSecurityOption2 };
var FirestoreProjectsDatabasesListSecurity = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesListSecurity, _super);
    function FirestoreProjectsDatabasesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirestoreProjectsDatabasesListSecurityOption1)
    ], FirestoreProjectsDatabasesListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirestoreProjectsDatabasesListSecurityOption2)
    ], FirestoreProjectsDatabasesListSecurity.prototype, "option2", void 0);
    return FirestoreProjectsDatabasesListSecurity;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesListSecurity };
var FirestoreProjectsDatabasesListRequest = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesListRequest, _super);
    function FirestoreProjectsDatabasesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirestoreProjectsDatabasesListPathParams)
    ], FirestoreProjectsDatabasesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirestoreProjectsDatabasesListQueryParams)
    ], FirestoreProjectsDatabasesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirestoreProjectsDatabasesListSecurity)
    ], FirestoreProjectsDatabasesListRequest.prototype, "security", void 0);
    return FirestoreProjectsDatabasesListRequest;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesListRequest };
var FirestoreProjectsDatabasesListResponse = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesListResponse, _super);
    function FirestoreProjectsDatabasesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleFirestoreAdminV1ListDatabasesResponse)
    ], FirestoreProjectsDatabasesListResponse.prototype, "googleFirestoreAdminV1ListDatabasesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FirestoreProjectsDatabasesListResponse.prototype, "statusCode", void 0);
    return FirestoreProjectsDatabasesListResponse;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesListResponse };
