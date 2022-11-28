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
var FirestoreProjectsDatabasesDocumentsBatchGetPathParams = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesDocumentsBatchGetPathParams, _super);
    function FirestoreProjectsDatabasesDocumentsBatchGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=database" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsBatchGetPathParams.prototype, "database", void 0);
    return FirestoreProjectsDatabasesDocumentsBatchGetPathParams;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesDocumentsBatchGetPathParams };
var FirestoreProjectsDatabasesDocumentsBatchGetQueryParams = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesDocumentsBatchGetQueryParams, _super);
    function FirestoreProjectsDatabasesDocumentsBatchGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsBatchGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsBatchGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsBatchGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsBatchGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsBatchGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsBatchGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsBatchGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirestoreProjectsDatabasesDocumentsBatchGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsBatchGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsBatchGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsBatchGetQueryParams.prototype, "uploadProtocol", void 0);
    return FirestoreProjectsDatabasesDocumentsBatchGetQueryParams;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesDocumentsBatchGetQueryParams };
var FirestoreProjectsDatabasesDocumentsBatchGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesDocumentsBatchGetSecurityOption1, _super);
    function FirestoreProjectsDatabasesDocumentsBatchGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirestoreProjectsDatabasesDocumentsBatchGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirestoreProjectsDatabasesDocumentsBatchGetSecurityOption1.prototype, "oauth2c", void 0);
    return FirestoreProjectsDatabasesDocumentsBatchGetSecurityOption1;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesDocumentsBatchGetSecurityOption1 };
var FirestoreProjectsDatabasesDocumentsBatchGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesDocumentsBatchGetSecurityOption2, _super);
    function FirestoreProjectsDatabasesDocumentsBatchGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirestoreProjectsDatabasesDocumentsBatchGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirestoreProjectsDatabasesDocumentsBatchGetSecurityOption2.prototype, "oauth2c", void 0);
    return FirestoreProjectsDatabasesDocumentsBatchGetSecurityOption2;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesDocumentsBatchGetSecurityOption2 };
var FirestoreProjectsDatabasesDocumentsBatchGetSecurity = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesDocumentsBatchGetSecurity, _super);
    function FirestoreProjectsDatabasesDocumentsBatchGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirestoreProjectsDatabasesDocumentsBatchGetSecurityOption1)
    ], FirestoreProjectsDatabasesDocumentsBatchGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirestoreProjectsDatabasesDocumentsBatchGetSecurityOption2)
    ], FirestoreProjectsDatabasesDocumentsBatchGetSecurity.prototype, "option2", void 0);
    return FirestoreProjectsDatabasesDocumentsBatchGetSecurity;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesDocumentsBatchGetSecurity };
var FirestoreProjectsDatabasesDocumentsBatchGetRequest = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesDocumentsBatchGetRequest, _super);
    function FirestoreProjectsDatabasesDocumentsBatchGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirestoreProjectsDatabasesDocumentsBatchGetPathParams)
    ], FirestoreProjectsDatabasesDocumentsBatchGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirestoreProjectsDatabasesDocumentsBatchGetQueryParams)
    ], FirestoreProjectsDatabasesDocumentsBatchGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.BatchGetDocumentsRequest)
    ], FirestoreProjectsDatabasesDocumentsBatchGetRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirestoreProjectsDatabasesDocumentsBatchGetSecurity)
    ], FirestoreProjectsDatabasesDocumentsBatchGetRequest.prototype, "security", void 0);
    return FirestoreProjectsDatabasesDocumentsBatchGetRequest;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesDocumentsBatchGetRequest };
var FirestoreProjectsDatabasesDocumentsBatchGetResponse = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesDocumentsBatchGetResponse, _super);
    function FirestoreProjectsDatabasesDocumentsBatchGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BatchGetDocumentsResponse)
    ], FirestoreProjectsDatabasesDocumentsBatchGetResponse.prototype, "batchGetDocumentsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsBatchGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FirestoreProjectsDatabasesDocumentsBatchGetResponse.prototype, "statusCode", void 0);
    return FirestoreProjectsDatabasesDocumentsBatchGetResponse;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesDocumentsBatchGetResponse };
