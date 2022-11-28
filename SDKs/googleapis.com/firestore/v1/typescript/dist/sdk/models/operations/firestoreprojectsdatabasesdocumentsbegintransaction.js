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
var FirestoreProjectsDatabasesDocumentsBeginTransactionPathParams = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesDocumentsBeginTransactionPathParams, _super);
    function FirestoreProjectsDatabasesDocumentsBeginTransactionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=database" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsBeginTransactionPathParams.prototype, "database", void 0);
    return FirestoreProjectsDatabasesDocumentsBeginTransactionPathParams;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesDocumentsBeginTransactionPathParams };
var FirestoreProjectsDatabasesDocumentsBeginTransactionQueryParams = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesDocumentsBeginTransactionQueryParams, _super);
    function FirestoreProjectsDatabasesDocumentsBeginTransactionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsBeginTransactionQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsBeginTransactionQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsBeginTransactionQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsBeginTransactionQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsBeginTransactionQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsBeginTransactionQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsBeginTransactionQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirestoreProjectsDatabasesDocumentsBeginTransactionQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsBeginTransactionQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsBeginTransactionQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsBeginTransactionQueryParams.prototype, "uploadProtocol", void 0);
    return FirestoreProjectsDatabasesDocumentsBeginTransactionQueryParams;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesDocumentsBeginTransactionQueryParams };
var FirestoreProjectsDatabasesDocumentsBeginTransactionSecurityOption1 = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesDocumentsBeginTransactionSecurityOption1, _super);
    function FirestoreProjectsDatabasesDocumentsBeginTransactionSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirestoreProjectsDatabasesDocumentsBeginTransactionSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirestoreProjectsDatabasesDocumentsBeginTransactionSecurityOption1.prototype, "oauth2c", void 0);
    return FirestoreProjectsDatabasesDocumentsBeginTransactionSecurityOption1;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesDocumentsBeginTransactionSecurityOption1 };
var FirestoreProjectsDatabasesDocumentsBeginTransactionSecurityOption2 = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesDocumentsBeginTransactionSecurityOption2, _super);
    function FirestoreProjectsDatabasesDocumentsBeginTransactionSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirestoreProjectsDatabasesDocumentsBeginTransactionSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirestoreProjectsDatabasesDocumentsBeginTransactionSecurityOption2.prototype, "oauth2c", void 0);
    return FirestoreProjectsDatabasesDocumentsBeginTransactionSecurityOption2;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesDocumentsBeginTransactionSecurityOption2 };
var FirestoreProjectsDatabasesDocumentsBeginTransactionSecurity = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesDocumentsBeginTransactionSecurity, _super);
    function FirestoreProjectsDatabasesDocumentsBeginTransactionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirestoreProjectsDatabasesDocumentsBeginTransactionSecurityOption1)
    ], FirestoreProjectsDatabasesDocumentsBeginTransactionSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirestoreProjectsDatabasesDocumentsBeginTransactionSecurityOption2)
    ], FirestoreProjectsDatabasesDocumentsBeginTransactionSecurity.prototype, "option2", void 0);
    return FirestoreProjectsDatabasesDocumentsBeginTransactionSecurity;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesDocumentsBeginTransactionSecurity };
var FirestoreProjectsDatabasesDocumentsBeginTransactionRequest = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesDocumentsBeginTransactionRequest, _super);
    function FirestoreProjectsDatabasesDocumentsBeginTransactionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirestoreProjectsDatabasesDocumentsBeginTransactionPathParams)
    ], FirestoreProjectsDatabasesDocumentsBeginTransactionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirestoreProjectsDatabasesDocumentsBeginTransactionQueryParams)
    ], FirestoreProjectsDatabasesDocumentsBeginTransactionRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.BeginTransactionRequest)
    ], FirestoreProjectsDatabasesDocumentsBeginTransactionRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirestoreProjectsDatabasesDocumentsBeginTransactionSecurity)
    ], FirestoreProjectsDatabasesDocumentsBeginTransactionRequest.prototype, "security", void 0);
    return FirestoreProjectsDatabasesDocumentsBeginTransactionRequest;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesDocumentsBeginTransactionRequest };
var FirestoreProjectsDatabasesDocumentsBeginTransactionResponse = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesDocumentsBeginTransactionResponse, _super);
    function FirestoreProjectsDatabasesDocumentsBeginTransactionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BeginTransactionResponse)
    ], FirestoreProjectsDatabasesDocumentsBeginTransactionResponse.prototype, "beginTransactionResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsBeginTransactionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FirestoreProjectsDatabasesDocumentsBeginTransactionResponse.prototype, "statusCode", void 0);
    return FirestoreProjectsDatabasesDocumentsBeginTransactionResponse;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesDocumentsBeginTransactionResponse };
