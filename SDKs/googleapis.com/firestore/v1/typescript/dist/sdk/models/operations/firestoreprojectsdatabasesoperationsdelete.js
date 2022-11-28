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
var FirestoreProjectsDatabasesOperationsDeletePathParams = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesOperationsDeletePathParams, _super);
    function FirestoreProjectsDatabasesOperationsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesOperationsDeletePathParams.prototype, "name", void 0);
    return FirestoreProjectsDatabasesOperationsDeletePathParams;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesOperationsDeletePathParams };
var FirestoreProjectsDatabasesOperationsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesOperationsDeleteQueryParams, _super);
    function FirestoreProjectsDatabasesOperationsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesOperationsDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesOperationsDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesOperationsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesOperationsDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=currentDocument.exists" }),
        __metadata("design:type", Boolean)
    ], FirestoreProjectsDatabasesOperationsDeleteQueryParams.prototype, "currentDocumentExists", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=currentDocument.updateTime" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesOperationsDeleteQueryParams.prototype, "currentDocumentUpdateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesOperationsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesOperationsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesOperationsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirestoreProjectsDatabasesOperationsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesOperationsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesOperationsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesOperationsDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return FirestoreProjectsDatabasesOperationsDeleteQueryParams;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesOperationsDeleteQueryParams };
var FirestoreProjectsDatabasesOperationsDeleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesOperationsDeleteSecurityOption1, _super);
    function FirestoreProjectsDatabasesOperationsDeleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirestoreProjectsDatabasesOperationsDeleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirestoreProjectsDatabasesOperationsDeleteSecurityOption1.prototype, "oauth2c", void 0);
    return FirestoreProjectsDatabasesOperationsDeleteSecurityOption1;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesOperationsDeleteSecurityOption1 };
var FirestoreProjectsDatabasesOperationsDeleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesOperationsDeleteSecurityOption2, _super);
    function FirestoreProjectsDatabasesOperationsDeleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirestoreProjectsDatabasesOperationsDeleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirestoreProjectsDatabasesOperationsDeleteSecurityOption2.prototype, "oauth2c", void 0);
    return FirestoreProjectsDatabasesOperationsDeleteSecurityOption2;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesOperationsDeleteSecurityOption2 };
var FirestoreProjectsDatabasesOperationsDeleteSecurity = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesOperationsDeleteSecurity, _super);
    function FirestoreProjectsDatabasesOperationsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirestoreProjectsDatabasesOperationsDeleteSecurityOption1)
    ], FirestoreProjectsDatabasesOperationsDeleteSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirestoreProjectsDatabasesOperationsDeleteSecurityOption2)
    ], FirestoreProjectsDatabasesOperationsDeleteSecurity.prototype, "option2", void 0);
    return FirestoreProjectsDatabasesOperationsDeleteSecurity;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesOperationsDeleteSecurity };
var FirestoreProjectsDatabasesOperationsDeleteRequest = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesOperationsDeleteRequest, _super);
    function FirestoreProjectsDatabasesOperationsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirestoreProjectsDatabasesOperationsDeletePathParams)
    ], FirestoreProjectsDatabasesOperationsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirestoreProjectsDatabasesOperationsDeleteQueryParams)
    ], FirestoreProjectsDatabasesOperationsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirestoreProjectsDatabasesOperationsDeleteSecurity)
    ], FirestoreProjectsDatabasesOperationsDeleteRequest.prototype, "security", void 0);
    return FirestoreProjectsDatabasesOperationsDeleteRequest;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesOperationsDeleteRequest };
var FirestoreProjectsDatabasesOperationsDeleteResponse = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesOperationsDeleteResponse, _super);
    function FirestoreProjectsDatabasesOperationsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesOperationsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], FirestoreProjectsDatabasesOperationsDeleteResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FirestoreProjectsDatabasesOperationsDeleteResponse.prototype, "statusCode", void 0);
    return FirestoreProjectsDatabasesOperationsDeleteResponse;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesOperationsDeleteResponse };
