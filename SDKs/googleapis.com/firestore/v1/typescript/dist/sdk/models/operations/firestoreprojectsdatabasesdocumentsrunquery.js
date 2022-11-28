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
var FirestoreProjectsDatabasesDocumentsRunQueryPathParams = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesDocumentsRunQueryPathParams, _super);
    function FirestoreProjectsDatabasesDocumentsRunQueryPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsRunQueryPathParams.prototype, "parent", void 0);
    return FirestoreProjectsDatabasesDocumentsRunQueryPathParams;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesDocumentsRunQueryPathParams };
var FirestoreProjectsDatabasesDocumentsRunQueryQueryParams = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesDocumentsRunQueryQueryParams, _super);
    function FirestoreProjectsDatabasesDocumentsRunQueryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsRunQueryQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsRunQueryQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsRunQueryQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsRunQueryQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsRunQueryQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsRunQueryQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsRunQueryQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirestoreProjectsDatabasesDocumentsRunQueryQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsRunQueryQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsRunQueryQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsRunQueryQueryParams.prototype, "uploadProtocol", void 0);
    return FirestoreProjectsDatabasesDocumentsRunQueryQueryParams;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesDocumentsRunQueryQueryParams };
var FirestoreProjectsDatabasesDocumentsRunQuerySecurityOption1 = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesDocumentsRunQuerySecurityOption1, _super);
    function FirestoreProjectsDatabasesDocumentsRunQuerySecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirestoreProjectsDatabasesDocumentsRunQuerySecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirestoreProjectsDatabasesDocumentsRunQuerySecurityOption1.prototype, "oauth2c", void 0);
    return FirestoreProjectsDatabasesDocumentsRunQuerySecurityOption1;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesDocumentsRunQuerySecurityOption1 };
var FirestoreProjectsDatabasesDocumentsRunQuerySecurityOption2 = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesDocumentsRunQuerySecurityOption2, _super);
    function FirestoreProjectsDatabasesDocumentsRunQuerySecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirestoreProjectsDatabasesDocumentsRunQuerySecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirestoreProjectsDatabasesDocumentsRunQuerySecurityOption2.prototype, "oauth2c", void 0);
    return FirestoreProjectsDatabasesDocumentsRunQuerySecurityOption2;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesDocumentsRunQuerySecurityOption2 };
var FirestoreProjectsDatabasesDocumentsRunQuerySecurity = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesDocumentsRunQuerySecurity, _super);
    function FirestoreProjectsDatabasesDocumentsRunQuerySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirestoreProjectsDatabasesDocumentsRunQuerySecurityOption1)
    ], FirestoreProjectsDatabasesDocumentsRunQuerySecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirestoreProjectsDatabasesDocumentsRunQuerySecurityOption2)
    ], FirestoreProjectsDatabasesDocumentsRunQuerySecurity.prototype, "option2", void 0);
    return FirestoreProjectsDatabasesDocumentsRunQuerySecurity;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesDocumentsRunQuerySecurity };
var FirestoreProjectsDatabasesDocumentsRunQueryRequest = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesDocumentsRunQueryRequest, _super);
    function FirestoreProjectsDatabasesDocumentsRunQueryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirestoreProjectsDatabasesDocumentsRunQueryPathParams)
    ], FirestoreProjectsDatabasesDocumentsRunQueryRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirestoreProjectsDatabasesDocumentsRunQueryQueryParams)
    ], FirestoreProjectsDatabasesDocumentsRunQueryRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.RunQueryRequest)
    ], FirestoreProjectsDatabasesDocumentsRunQueryRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirestoreProjectsDatabasesDocumentsRunQuerySecurity)
    ], FirestoreProjectsDatabasesDocumentsRunQueryRequest.prototype, "security", void 0);
    return FirestoreProjectsDatabasesDocumentsRunQueryRequest;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesDocumentsRunQueryRequest };
var FirestoreProjectsDatabasesDocumentsRunQueryResponse = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesDocumentsRunQueryResponse, _super);
    function FirestoreProjectsDatabasesDocumentsRunQueryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsRunQueryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.RunQueryResponse)
    ], FirestoreProjectsDatabasesDocumentsRunQueryResponse.prototype, "runQueryResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FirestoreProjectsDatabasesDocumentsRunQueryResponse.prototype, "statusCode", void 0);
    return FirestoreProjectsDatabasesDocumentsRunQueryResponse;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesDocumentsRunQueryResponse };
