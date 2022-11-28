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
var FirestoreProjectsDatabasesIndexesDeletePathParams = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesIndexesDeletePathParams, _super);
    function FirestoreProjectsDatabasesIndexesDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesIndexesDeletePathParams.prototype, "name", void 0);
    return FirestoreProjectsDatabasesIndexesDeletePathParams;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesIndexesDeletePathParams };
var FirestoreProjectsDatabasesIndexesDeleteQueryParams = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesIndexesDeleteQueryParams, _super);
    function FirestoreProjectsDatabasesIndexesDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesIndexesDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesIndexesDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesIndexesDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesIndexesDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=currentDocument.exists" }),
        __metadata("design:type", Boolean)
    ], FirestoreProjectsDatabasesIndexesDeleteQueryParams.prototype, "currentDocumentExists", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=currentDocument.updateTime" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesIndexesDeleteQueryParams.prototype, "currentDocumentUpdateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesIndexesDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesIndexesDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesIndexesDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirestoreProjectsDatabasesIndexesDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesIndexesDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesIndexesDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesIndexesDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return FirestoreProjectsDatabasesIndexesDeleteQueryParams;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesIndexesDeleteQueryParams };
var FirestoreProjectsDatabasesIndexesDeleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesIndexesDeleteSecurityOption1, _super);
    function FirestoreProjectsDatabasesIndexesDeleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirestoreProjectsDatabasesIndexesDeleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirestoreProjectsDatabasesIndexesDeleteSecurityOption1.prototype, "oauth2c", void 0);
    return FirestoreProjectsDatabasesIndexesDeleteSecurityOption1;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesIndexesDeleteSecurityOption1 };
var FirestoreProjectsDatabasesIndexesDeleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesIndexesDeleteSecurityOption2, _super);
    function FirestoreProjectsDatabasesIndexesDeleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirestoreProjectsDatabasesIndexesDeleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirestoreProjectsDatabasesIndexesDeleteSecurityOption2.prototype, "oauth2c", void 0);
    return FirestoreProjectsDatabasesIndexesDeleteSecurityOption2;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesIndexesDeleteSecurityOption2 };
var FirestoreProjectsDatabasesIndexesDeleteSecurity = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesIndexesDeleteSecurity, _super);
    function FirestoreProjectsDatabasesIndexesDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirestoreProjectsDatabasesIndexesDeleteSecurityOption1)
    ], FirestoreProjectsDatabasesIndexesDeleteSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirestoreProjectsDatabasesIndexesDeleteSecurityOption2)
    ], FirestoreProjectsDatabasesIndexesDeleteSecurity.prototype, "option2", void 0);
    return FirestoreProjectsDatabasesIndexesDeleteSecurity;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesIndexesDeleteSecurity };
var FirestoreProjectsDatabasesIndexesDeleteRequest = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesIndexesDeleteRequest, _super);
    function FirestoreProjectsDatabasesIndexesDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirestoreProjectsDatabasesIndexesDeletePathParams)
    ], FirestoreProjectsDatabasesIndexesDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirestoreProjectsDatabasesIndexesDeleteQueryParams)
    ], FirestoreProjectsDatabasesIndexesDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirestoreProjectsDatabasesIndexesDeleteSecurity)
    ], FirestoreProjectsDatabasesIndexesDeleteRequest.prototype, "security", void 0);
    return FirestoreProjectsDatabasesIndexesDeleteRequest;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesIndexesDeleteRequest };
var FirestoreProjectsDatabasesIndexesDeleteResponse = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesIndexesDeleteResponse, _super);
    function FirestoreProjectsDatabasesIndexesDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesIndexesDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], FirestoreProjectsDatabasesIndexesDeleteResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FirestoreProjectsDatabasesIndexesDeleteResponse.prototype, "statusCode", void 0);
    return FirestoreProjectsDatabasesIndexesDeleteResponse;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesIndexesDeleteResponse };
