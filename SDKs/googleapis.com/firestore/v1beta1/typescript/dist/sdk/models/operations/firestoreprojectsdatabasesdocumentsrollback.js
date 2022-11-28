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
var FirestoreProjectsDatabasesDocumentsRollbackPathParams = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesDocumentsRollbackPathParams, _super);
    function FirestoreProjectsDatabasesDocumentsRollbackPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=database" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsRollbackPathParams.prototype, "database", void 0);
    return FirestoreProjectsDatabasesDocumentsRollbackPathParams;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesDocumentsRollbackPathParams };
var FirestoreProjectsDatabasesDocumentsRollbackQueryParams = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesDocumentsRollbackQueryParams, _super);
    function FirestoreProjectsDatabasesDocumentsRollbackQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsRollbackQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsRollbackQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsRollbackQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsRollbackQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsRollbackQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsRollbackQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsRollbackQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirestoreProjectsDatabasesDocumentsRollbackQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsRollbackQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsRollbackQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsRollbackQueryParams.prototype, "uploadProtocol", void 0);
    return FirestoreProjectsDatabasesDocumentsRollbackQueryParams;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesDocumentsRollbackQueryParams };
var FirestoreProjectsDatabasesDocumentsRollbackSecurityOption1 = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesDocumentsRollbackSecurityOption1, _super);
    function FirestoreProjectsDatabasesDocumentsRollbackSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirestoreProjectsDatabasesDocumentsRollbackSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirestoreProjectsDatabasesDocumentsRollbackSecurityOption1.prototype, "oauth2c", void 0);
    return FirestoreProjectsDatabasesDocumentsRollbackSecurityOption1;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesDocumentsRollbackSecurityOption1 };
var FirestoreProjectsDatabasesDocumentsRollbackSecurityOption2 = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesDocumentsRollbackSecurityOption2, _super);
    function FirestoreProjectsDatabasesDocumentsRollbackSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirestoreProjectsDatabasesDocumentsRollbackSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirestoreProjectsDatabasesDocumentsRollbackSecurityOption2.prototype, "oauth2c", void 0);
    return FirestoreProjectsDatabasesDocumentsRollbackSecurityOption2;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesDocumentsRollbackSecurityOption2 };
var FirestoreProjectsDatabasesDocumentsRollbackSecurity = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesDocumentsRollbackSecurity, _super);
    function FirestoreProjectsDatabasesDocumentsRollbackSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirestoreProjectsDatabasesDocumentsRollbackSecurityOption1)
    ], FirestoreProjectsDatabasesDocumentsRollbackSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirestoreProjectsDatabasesDocumentsRollbackSecurityOption2)
    ], FirestoreProjectsDatabasesDocumentsRollbackSecurity.prototype, "option2", void 0);
    return FirestoreProjectsDatabasesDocumentsRollbackSecurity;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesDocumentsRollbackSecurity };
var FirestoreProjectsDatabasesDocumentsRollbackRequest = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesDocumentsRollbackRequest, _super);
    function FirestoreProjectsDatabasesDocumentsRollbackRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirestoreProjectsDatabasesDocumentsRollbackPathParams)
    ], FirestoreProjectsDatabasesDocumentsRollbackRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirestoreProjectsDatabasesDocumentsRollbackQueryParams)
    ], FirestoreProjectsDatabasesDocumentsRollbackRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.RollbackRequest)
    ], FirestoreProjectsDatabasesDocumentsRollbackRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirestoreProjectsDatabasesDocumentsRollbackSecurity)
    ], FirestoreProjectsDatabasesDocumentsRollbackRequest.prototype, "security", void 0);
    return FirestoreProjectsDatabasesDocumentsRollbackRequest;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesDocumentsRollbackRequest };
var FirestoreProjectsDatabasesDocumentsRollbackResponse = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesDocumentsRollbackResponse, _super);
    function FirestoreProjectsDatabasesDocumentsRollbackResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsRollbackResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], FirestoreProjectsDatabasesDocumentsRollbackResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FirestoreProjectsDatabasesDocumentsRollbackResponse.prototype, "statusCode", void 0);
    return FirestoreProjectsDatabasesDocumentsRollbackResponse;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesDocumentsRollbackResponse };
