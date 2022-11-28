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
var FirestoreProjectsDatabasesCollectionGroupsFieldsPatchPathParams = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesCollectionGroupsFieldsPatchPathParams, _super);
    function FirestoreProjectsDatabasesCollectionGroupsFieldsPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesCollectionGroupsFieldsPatchPathParams.prototype, "name", void 0);
    return FirestoreProjectsDatabasesCollectionGroupsFieldsPatchPathParams;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesCollectionGroupsFieldsPatchPathParams };
var FirestoreProjectsDatabasesCollectionGroupsFieldsPatchQueryParams = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesCollectionGroupsFieldsPatchQueryParams, _super);
    function FirestoreProjectsDatabasesCollectionGroupsFieldsPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesCollectionGroupsFieldsPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesCollectionGroupsFieldsPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesCollectionGroupsFieldsPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesCollectionGroupsFieldsPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesCollectionGroupsFieldsPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesCollectionGroupsFieldsPatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesCollectionGroupsFieldsPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirestoreProjectsDatabasesCollectionGroupsFieldsPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesCollectionGroupsFieldsPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updateMask" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesCollectionGroupsFieldsPatchQueryParams.prototype, "updateMask", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesCollectionGroupsFieldsPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesCollectionGroupsFieldsPatchQueryParams.prototype, "uploadProtocol", void 0);
    return FirestoreProjectsDatabasesCollectionGroupsFieldsPatchQueryParams;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesCollectionGroupsFieldsPatchQueryParams };
var FirestoreProjectsDatabasesCollectionGroupsFieldsPatchSecurityOption1 = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesCollectionGroupsFieldsPatchSecurityOption1, _super);
    function FirestoreProjectsDatabasesCollectionGroupsFieldsPatchSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirestoreProjectsDatabasesCollectionGroupsFieldsPatchSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirestoreProjectsDatabasesCollectionGroupsFieldsPatchSecurityOption1.prototype, "oauth2c", void 0);
    return FirestoreProjectsDatabasesCollectionGroupsFieldsPatchSecurityOption1;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesCollectionGroupsFieldsPatchSecurityOption1 };
var FirestoreProjectsDatabasesCollectionGroupsFieldsPatchSecurityOption2 = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesCollectionGroupsFieldsPatchSecurityOption2, _super);
    function FirestoreProjectsDatabasesCollectionGroupsFieldsPatchSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirestoreProjectsDatabasesCollectionGroupsFieldsPatchSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirestoreProjectsDatabasesCollectionGroupsFieldsPatchSecurityOption2.prototype, "oauth2c", void 0);
    return FirestoreProjectsDatabasesCollectionGroupsFieldsPatchSecurityOption2;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesCollectionGroupsFieldsPatchSecurityOption2 };
var FirestoreProjectsDatabasesCollectionGroupsFieldsPatchSecurity = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesCollectionGroupsFieldsPatchSecurity, _super);
    function FirestoreProjectsDatabasesCollectionGroupsFieldsPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirestoreProjectsDatabasesCollectionGroupsFieldsPatchSecurityOption1)
    ], FirestoreProjectsDatabasesCollectionGroupsFieldsPatchSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirestoreProjectsDatabasesCollectionGroupsFieldsPatchSecurityOption2)
    ], FirestoreProjectsDatabasesCollectionGroupsFieldsPatchSecurity.prototype, "option2", void 0);
    return FirestoreProjectsDatabasesCollectionGroupsFieldsPatchSecurity;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesCollectionGroupsFieldsPatchSecurity };
var FirestoreProjectsDatabasesCollectionGroupsFieldsPatchRequest = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesCollectionGroupsFieldsPatchRequest, _super);
    function FirestoreProjectsDatabasesCollectionGroupsFieldsPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirestoreProjectsDatabasesCollectionGroupsFieldsPatchPathParams)
    ], FirestoreProjectsDatabasesCollectionGroupsFieldsPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirestoreProjectsDatabasesCollectionGroupsFieldsPatchQueryParams)
    ], FirestoreProjectsDatabasesCollectionGroupsFieldsPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleFirestoreAdminV1beta2Field)
    ], FirestoreProjectsDatabasesCollectionGroupsFieldsPatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirestoreProjectsDatabasesCollectionGroupsFieldsPatchSecurity)
    ], FirestoreProjectsDatabasesCollectionGroupsFieldsPatchRequest.prototype, "security", void 0);
    return FirestoreProjectsDatabasesCollectionGroupsFieldsPatchRequest;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesCollectionGroupsFieldsPatchRequest };
var FirestoreProjectsDatabasesCollectionGroupsFieldsPatchResponse = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesCollectionGroupsFieldsPatchResponse, _super);
    function FirestoreProjectsDatabasesCollectionGroupsFieldsPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesCollectionGroupsFieldsPatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleLongrunningOperation)
    ], FirestoreProjectsDatabasesCollectionGroupsFieldsPatchResponse.prototype, "googleLongrunningOperation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FirestoreProjectsDatabasesCollectionGroupsFieldsPatchResponse.prototype, "statusCode", void 0);
    return FirestoreProjectsDatabasesCollectionGroupsFieldsPatchResponse;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesCollectionGroupsFieldsPatchResponse };
