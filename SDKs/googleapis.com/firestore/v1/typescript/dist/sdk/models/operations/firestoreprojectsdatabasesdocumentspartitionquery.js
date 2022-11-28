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
var FirestoreProjectsDatabasesDocumentsPartitionQueryPathParams = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesDocumentsPartitionQueryPathParams, _super);
    function FirestoreProjectsDatabasesDocumentsPartitionQueryPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsPartitionQueryPathParams.prototype, "parent", void 0);
    return FirestoreProjectsDatabasesDocumentsPartitionQueryPathParams;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesDocumentsPartitionQueryPathParams };
var FirestoreProjectsDatabasesDocumentsPartitionQueryQueryParams = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesDocumentsPartitionQueryQueryParams, _super);
    function FirestoreProjectsDatabasesDocumentsPartitionQueryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsPartitionQueryQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsPartitionQueryQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsPartitionQueryQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsPartitionQueryQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsPartitionQueryQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsPartitionQueryQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsPartitionQueryQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirestoreProjectsDatabasesDocumentsPartitionQueryQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsPartitionQueryQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsPartitionQueryQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsPartitionQueryQueryParams.prototype, "uploadProtocol", void 0);
    return FirestoreProjectsDatabasesDocumentsPartitionQueryQueryParams;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesDocumentsPartitionQueryQueryParams };
var FirestoreProjectsDatabasesDocumentsPartitionQuerySecurityOption1 = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesDocumentsPartitionQuerySecurityOption1, _super);
    function FirestoreProjectsDatabasesDocumentsPartitionQuerySecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirestoreProjectsDatabasesDocumentsPartitionQuerySecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirestoreProjectsDatabasesDocumentsPartitionQuerySecurityOption1.prototype, "oauth2c", void 0);
    return FirestoreProjectsDatabasesDocumentsPartitionQuerySecurityOption1;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesDocumentsPartitionQuerySecurityOption1 };
var FirestoreProjectsDatabasesDocumentsPartitionQuerySecurityOption2 = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesDocumentsPartitionQuerySecurityOption2, _super);
    function FirestoreProjectsDatabasesDocumentsPartitionQuerySecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirestoreProjectsDatabasesDocumentsPartitionQuerySecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirestoreProjectsDatabasesDocumentsPartitionQuerySecurityOption2.prototype, "oauth2c", void 0);
    return FirestoreProjectsDatabasesDocumentsPartitionQuerySecurityOption2;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesDocumentsPartitionQuerySecurityOption2 };
var FirestoreProjectsDatabasesDocumentsPartitionQuerySecurity = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesDocumentsPartitionQuerySecurity, _super);
    function FirestoreProjectsDatabasesDocumentsPartitionQuerySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirestoreProjectsDatabasesDocumentsPartitionQuerySecurityOption1)
    ], FirestoreProjectsDatabasesDocumentsPartitionQuerySecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirestoreProjectsDatabasesDocumentsPartitionQuerySecurityOption2)
    ], FirestoreProjectsDatabasesDocumentsPartitionQuerySecurity.prototype, "option2", void 0);
    return FirestoreProjectsDatabasesDocumentsPartitionQuerySecurity;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesDocumentsPartitionQuerySecurity };
var FirestoreProjectsDatabasesDocumentsPartitionQueryRequest = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesDocumentsPartitionQueryRequest, _super);
    function FirestoreProjectsDatabasesDocumentsPartitionQueryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirestoreProjectsDatabasesDocumentsPartitionQueryPathParams)
    ], FirestoreProjectsDatabasesDocumentsPartitionQueryRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirestoreProjectsDatabasesDocumentsPartitionQueryQueryParams)
    ], FirestoreProjectsDatabasesDocumentsPartitionQueryRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.PartitionQueryRequest)
    ], FirestoreProjectsDatabasesDocumentsPartitionQueryRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirestoreProjectsDatabasesDocumentsPartitionQuerySecurity)
    ], FirestoreProjectsDatabasesDocumentsPartitionQueryRequest.prototype, "security", void 0);
    return FirestoreProjectsDatabasesDocumentsPartitionQueryRequest;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesDocumentsPartitionQueryRequest };
var FirestoreProjectsDatabasesDocumentsPartitionQueryResponse = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesDocumentsPartitionQueryResponse, _super);
    function FirestoreProjectsDatabasesDocumentsPartitionQueryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsPartitionQueryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PartitionQueryResponse)
    ], FirestoreProjectsDatabasesDocumentsPartitionQueryResponse.prototype, "partitionQueryResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FirestoreProjectsDatabasesDocumentsPartitionQueryResponse.prototype, "statusCode", void 0);
    return FirestoreProjectsDatabasesDocumentsPartitionQueryResponse;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesDocumentsPartitionQueryResponse };
