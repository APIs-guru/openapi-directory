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
var FirestoreProjectsDatabasesImportDocumentsPathParams = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesImportDocumentsPathParams, _super);
    function FirestoreProjectsDatabasesImportDocumentsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesImportDocumentsPathParams.prototype, "name", void 0);
    return FirestoreProjectsDatabasesImportDocumentsPathParams;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesImportDocumentsPathParams };
var FirestoreProjectsDatabasesImportDocumentsQueryParams = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesImportDocumentsQueryParams, _super);
    function FirestoreProjectsDatabasesImportDocumentsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesImportDocumentsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesImportDocumentsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesImportDocumentsQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesImportDocumentsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesImportDocumentsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesImportDocumentsQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesImportDocumentsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirestoreProjectsDatabasesImportDocumentsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesImportDocumentsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesImportDocumentsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesImportDocumentsQueryParams.prototype, "uploadProtocol", void 0);
    return FirestoreProjectsDatabasesImportDocumentsQueryParams;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesImportDocumentsQueryParams };
var FirestoreProjectsDatabasesImportDocumentsSecurityOption1 = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesImportDocumentsSecurityOption1, _super);
    function FirestoreProjectsDatabasesImportDocumentsSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirestoreProjectsDatabasesImportDocumentsSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirestoreProjectsDatabasesImportDocumentsSecurityOption1.prototype, "oauth2c", void 0);
    return FirestoreProjectsDatabasesImportDocumentsSecurityOption1;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesImportDocumentsSecurityOption1 };
var FirestoreProjectsDatabasesImportDocumentsSecurityOption2 = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesImportDocumentsSecurityOption2, _super);
    function FirestoreProjectsDatabasesImportDocumentsSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirestoreProjectsDatabasesImportDocumentsSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirestoreProjectsDatabasesImportDocumentsSecurityOption2.prototype, "oauth2c", void 0);
    return FirestoreProjectsDatabasesImportDocumentsSecurityOption2;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesImportDocumentsSecurityOption2 };
var FirestoreProjectsDatabasesImportDocumentsSecurity = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesImportDocumentsSecurity, _super);
    function FirestoreProjectsDatabasesImportDocumentsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirestoreProjectsDatabasesImportDocumentsSecurityOption1)
    ], FirestoreProjectsDatabasesImportDocumentsSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirestoreProjectsDatabasesImportDocumentsSecurityOption2)
    ], FirestoreProjectsDatabasesImportDocumentsSecurity.prototype, "option2", void 0);
    return FirestoreProjectsDatabasesImportDocumentsSecurity;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesImportDocumentsSecurity };
var FirestoreProjectsDatabasesImportDocumentsRequest = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesImportDocumentsRequest, _super);
    function FirestoreProjectsDatabasesImportDocumentsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirestoreProjectsDatabasesImportDocumentsPathParams)
    ], FirestoreProjectsDatabasesImportDocumentsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirestoreProjectsDatabasesImportDocumentsQueryParams)
    ], FirestoreProjectsDatabasesImportDocumentsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleFirestoreAdminV1ImportDocumentsRequest)
    ], FirestoreProjectsDatabasesImportDocumentsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirestoreProjectsDatabasesImportDocumentsSecurity)
    ], FirestoreProjectsDatabasesImportDocumentsRequest.prototype, "security", void 0);
    return FirestoreProjectsDatabasesImportDocumentsRequest;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesImportDocumentsRequest };
var FirestoreProjectsDatabasesImportDocumentsResponse = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesImportDocumentsResponse, _super);
    function FirestoreProjectsDatabasesImportDocumentsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesImportDocumentsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleLongrunningOperation)
    ], FirestoreProjectsDatabasesImportDocumentsResponse.prototype, "googleLongrunningOperation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FirestoreProjectsDatabasesImportDocumentsResponse.prototype, "statusCode", void 0);
    return FirestoreProjectsDatabasesImportDocumentsResponse;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesImportDocumentsResponse };
