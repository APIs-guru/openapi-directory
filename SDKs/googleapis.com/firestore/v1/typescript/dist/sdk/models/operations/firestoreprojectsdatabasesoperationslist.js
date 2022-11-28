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
var FirestoreProjectsDatabasesOperationsListPathParams = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesOperationsListPathParams, _super);
    function FirestoreProjectsDatabasesOperationsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesOperationsListPathParams.prototype, "name", void 0);
    return FirestoreProjectsDatabasesOperationsListPathParams;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesOperationsListPathParams };
var FirestoreProjectsDatabasesOperationsListQueryParams = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesOperationsListQueryParams, _super);
    function FirestoreProjectsDatabasesOperationsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesOperationsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesOperationsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesOperationsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesOperationsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesOperationsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesOperationsListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesOperationsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesOperationsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], FirestoreProjectsDatabasesOperationsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesOperationsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirestoreProjectsDatabasesOperationsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesOperationsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesOperationsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesOperationsListQueryParams.prototype, "uploadProtocol", void 0);
    return FirestoreProjectsDatabasesOperationsListQueryParams;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesOperationsListQueryParams };
var FirestoreProjectsDatabasesOperationsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesOperationsListSecurityOption1, _super);
    function FirestoreProjectsDatabasesOperationsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirestoreProjectsDatabasesOperationsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirestoreProjectsDatabasesOperationsListSecurityOption1.prototype, "oauth2c", void 0);
    return FirestoreProjectsDatabasesOperationsListSecurityOption1;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesOperationsListSecurityOption1 };
var FirestoreProjectsDatabasesOperationsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesOperationsListSecurityOption2, _super);
    function FirestoreProjectsDatabasesOperationsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirestoreProjectsDatabasesOperationsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirestoreProjectsDatabasesOperationsListSecurityOption2.prototype, "oauth2c", void 0);
    return FirestoreProjectsDatabasesOperationsListSecurityOption2;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesOperationsListSecurityOption2 };
var FirestoreProjectsDatabasesOperationsListSecurity = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesOperationsListSecurity, _super);
    function FirestoreProjectsDatabasesOperationsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirestoreProjectsDatabasesOperationsListSecurityOption1)
    ], FirestoreProjectsDatabasesOperationsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirestoreProjectsDatabasesOperationsListSecurityOption2)
    ], FirestoreProjectsDatabasesOperationsListSecurity.prototype, "option2", void 0);
    return FirestoreProjectsDatabasesOperationsListSecurity;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesOperationsListSecurity };
var FirestoreProjectsDatabasesOperationsListRequest = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesOperationsListRequest, _super);
    function FirestoreProjectsDatabasesOperationsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirestoreProjectsDatabasesOperationsListPathParams)
    ], FirestoreProjectsDatabasesOperationsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirestoreProjectsDatabasesOperationsListQueryParams)
    ], FirestoreProjectsDatabasesOperationsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirestoreProjectsDatabasesOperationsListSecurity)
    ], FirestoreProjectsDatabasesOperationsListRequest.prototype, "security", void 0);
    return FirestoreProjectsDatabasesOperationsListRequest;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesOperationsListRequest };
var FirestoreProjectsDatabasesOperationsListResponse = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesOperationsListResponse, _super);
    function FirestoreProjectsDatabasesOperationsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesOperationsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleLongrunningListOperationsResponse)
    ], FirestoreProjectsDatabasesOperationsListResponse.prototype, "googleLongrunningListOperationsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FirestoreProjectsDatabasesOperationsListResponse.prototype, "statusCode", void 0);
    return FirestoreProjectsDatabasesOperationsListResponse;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesOperationsListResponse };
