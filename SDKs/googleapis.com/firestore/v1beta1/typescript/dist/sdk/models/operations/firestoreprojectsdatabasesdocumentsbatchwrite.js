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
var FirestoreProjectsDatabasesDocumentsBatchWritePathParams = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesDocumentsBatchWritePathParams, _super);
    function FirestoreProjectsDatabasesDocumentsBatchWritePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=database" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsBatchWritePathParams.prototype, "database", void 0);
    return FirestoreProjectsDatabasesDocumentsBatchWritePathParams;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesDocumentsBatchWritePathParams };
var FirestoreProjectsDatabasesDocumentsBatchWriteQueryParams = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesDocumentsBatchWriteQueryParams, _super);
    function FirestoreProjectsDatabasesDocumentsBatchWriteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsBatchWriteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsBatchWriteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsBatchWriteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsBatchWriteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsBatchWriteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsBatchWriteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsBatchWriteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirestoreProjectsDatabasesDocumentsBatchWriteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsBatchWriteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsBatchWriteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsBatchWriteQueryParams.prototype, "uploadProtocol", void 0);
    return FirestoreProjectsDatabasesDocumentsBatchWriteQueryParams;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesDocumentsBatchWriteQueryParams };
var FirestoreProjectsDatabasesDocumentsBatchWriteSecurityOption1 = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesDocumentsBatchWriteSecurityOption1, _super);
    function FirestoreProjectsDatabasesDocumentsBatchWriteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirestoreProjectsDatabasesDocumentsBatchWriteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirestoreProjectsDatabasesDocumentsBatchWriteSecurityOption1.prototype, "oauth2c", void 0);
    return FirestoreProjectsDatabasesDocumentsBatchWriteSecurityOption1;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesDocumentsBatchWriteSecurityOption1 };
var FirestoreProjectsDatabasesDocumentsBatchWriteSecurityOption2 = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesDocumentsBatchWriteSecurityOption2, _super);
    function FirestoreProjectsDatabasesDocumentsBatchWriteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirestoreProjectsDatabasesDocumentsBatchWriteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirestoreProjectsDatabasesDocumentsBatchWriteSecurityOption2.prototype, "oauth2c", void 0);
    return FirestoreProjectsDatabasesDocumentsBatchWriteSecurityOption2;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesDocumentsBatchWriteSecurityOption2 };
var FirestoreProjectsDatabasesDocumentsBatchWriteSecurity = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesDocumentsBatchWriteSecurity, _super);
    function FirestoreProjectsDatabasesDocumentsBatchWriteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirestoreProjectsDatabasesDocumentsBatchWriteSecurityOption1)
    ], FirestoreProjectsDatabasesDocumentsBatchWriteSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirestoreProjectsDatabasesDocumentsBatchWriteSecurityOption2)
    ], FirestoreProjectsDatabasesDocumentsBatchWriteSecurity.prototype, "option2", void 0);
    return FirestoreProjectsDatabasesDocumentsBatchWriteSecurity;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesDocumentsBatchWriteSecurity };
var FirestoreProjectsDatabasesDocumentsBatchWriteRequest = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesDocumentsBatchWriteRequest, _super);
    function FirestoreProjectsDatabasesDocumentsBatchWriteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirestoreProjectsDatabasesDocumentsBatchWritePathParams)
    ], FirestoreProjectsDatabasesDocumentsBatchWriteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirestoreProjectsDatabasesDocumentsBatchWriteQueryParams)
    ], FirestoreProjectsDatabasesDocumentsBatchWriteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.BatchWriteRequest)
    ], FirestoreProjectsDatabasesDocumentsBatchWriteRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirestoreProjectsDatabasesDocumentsBatchWriteSecurity)
    ], FirestoreProjectsDatabasesDocumentsBatchWriteRequest.prototype, "security", void 0);
    return FirestoreProjectsDatabasesDocumentsBatchWriteRequest;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesDocumentsBatchWriteRequest };
var FirestoreProjectsDatabasesDocumentsBatchWriteResponse = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesDocumentsBatchWriteResponse, _super);
    function FirestoreProjectsDatabasesDocumentsBatchWriteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BatchWriteResponse)
    ], FirestoreProjectsDatabasesDocumentsBatchWriteResponse.prototype, "batchWriteResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsBatchWriteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FirestoreProjectsDatabasesDocumentsBatchWriteResponse.prototype, "statusCode", void 0);
    return FirestoreProjectsDatabasesDocumentsBatchWriteResponse;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesDocumentsBatchWriteResponse };
