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
var FirestoreProjectsDatabasesCreatePathParams = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesCreatePathParams, _super);
    function FirestoreProjectsDatabasesCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesCreatePathParams.prototype, "parent", void 0);
    return FirestoreProjectsDatabasesCreatePathParams;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesCreatePathParams };
var FirestoreProjectsDatabasesCreateQueryParams = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesCreateQueryParams, _super);
    function FirestoreProjectsDatabasesCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=databaseId" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesCreateQueryParams.prototype, "databaseId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirestoreProjectsDatabasesCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesCreateQueryParams.prototype, "uploadProtocol", void 0);
    return FirestoreProjectsDatabasesCreateQueryParams;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesCreateQueryParams };
var FirestoreProjectsDatabasesCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesCreateSecurityOption1, _super);
    function FirestoreProjectsDatabasesCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirestoreProjectsDatabasesCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirestoreProjectsDatabasesCreateSecurityOption1.prototype, "oauth2c", void 0);
    return FirestoreProjectsDatabasesCreateSecurityOption1;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesCreateSecurityOption1 };
var FirestoreProjectsDatabasesCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesCreateSecurityOption2, _super);
    function FirestoreProjectsDatabasesCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirestoreProjectsDatabasesCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirestoreProjectsDatabasesCreateSecurityOption2.prototype, "oauth2c", void 0);
    return FirestoreProjectsDatabasesCreateSecurityOption2;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesCreateSecurityOption2 };
var FirestoreProjectsDatabasesCreateSecurity = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesCreateSecurity, _super);
    function FirestoreProjectsDatabasesCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirestoreProjectsDatabasesCreateSecurityOption1)
    ], FirestoreProjectsDatabasesCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirestoreProjectsDatabasesCreateSecurityOption2)
    ], FirestoreProjectsDatabasesCreateSecurity.prototype, "option2", void 0);
    return FirestoreProjectsDatabasesCreateSecurity;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesCreateSecurity };
var FirestoreProjectsDatabasesCreateRequest = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesCreateRequest, _super);
    function FirestoreProjectsDatabasesCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirestoreProjectsDatabasesCreatePathParams)
    ], FirestoreProjectsDatabasesCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirestoreProjectsDatabasesCreateQueryParams)
    ], FirestoreProjectsDatabasesCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleFirestoreAdminV1DatabaseInput)
    ], FirestoreProjectsDatabasesCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirestoreProjectsDatabasesCreateSecurity)
    ], FirestoreProjectsDatabasesCreateRequest.prototype, "security", void 0);
    return FirestoreProjectsDatabasesCreateRequest;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesCreateRequest };
var FirestoreProjectsDatabasesCreateResponse = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesCreateResponse, _super);
    function FirestoreProjectsDatabasesCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleLongrunningOperation)
    ], FirestoreProjectsDatabasesCreateResponse.prototype, "googleLongrunningOperation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FirestoreProjectsDatabasesCreateResponse.prototype, "statusCode", void 0);
    return FirestoreProjectsDatabasesCreateResponse;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesCreateResponse };
