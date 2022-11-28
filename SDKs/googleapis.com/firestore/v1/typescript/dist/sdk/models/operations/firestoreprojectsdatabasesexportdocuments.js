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
var FirestoreProjectsDatabasesExportDocumentsPathParams = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesExportDocumentsPathParams, _super);
    function FirestoreProjectsDatabasesExportDocumentsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesExportDocumentsPathParams.prototype, "name", void 0);
    return FirestoreProjectsDatabasesExportDocumentsPathParams;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesExportDocumentsPathParams };
var FirestoreProjectsDatabasesExportDocumentsQueryParams = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesExportDocumentsQueryParams, _super);
    function FirestoreProjectsDatabasesExportDocumentsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesExportDocumentsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesExportDocumentsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesExportDocumentsQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesExportDocumentsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesExportDocumentsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesExportDocumentsQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesExportDocumentsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirestoreProjectsDatabasesExportDocumentsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesExportDocumentsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesExportDocumentsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesExportDocumentsQueryParams.prototype, "uploadProtocol", void 0);
    return FirestoreProjectsDatabasesExportDocumentsQueryParams;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesExportDocumentsQueryParams };
var FirestoreProjectsDatabasesExportDocumentsSecurityOption1 = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesExportDocumentsSecurityOption1, _super);
    function FirestoreProjectsDatabasesExportDocumentsSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirestoreProjectsDatabasesExportDocumentsSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirestoreProjectsDatabasesExportDocumentsSecurityOption1.prototype, "oauth2c", void 0);
    return FirestoreProjectsDatabasesExportDocumentsSecurityOption1;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesExportDocumentsSecurityOption1 };
var FirestoreProjectsDatabasesExportDocumentsSecurityOption2 = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesExportDocumentsSecurityOption2, _super);
    function FirestoreProjectsDatabasesExportDocumentsSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirestoreProjectsDatabasesExportDocumentsSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirestoreProjectsDatabasesExportDocumentsSecurityOption2.prototype, "oauth2c", void 0);
    return FirestoreProjectsDatabasesExportDocumentsSecurityOption2;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesExportDocumentsSecurityOption2 };
var FirestoreProjectsDatabasesExportDocumentsSecurity = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesExportDocumentsSecurity, _super);
    function FirestoreProjectsDatabasesExportDocumentsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirestoreProjectsDatabasesExportDocumentsSecurityOption1)
    ], FirestoreProjectsDatabasesExportDocumentsSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirestoreProjectsDatabasesExportDocumentsSecurityOption2)
    ], FirestoreProjectsDatabasesExportDocumentsSecurity.prototype, "option2", void 0);
    return FirestoreProjectsDatabasesExportDocumentsSecurity;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesExportDocumentsSecurity };
var FirestoreProjectsDatabasesExportDocumentsRequest = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesExportDocumentsRequest, _super);
    function FirestoreProjectsDatabasesExportDocumentsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirestoreProjectsDatabasesExportDocumentsPathParams)
    ], FirestoreProjectsDatabasesExportDocumentsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirestoreProjectsDatabasesExportDocumentsQueryParams)
    ], FirestoreProjectsDatabasesExportDocumentsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleFirestoreAdminV1ExportDocumentsRequest)
    ], FirestoreProjectsDatabasesExportDocumentsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirestoreProjectsDatabasesExportDocumentsSecurity)
    ], FirestoreProjectsDatabasesExportDocumentsRequest.prototype, "security", void 0);
    return FirestoreProjectsDatabasesExportDocumentsRequest;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesExportDocumentsRequest };
var FirestoreProjectsDatabasesExportDocumentsResponse = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesExportDocumentsResponse, _super);
    function FirestoreProjectsDatabasesExportDocumentsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesExportDocumentsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleLongrunningOperation)
    ], FirestoreProjectsDatabasesExportDocumentsResponse.prototype, "googleLongrunningOperation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FirestoreProjectsDatabasesExportDocumentsResponse.prototype, "statusCode", void 0);
    return FirestoreProjectsDatabasesExportDocumentsResponse;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesExportDocumentsResponse };
