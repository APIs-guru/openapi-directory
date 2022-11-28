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
var FirestoreProjectsDatabasesDocumentsListCollectionIdsPathParams = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesDocumentsListCollectionIdsPathParams, _super);
    function FirestoreProjectsDatabasesDocumentsListCollectionIdsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsListCollectionIdsPathParams.prototype, "parent", void 0);
    return FirestoreProjectsDatabasesDocumentsListCollectionIdsPathParams;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesDocumentsListCollectionIdsPathParams };
var FirestoreProjectsDatabasesDocumentsListCollectionIdsQueryParams = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesDocumentsListCollectionIdsQueryParams, _super);
    function FirestoreProjectsDatabasesDocumentsListCollectionIdsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsListCollectionIdsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsListCollectionIdsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsListCollectionIdsQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsListCollectionIdsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsListCollectionIdsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsListCollectionIdsQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsListCollectionIdsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirestoreProjectsDatabasesDocumentsListCollectionIdsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsListCollectionIdsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsListCollectionIdsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsListCollectionIdsQueryParams.prototype, "uploadProtocol", void 0);
    return FirestoreProjectsDatabasesDocumentsListCollectionIdsQueryParams;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesDocumentsListCollectionIdsQueryParams };
var FirestoreProjectsDatabasesDocumentsListCollectionIdsSecurityOption1 = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesDocumentsListCollectionIdsSecurityOption1, _super);
    function FirestoreProjectsDatabasesDocumentsListCollectionIdsSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirestoreProjectsDatabasesDocumentsListCollectionIdsSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirestoreProjectsDatabasesDocumentsListCollectionIdsSecurityOption1.prototype, "oauth2c", void 0);
    return FirestoreProjectsDatabasesDocumentsListCollectionIdsSecurityOption1;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesDocumentsListCollectionIdsSecurityOption1 };
var FirestoreProjectsDatabasesDocumentsListCollectionIdsSecurityOption2 = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesDocumentsListCollectionIdsSecurityOption2, _super);
    function FirestoreProjectsDatabasesDocumentsListCollectionIdsSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirestoreProjectsDatabasesDocumentsListCollectionIdsSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirestoreProjectsDatabasesDocumentsListCollectionIdsSecurityOption2.prototype, "oauth2c", void 0);
    return FirestoreProjectsDatabasesDocumentsListCollectionIdsSecurityOption2;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesDocumentsListCollectionIdsSecurityOption2 };
var FirestoreProjectsDatabasesDocumentsListCollectionIdsSecurity = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesDocumentsListCollectionIdsSecurity, _super);
    function FirestoreProjectsDatabasesDocumentsListCollectionIdsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirestoreProjectsDatabasesDocumentsListCollectionIdsSecurityOption1)
    ], FirestoreProjectsDatabasesDocumentsListCollectionIdsSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirestoreProjectsDatabasesDocumentsListCollectionIdsSecurityOption2)
    ], FirestoreProjectsDatabasesDocumentsListCollectionIdsSecurity.prototype, "option2", void 0);
    return FirestoreProjectsDatabasesDocumentsListCollectionIdsSecurity;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesDocumentsListCollectionIdsSecurity };
var FirestoreProjectsDatabasesDocumentsListCollectionIdsRequest = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesDocumentsListCollectionIdsRequest, _super);
    function FirestoreProjectsDatabasesDocumentsListCollectionIdsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirestoreProjectsDatabasesDocumentsListCollectionIdsPathParams)
    ], FirestoreProjectsDatabasesDocumentsListCollectionIdsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirestoreProjectsDatabasesDocumentsListCollectionIdsQueryParams)
    ], FirestoreProjectsDatabasesDocumentsListCollectionIdsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ListCollectionIdsRequest)
    ], FirestoreProjectsDatabasesDocumentsListCollectionIdsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirestoreProjectsDatabasesDocumentsListCollectionIdsSecurity)
    ], FirestoreProjectsDatabasesDocumentsListCollectionIdsRequest.prototype, "security", void 0);
    return FirestoreProjectsDatabasesDocumentsListCollectionIdsRequest;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesDocumentsListCollectionIdsRequest };
var FirestoreProjectsDatabasesDocumentsListCollectionIdsResponse = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesDocumentsListCollectionIdsResponse, _super);
    function FirestoreProjectsDatabasesDocumentsListCollectionIdsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsListCollectionIdsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListCollectionIdsResponse)
    ], FirestoreProjectsDatabasesDocumentsListCollectionIdsResponse.prototype, "listCollectionIdsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FirestoreProjectsDatabasesDocumentsListCollectionIdsResponse.prototype, "statusCode", void 0);
    return FirestoreProjectsDatabasesDocumentsListCollectionIdsResponse;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesDocumentsListCollectionIdsResponse };
