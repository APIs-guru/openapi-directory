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
var FirestoreProjectsDatabasesIndexesListPathParams = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesIndexesListPathParams, _super);
    function FirestoreProjectsDatabasesIndexesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesIndexesListPathParams.prototype, "parent", void 0);
    return FirestoreProjectsDatabasesIndexesListPathParams;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesIndexesListPathParams };
var FirestoreProjectsDatabasesIndexesListQueryParams = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesIndexesListQueryParams, _super);
    function FirestoreProjectsDatabasesIndexesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesIndexesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesIndexesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesIndexesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesIndexesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesIndexesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesIndexesListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesIndexesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesIndexesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], FirestoreProjectsDatabasesIndexesListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesIndexesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirestoreProjectsDatabasesIndexesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesIndexesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesIndexesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesIndexesListQueryParams.prototype, "uploadProtocol", void 0);
    return FirestoreProjectsDatabasesIndexesListQueryParams;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesIndexesListQueryParams };
var FirestoreProjectsDatabasesIndexesListSecurityOption1 = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesIndexesListSecurityOption1, _super);
    function FirestoreProjectsDatabasesIndexesListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirestoreProjectsDatabasesIndexesListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirestoreProjectsDatabasesIndexesListSecurityOption1.prototype, "oauth2c", void 0);
    return FirestoreProjectsDatabasesIndexesListSecurityOption1;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesIndexesListSecurityOption1 };
var FirestoreProjectsDatabasesIndexesListSecurityOption2 = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesIndexesListSecurityOption2, _super);
    function FirestoreProjectsDatabasesIndexesListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirestoreProjectsDatabasesIndexesListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirestoreProjectsDatabasesIndexesListSecurityOption2.prototype, "oauth2c", void 0);
    return FirestoreProjectsDatabasesIndexesListSecurityOption2;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesIndexesListSecurityOption2 };
var FirestoreProjectsDatabasesIndexesListSecurity = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesIndexesListSecurity, _super);
    function FirestoreProjectsDatabasesIndexesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirestoreProjectsDatabasesIndexesListSecurityOption1)
    ], FirestoreProjectsDatabasesIndexesListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirestoreProjectsDatabasesIndexesListSecurityOption2)
    ], FirestoreProjectsDatabasesIndexesListSecurity.prototype, "option2", void 0);
    return FirestoreProjectsDatabasesIndexesListSecurity;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesIndexesListSecurity };
var FirestoreProjectsDatabasesIndexesListRequest = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesIndexesListRequest, _super);
    function FirestoreProjectsDatabasesIndexesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirestoreProjectsDatabasesIndexesListPathParams)
    ], FirestoreProjectsDatabasesIndexesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirestoreProjectsDatabasesIndexesListQueryParams)
    ], FirestoreProjectsDatabasesIndexesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirestoreProjectsDatabasesIndexesListSecurity)
    ], FirestoreProjectsDatabasesIndexesListRequest.prototype, "security", void 0);
    return FirestoreProjectsDatabasesIndexesListRequest;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesIndexesListRequest };
var FirestoreProjectsDatabasesIndexesListResponse = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesIndexesListResponse, _super);
    function FirestoreProjectsDatabasesIndexesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesIndexesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleFirestoreAdminV1beta1ListIndexesResponse)
    ], FirestoreProjectsDatabasesIndexesListResponse.prototype, "googleFirestoreAdminV1beta1ListIndexesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FirestoreProjectsDatabasesIndexesListResponse.prototype, "statusCode", void 0);
    return FirestoreProjectsDatabasesIndexesListResponse;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesIndexesListResponse };
