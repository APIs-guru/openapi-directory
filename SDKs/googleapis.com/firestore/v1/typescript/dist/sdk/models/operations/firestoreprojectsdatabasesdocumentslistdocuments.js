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
var FirestoreProjectsDatabasesDocumentsListDocumentsPathParams = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesDocumentsListDocumentsPathParams, _super);
    function FirestoreProjectsDatabasesDocumentsListDocumentsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=collectionId" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsListDocumentsPathParams.prototype, "collectionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsListDocumentsPathParams.prototype, "parent", void 0);
    return FirestoreProjectsDatabasesDocumentsListDocumentsPathParams;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesDocumentsListDocumentsPathParams };
var FirestoreProjectsDatabasesDocumentsListDocumentsQueryParams = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesDocumentsListDocumentsQueryParams, _super);
    function FirestoreProjectsDatabasesDocumentsListDocumentsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsListDocumentsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsListDocumentsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsListDocumentsQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsListDocumentsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsListDocumentsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsListDocumentsQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mask.fieldPaths" }),
        __metadata("design:type", Array)
    ], FirestoreProjectsDatabasesDocumentsListDocumentsQueryParams.prototype, "maskFieldPaths", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsListDocumentsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsListDocumentsQueryParams.prototype, "orderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], FirestoreProjectsDatabasesDocumentsListDocumentsQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsListDocumentsQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirestoreProjectsDatabasesDocumentsListDocumentsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsListDocumentsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=readTime" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsListDocumentsQueryParams.prototype, "readTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=showMissing" }),
        __metadata("design:type", Boolean)
    ], FirestoreProjectsDatabasesDocumentsListDocumentsQueryParams.prototype, "showMissing", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=transaction" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsListDocumentsQueryParams.prototype, "transaction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsListDocumentsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsListDocumentsQueryParams.prototype, "uploadProtocol", void 0);
    return FirestoreProjectsDatabasesDocumentsListDocumentsQueryParams;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesDocumentsListDocumentsQueryParams };
var FirestoreProjectsDatabasesDocumentsListDocumentsSecurityOption1 = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesDocumentsListDocumentsSecurityOption1, _super);
    function FirestoreProjectsDatabasesDocumentsListDocumentsSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirestoreProjectsDatabasesDocumentsListDocumentsSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirestoreProjectsDatabasesDocumentsListDocumentsSecurityOption1.prototype, "oauth2c", void 0);
    return FirestoreProjectsDatabasesDocumentsListDocumentsSecurityOption1;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesDocumentsListDocumentsSecurityOption1 };
var FirestoreProjectsDatabasesDocumentsListDocumentsSecurityOption2 = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesDocumentsListDocumentsSecurityOption2, _super);
    function FirestoreProjectsDatabasesDocumentsListDocumentsSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirestoreProjectsDatabasesDocumentsListDocumentsSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirestoreProjectsDatabasesDocumentsListDocumentsSecurityOption2.prototype, "oauth2c", void 0);
    return FirestoreProjectsDatabasesDocumentsListDocumentsSecurityOption2;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesDocumentsListDocumentsSecurityOption2 };
var FirestoreProjectsDatabasesDocumentsListDocumentsSecurity = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesDocumentsListDocumentsSecurity, _super);
    function FirestoreProjectsDatabasesDocumentsListDocumentsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirestoreProjectsDatabasesDocumentsListDocumentsSecurityOption1)
    ], FirestoreProjectsDatabasesDocumentsListDocumentsSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirestoreProjectsDatabasesDocumentsListDocumentsSecurityOption2)
    ], FirestoreProjectsDatabasesDocumentsListDocumentsSecurity.prototype, "option2", void 0);
    return FirestoreProjectsDatabasesDocumentsListDocumentsSecurity;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesDocumentsListDocumentsSecurity };
var FirestoreProjectsDatabasesDocumentsListDocumentsRequest = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesDocumentsListDocumentsRequest, _super);
    function FirestoreProjectsDatabasesDocumentsListDocumentsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirestoreProjectsDatabasesDocumentsListDocumentsPathParams)
    ], FirestoreProjectsDatabasesDocumentsListDocumentsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirestoreProjectsDatabasesDocumentsListDocumentsQueryParams)
    ], FirestoreProjectsDatabasesDocumentsListDocumentsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirestoreProjectsDatabasesDocumentsListDocumentsSecurity)
    ], FirestoreProjectsDatabasesDocumentsListDocumentsRequest.prototype, "security", void 0);
    return FirestoreProjectsDatabasesDocumentsListDocumentsRequest;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesDocumentsListDocumentsRequest };
var FirestoreProjectsDatabasesDocumentsListDocumentsResponse = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesDocumentsListDocumentsResponse, _super);
    function FirestoreProjectsDatabasesDocumentsListDocumentsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsListDocumentsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListDocumentsResponse)
    ], FirestoreProjectsDatabasesDocumentsListDocumentsResponse.prototype, "listDocumentsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FirestoreProjectsDatabasesDocumentsListDocumentsResponse.prototype, "statusCode", void 0);
    return FirestoreProjectsDatabasesDocumentsListDocumentsResponse;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesDocumentsListDocumentsResponse };
