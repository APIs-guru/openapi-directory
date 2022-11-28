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
var FirestoreProjectsDatabasesDocumentsRunAggregationQueryPathParams = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesDocumentsRunAggregationQueryPathParams, _super);
    function FirestoreProjectsDatabasesDocumentsRunAggregationQueryPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsRunAggregationQueryPathParams.prototype, "parent", void 0);
    return FirestoreProjectsDatabasesDocumentsRunAggregationQueryPathParams;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesDocumentsRunAggregationQueryPathParams };
var FirestoreProjectsDatabasesDocumentsRunAggregationQueryQueryParams = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesDocumentsRunAggregationQueryQueryParams, _super);
    function FirestoreProjectsDatabasesDocumentsRunAggregationQueryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsRunAggregationQueryQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsRunAggregationQueryQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsRunAggregationQueryQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsRunAggregationQueryQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsRunAggregationQueryQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsRunAggregationQueryQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsRunAggregationQueryQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirestoreProjectsDatabasesDocumentsRunAggregationQueryQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsRunAggregationQueryQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsRunAggregationQueryQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsRunAggregationQueryQueryParams.prototype, "uploadProtocol", void 0);
    return FirestoreProjectsDatabasesDocumentsRunAggregationQueryQueryParams;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesDocumentsRunAggregationQueryQueryParams };
var FirestoreProjectsDatabasesDocumentsRunAggregationQuerySecurityOption1 = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesDocumentsRunAggregationQuerySecurityOption1, _super);
    function FirestoreProjectsDatabasesDocumentsRunAggregationQuerySecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirestoreProjectsDatabasesDocumentsRunAggregationQuerySecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirestoreProjectsDatabasesDocumentsRunAggregationQuerySecurityOption1.prototype, "oauth2c", void 0);
    return FirestoreProjectsDatabasesDocumentsRunAggregationQuerySecurityOption1;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesDocumentsRunAggregationQuerySecurityOption1 };
var FirestoreProjectsDatabasesDocumentsRunAggregationQuerySecurityOption2 = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesDocumentsRunAggregationQuerySecurityOption2, _super);
    function FirestoreProjectsDatabasesDocumentsRunAggregationQuerySecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirestoreProjectsDatabasesDocumentsRunAggregationQuerySecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirestoreProjectsDatabasesDocumentsRunAggregationQuerySecurityOption2.prototype, "oauth2c", void 0);
    return FirestoreProjectsDatabasesDocumentsRunAggregationQuerySecurityOption2;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesDocumentsRunAggregationQuerySecurityOption2 };
var FirestoreProjectsDatabasesDocumentsRunAggregationQuerySecurity = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesDocumentsRunAggregationQuerySecurity, _super);
    function FirestoreProjectsDatabasesDocumentsRunAggregationQuerySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirestoreProjectsDatabasesDocumentsRunAggregationQuerySecurityOption1)
    ], FirestoreProjectsDatabasesDocumentsRunAggregationQuerySecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirestoreProjectsDatabasesDocumentsRunAggregationQuerySecurityOption2)
    ], FirestoreProjectsDatabasesDocumentsRunAggregationQuerySecurity.prototype, "option2", void 0);
    return FirestoreProjectsDatabasesDocumentsRunAggregationQuerySecurity;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesDocumentsRunAggregationQuerySecurity };
var FirestoreProjectsDatabasesDocumentsRunAggregationQueryRequest = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesDocumentsRunAggregationQueryRequest, _super);
    function FirestoreProjectsDatabasesDocumentsRunAggregationQueryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirestoreProjectsDatabasesDocumentsRunAggregationQueryPathParams)
    ], FirestoreProjectsDatabasesDocumentsRunAggregationQueryRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirestoreProjectsDatabasesDocumentsRunAggregationQueryQueryParams)
    ], FirestoreProjectsDatabasesDocumentsRunAggregationQueryRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.RunAggregationQueryRequest)
    ], FirestoreProjectsDatabasesDocumentsRunAggregationQueryRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirestoreProjectsDatabasesDocumentsRunAggregationQuerySecurity)
    ], FirestoreProjectsDatabasesDocumentsRunAggregationQueryRequest.prototype, "security", void 0);
    return FirestoreProjectsDatabasesDocumentsRunAggregationQueryRequest;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesDocumentsRunAggregationQueryRequest };
var FirestoreProjectsDatabasesDocumentsRunAggregationQueryResponse = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesDocumentsRunAggregationQueryResponse, _super);
    function FirestoreProjectsDatabasesDocumentsRunAggregationQueryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsRunAggregationQueryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.RunAggregationQueryResponse)
    ], FirestoreProjectsDatabasesDocumentsRunAggregationQueryResponse.prototype, "runAggregationQueryResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FirestoreProjectsDatabasesDocumentsRunAggregationQueryResponse.prototype, "statusCode", void 0);
    return FirestoreProjectsDatabasesDocumentsRunAggregationQueryResponse;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesDocumentsRunAggregationQueryResponse };
