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
var FirestoreProjectsDatabasesDocumentsPatchPathParams = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesDocumentsPatchPathParams, _super);
    function FirestoreProjectsDatabasesDocumentsPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsPatchPathParams.prototype, "name", void 0);
    return FirestoreProjectsDatabasesDocumentsPatchPathParams;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesDocumentsPatchPathParams };
var FirestoreProjectsDatabasesDocumentsPatchQueryParams = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesDocumentsPatchQueryParams, _super);
    function FirestoreProjectsDatabasesDocumentsPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=currentDocument.exists" }),
        __metadata("design:type", Boolean)
    ], FirestoreProjectsDatabasesDocumentsPatchQueryParams.prototype, "currentDocumentExists", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=currentDocument.updateTime" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsPatchQueryParams.prototype, "currentDocumentUpdateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsPatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mask.fieldPaths" }),
        __metadata("design:type", Array)
    ], FirestoreProjectsDatabasesDocumentsPatchQueryParams.prototype, "maskFieldPaths", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirestoreProjectsDatabasesDocumentsPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updateMask.fieldPaths" }),
        __metadata("design:type", Array)
    ], FirestoreProjectsDatabasesDocumentsPatchQueryParams.prototype, "updateMaskFieldPaths", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsPatchQueryParams.prototype, "uploadProtocol", void 0);
    return FirestoreProjectsDatabasesDocumentsPatchQueryParams;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesDocumentsPatchQueryParams };
var FirestoreProjectsDatabasesDocumentsPatchSecurityOption1 = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesDocumentsPatchSecurityOption1, _super);
    function FirestoreProjectsDatabasesDocumentsPatchSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirestoreProjectsDatabasesDocumentsPatchSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirestoreProjectsDatabasesDocumentsPatchSecurityOption1.prototype, "oauth2c", void 0);
    return FirestoreProjectsDatabasesDocumentsPatchSecurityOption1;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesDocumentsPatchSecurityOption1 };
var FirestoreProjectsDatabasesDocumentsPatchSecurityOption2 = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesDocumentsPatchSecurityOption2, _super);
    function FirestoreProjectsDatabasesDocumentsPatchSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirestoreProjectsDatabasesDocumentsPatchSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirestoreProjectsDatabasesDocumentsPatchSecurityOption2.prototype, "oauth2c", void 0);
    return FirestoreProjectsDatabasesDocumentsPatchSecurityOption2;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesDocumentsPatchSecurityOption2 };
var FirestoreProjectsDatabasesDocumentsPatchSecurity = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesDocumentsPatchSecurity, _super);
    function FirestoreProjectsDatabasesDocumentsPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirestoreProjectsDatabasesDocumentsPatchSecurityOption1)
    ], FirestoreProjectsDatabasesDocumentsPatchSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirestoreProjectsDatabasesDocumentsPatchSecurityOption2)
    ], FirestoreProjectsDatabasesDocumentsPatchSecurity.prototype, "option2", void 0);
    return FirestoreProjectsDatabasesDocumentsPatchSecurity;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesDocumentsPatchSecurity };
var FirestoreProjectsDatabasesDocumentsPatchRequest = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesDocumentsPatchRequest, _super);
    function FirestoreProjectsDatabasesDocumentsPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirestoreProjectsDatabasesDocumentsPatchPathParams)
    ], FirestoreProjectsDatabasesDocumentsPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirestoreProjectsDatabasesDocumentsPatchQueryParams)
    ], FirestoreProjectsDatabasesDocumentsPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Document)
    ], FirestoreProjectsDatabasesDocumentsPatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirestoreProjectsDatabasesDocumentsPatchSecurity)
    ], FirestoreProjectsDatabasesDocumentsPatchRequest.prototype, "security", void 0);
    return FirestoreProjectsDatabasesDocumentsPatchRequest;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesDocumentsPatchRequest };
var FirestoreProjectsDatabasesDocumentsPatchResponse = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesDocumentsPatchResponse, _super);
    function FirestoreProjectsDatabasesDocumentsPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsPatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Document)
    ], FirestoreProjectsDatabasesDocumentsPatchResponse.prototype, "document", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FirestoreProjectsDatabasesDocumentsPatchResponse.prototype, "statusCode", void 0);
    return FirestoreProjectsDatabasesDocumentsPatchResponse;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesDocumentsPatchResponse };
