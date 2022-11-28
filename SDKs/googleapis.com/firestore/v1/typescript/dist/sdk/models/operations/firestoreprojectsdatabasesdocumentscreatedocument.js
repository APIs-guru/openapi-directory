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
var FirestoreProjectsDatabasesDocumentsCreateDocumentPathParams = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesDocumentsCreateDocumentPathParams, _super);
    function FirestoreProjectsDatabasesDocumentsCreateDocumentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=collectionId" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsCreateDocumentPathParams.prototype, "collectionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsCreateDocumentPathParams.prototype, "parent", void 0);
    return FirestoreProjectsDatabasesDocumentsCreateDocumentPathParams;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesDocumentsCreateDocumentPathParams };
var FirestoreProjectsDatabasesDocumentsCreateDocumentQueryParams = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesDocumentsCreateDocumentQueryParams, _super);
    function FirestoreProjectsDatabasesDocumentsCreateDocumentQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsCreateDocumentQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsCreateDocumentQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsCreateDocumentQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsCreateDocumentQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=documentId" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsCreateDocumentQueryParams.prototype, "documentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsCreateDocumentQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsCreateDocumentQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mask.fieldPaths" }),
        __metadata("design:type", Array)
    ], FirestoreProjectsDatabasesDocumentsCreateDocumentQueryParams.prototype, "maskFieldPaths", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsCreateDocumentQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirestoreProjectsDatabasesDocumentsCreateDocumentQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsCreateDocumentQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsCreateDocumentQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsCreateDocumentQueryParams.prototype, "uploadProtocol", void 0);
    return FirestoreProjectsDatabasesDocumentsCreateDocumentQueryParams;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesDocumentsCreateDocumentQueryParams };
var FirestoreProjectsDatabasesDocumentsCreateDocumentSecurityOption1 = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesDocumentsCreateDocumentSecurityOption1, _super);
    function FirestoreProjectsDatabasesDocumentsCreateDocumentSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirestoreProjectsDatabasesDocumentsCreateDocumentSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirestoreProjectsDatabasesDocumentsCreateDocumentSecurityOption1.prototype, "oauth2c", void 0);
    return FirestoreProjectsDatabasesDocumentsCreateDocumentSecurityOption1;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesDocumentsCreateDocumentSecurityOption1 };
var FirestoreProjectsDatabasesDocumentsCreateDocumentSecurityOption2 = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesDocumentsCreateDocumentSecurityOption2, _super);
    function FirestoreProjectsDatabasesDocumentsCreateDocumentSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirestoreProjectsDatabasesDocumentsCreateDocumentSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirestoreProjectsDatabasesDocumentsCreateDocumentSecurityOption2.prototype, "oauth2c", void 0);
    return FirestoreProjectsDatabasesDocumentsCreateDocumentSecurityOption2;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesDocumentsCreateDocumentSecurityOption2 };
var FirestoreProjectsDatabasesDocumentsCreateDocumentSecurity = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesDocumentsCreateDocumentSecurity, _super);
    function FirestoreProjectsDatabasesDocumentsCreateDocumentSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirestoreProjectsDatabasesDocumentsCreateDocumentSecurityOption1)
    ], FirestoreProjectsDatabasesDocumentsCreateDocumentSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirestoreProjectsDatabasesDocumentsCreateDocumentSecurityOption2)
    ], FirestoreProjectsDatabasesDocumentsCreateDocumentSecurity.prototype, "option2", void 0);
    return FirestoreProjectsDatabasesDocumentsCreateDocumentSecurity;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesDocumentsCreateDocumentSecurity };
var FirestoreProjectsDatabasesDocumentsCreateDocumentRequest = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesDocumentsCreateDocumentRequest, _super);
    function FirestoreProjectsDatabasesDocumentsCreateDocumentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirestoreProjectsDatabasesDocumentsCreateDocumentPathParams)
    ], FirestoreProjectsDatabasesDocumentsCreateDocumentRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirestoreProjectsDatabasesDocumentsCreateDocumentQueryParams)
    ], FirestoreProjectsDatabasesDocumentsCreateDocumentRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Document)
    ], FirestoreProjectsDatabasesDocumentsCreateDocumentRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirestoreProjectsDatabasesDocumentsCreateDocumentSecurity)
    ], FirestoreProjectsDatabasesDocumentsCreateDocumentRequest.prototype, "security", void 0);
    return FirestoreProjectsDatabasesDocumentsCreateDocumentRequest;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesDocumentsCreateDocumentRequest };
var FirestoreProjectsDatabasesDocumentsCreateDocumentResponse = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesDocumentsCreateDocumentResponse, _super);
    function FirestoreProjectsDatabasesDocumentsCreateDocumentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsCreateDocumentResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Document)
    ], FirestoreProjectsDatabasesDocumentsCreateDocumentResponse.prototype, "document", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FirestoreProjectsDatabasesDocumentsCreateDocumentResponse.prototype, "statusCode", void 0);
    return FirestoreProjectsDatabasesDocumentsCreateDocumentResponse;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesDocumentsCreateDocumentResponse };
