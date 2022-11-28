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
var FirestoreProjectsLocationsGetPathParams = /** @class */ (function (_super) {
    __extends(FirestoreProjectsLocationsGetPathParams, _super);
    function FirestoreProjectsLocationsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], FirestoreProjectsLocationsGetPathParams.prototype, "name", void 0);
    return FirestoreProjectsLocationsGetPathParams;
}(SpeakeasyBase));
export { FirestoreProjectsLocationsGetPathParams };
var FirestoreProjectsLocationsGetQueryParams = /** @class */ (function (_super) {
    __extends(FirestoreProjectsLocationsGetQueryParams, _super);
    function FirestoreProjectsLocationsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirestoreProjectsLocationsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirestoreProjectsLocationsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirestoreProjectsLocationsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirestoreProjectsLocationsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirestoreProjectsLocationsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirestoreProjectsLocationsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mask.fieldPaths" }),
        __metadata("design:type", Array)
    ], FirestoreProjectsLocationsGetQueryParams.prototype, "maskFieldPaths", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirestoreProjectsLocationsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirestoreProjectsLocationsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirestoreProjectsLocationsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=readTime" }),
        __metadata("design:type", String)
    ], FirestoreProjectsLocationsGetQueryParams.prototype, "readTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=transaction" }),
        __metadata("design:type", String)
    ], FirestoreProjectsLocationsGetQueryParams.prototype, "transaction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirestoreProjectsLocationsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirestoreProjectsLocationsGetQueryParams.prototype, "uploadProtocol", void 0);
    return FirestoreProjectsLocationsGetQueryParams;
}(SpeakeasyBase));
export { FirestoreProjectsLocationsGetQueryParams };
var FirestoreProjectsLocationsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(FirestoreProjectsLocationsGetSecurityOption1, _super);
    function FirestoreProjectsLocationsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirestoreProjectsLocationsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirestoreProjectsLocationsGetSecurityOption1.prototype, "oauth2c", void 0);
    return FirestoreProjectsLocationsGetSecurityOption1;
}(SpeakeasyBase));
export { FirestoreProjectsLocationsGetSecurityOption1 };
var FirestoreProjectsLocationsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(FirestoreProjectsLocationsGetSecurityOption2, _super);
    function FirestoreProjectsLocationsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirestoreProjectsLocationsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirestoreProjectsLocationsGetSecurityOption2.prototype, "oauth2c", void 0);
    return FirestoreProjectsLocationsGetSecurityOption2;
}(SpeakeasyBase));
export { FirestoreProjectsLocationsGetSecurityOption2 };
var FirestoreProjectsLocationsGetSecurity = /** @class */ (function (_super) {
    __extends(FirestoreProjectsLocationsGetSecurity, _super);
    function FirestoreProjectsLocationsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirestoreProjectsLocationsGetSecurityOption1)
    ], FirestoreProjectsLocationsGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirestoreProjectsLocationsGetSecurityOption2)
    ], FirestoreProjectsLocationsGetSecurity.prototype, "option2", void 0);
    return FirestoreProjectsLocationsGetSecurity;
}(SpeakeasyBase));
export { FirestoreProjectsLocationsGetSecurity };
var FirestoreProjectsLocationsGetRequest = /** @class */ (function (_super) {
    __extends(FirestoreProjectsLocationsGetRequest, _super);
    function FirestoreProjectsLocationsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirestoreProjectsLocationsGetPathParams)
    ], FirestoreProjectsLocationsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirestoreProjectsLocationsGetQueryParams)
    ], FirestoreProjectsLocationsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirestoreProjectsLocationsGetSecurity)
    ], FirestoreProjectsLocationsGetRequest.prototype, "security", void 0);
    return FirestoreProjectsLocationsGetRequest;
}(SpeakeasyBase));
export { FirestoreProjectsLocationsGetRequest };
var FirestoreProjectsLocationsGetResponse = /** @class */ (function (_super) {
    __extends(FirestoreProjectsLocationsGetResponse, _super);
    function FirestoreProjectsLocationsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FirestoreProjectsLocationsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Location)
    ], FirestoreProjectsLocationsGetResponse.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FirestoreProjectsLocationsGetResponse.prototype, "statusCode", void 0);
    return FirestoreProjectsLocationsGetResponse;
}(SpeakeasyBase));
export { FirestoreProjectsLocationsGetResponse };
