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
var FirestoreProjectsDatabasesIndexesGetPathParams = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesIndexesGetPathParams, _super);
    function FirestoreProjectsDatabasesIndexesGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesIndexesGetPathParams.prototype, "name", void 0);
    return FirestoreProjectsDatabasesIndexesGetPathParams;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesIndexesGetPathParams };
var FirestoreProjectsDatabasesIndexesGetQueryParams = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesIndexesGetQueryParams, _super);
    function FirestoreProjectsDatabasesIndexesGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesIndexesGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesIndexesGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesIndexesGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesIndexesGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesIndexesGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesIndexesGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mask.fieldPaths" }),
        __metadata("design:type", Array)
    ], FirestoreProjectsDatabasesIndexesGetQueryParams.prototype, "maskFieldPaths", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesIndexesGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirestoreProjectsDatabasesIndexesGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesIndexesGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=readTime" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesIndexesGetQueryParams.prototype, "readTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=transaction" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesIndexesGetQueryParams.prototype, "transaction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesIndexesGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesIndexesGetQueryParams.prototype, "uploadProtocol", void 0);
    return FirestoreProjectsDatabasesIndexesGetQueryParams;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesIndexesGetQueryParams };
var FirestoreProjectsDatabasesIndexesGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesIndexesGetSecurityOption1, _super);
    function FirestoreProjectsDatabasesIndexesGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirestoreProjectsDatabasesIndexesGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirestoreProjectsDatabasesIndexesGetSecurityOption1.prototype, "oauth2c", void 0);
    return FirestoreProjectsDatabasesIndexesGetSecurityOption1;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesIndexesGetSecurityOption1 };
var FirestoreProjectsDatabasesIndexesGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesIndexesGetSecurityOption2, _super);
    function FirestoreProjectsDatabasesIndexesGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirestoreProjectsDatabasesIndexesGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirestoreProjectsDatabasesIndexesGetSecurityOption2.prototype, "oauth2c", void 0);
    return FirestoreProjectsDatabasesIndexesGetSecurityOption2;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesIndexesGetSecurityOption2 };
var FirestoreProjectsDatabasesIndexesGetSecurity = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesIndexesGetSecurity, _super);
    function FirestoreProjectsDatabasesIndexesGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirestoreProjectsDatabasesIndexesGetSecurityOption1)
    ], FirestoreProjectsDatabasesIndexesGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirestoreProjectsDatabasesIndexesGetSecurityOption2)
    ], FirestoreProjectsDatabasesIndexesGetSecurity.prototype, "option2", void 0);
    return FirestoreProjectsDatabasesIndexesGetSecurity;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesIndexesGetSecurity };
var FirestoreProjectsDatabasesIndexesGetRequest = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesIndexesGetRequest, _super);
    function FirestoreProjectsDatabasesIndexesGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirestoreProjectsDatabasesIndexesGetPathParams)
    ], FirestoreProjectsDatabasesIndexesGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirestoreProjectsDatabasesIndexesGetQueryParams)
    ], FirestoreProjectsDatabasesIndexesGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirestoreProjectsDatabasesIndexesGetSecurity)
    ], FirestoreProjectsDatabasesIndexesGetRequest.prototype, "security", void 0);
    return FirestoreProjectsDatabasesIndexesGetRequest;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesIndexesGetRequest };
var FirestoreProjectsDatabasesIndexesGetResponse = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesIndexesGetResponse, _super);
    function FirestoreProjectsDatabasesIndexesGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesIndexesGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleFirestoreAdminV1beta1Index)
    ], FirestoreProjectsDatabasesIndexesGetResponse.prototype, "googleFirestoreAdminV1beta1Index", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FirestoreProjectsDatabasesIndexesGetResponse.prototype, "statusCode", void 0);
    return FirestoreProjectsDatabasesIndexesGetResponse;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesIndexesGetResponse };
