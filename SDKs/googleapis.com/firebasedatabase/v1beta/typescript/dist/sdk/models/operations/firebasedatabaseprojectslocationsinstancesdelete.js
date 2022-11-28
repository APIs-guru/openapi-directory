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
var FirebasedatabaseProjectsLocationsInstancesDeletePathParams = /** @class */ (function (_super) {
    __extends(FirebasedatabaseProjectsLocationsInstancesDeletePathParams, _super);
    function FirebasedatabaseProjectsLocationsInstancesDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], FirebasedatabaseProjectsLocationsInstancesDeletePathParams.prototype, "name", void 0);
    return FirebasedatabaseProjectsLocationsInstancesDeletePathParams;
}(SpeakeasyBase));
export { FirebasedatabaseProjectsLocationsInstancesDeletePathParams };
var FirebasedatabaseProjectsLocationsInstancesDeleteQueryParams = /** @class */ (function (_super) {
    __extends(FirebasedatabaseProjectsLocationsInstancesDeleteQueryParams, _super);
    function FirebasedatabaseProjectsLocationsInstancesDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirebasedatabaseProjectsLocationsInstancesDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirebasedatabaseProjectsLocationsInstancesDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirebasedatabaseProjectsLocationsInstancesDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirebasedatabaseProjectsLocationsInstancesDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirebasedatabaseProjectsLocationsInstancesDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirebasedatabaseProjectsLocationsInstancesDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirebasedatabaseProjectsLocationsInstancesDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirebasedatabaseProjectsLocationsInstancesDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirebasedatabaseProjectsLocationsInstancesDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirebasedatabaseProjectsLocationsInstancesDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirebasedatabaseProjectsLocationsInstancesDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return FirebasedatabaseProjectsLocationsInstancesDeleteQueryParams;
}(SpeakeasyBase));
export { FirebasedatabaseProjectsLocationsInstancesDeleteQueryParams };
var FirebasedatabaseProjectsLocationsInstancesDeleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(FirebasedatabaseProjectsLocationsInstancesDeleteSecurityOption1, _super);
    function FirebasedatabaseProjectsLocationsInstancesDeleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebasedatabaseProjectsLocationsInstancesDeleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebasedatabaseProjectsLocationsInstancesDeleteSecurityOption1.prototype, "oauth2c", void 0);
    return FirebasedatabaseProjectsLocationsInstancesDeleteSecurityOption1;
}(SpeakeasyBase));
export { FirebasedatabaseProjectsLocationsInstancesDeleteSecurityOption1 };
var FirebasedatabaseProjectsLocationsInstancesDeleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(FirebasedatabaseProjectsLocationsInstancesDeleteSecurityOption2, _super);
    function FirebasedatabaseProjectsLocationsInstancesDeleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebasedatabaseProjectsLocationsInstancesDeleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebasedatabaseProjectsLocationsInstancesDeleteSecurityOption2.prototype, "oauth2c", void 0);
    return FirebasedatabaseProjectsLocationsInstancesDeleteSecurityOption2;
}(SpeakeasyBase));
export { FirebasedatabaseProjectsLocationsInstancesDeleteSecurityOption2 };
var FirebasedatabaseProjectsLocationsInstancesDeleteSecurity = /** @class */ (function (_super) {
    __extends(FirebasedatabaseProjectsLocationsInstancesDeleteSecurity, _super);
    function FirebasedatabaseProjectsLocationsInstancesDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebasedatabaseProjectsLocationsInstancesDeleteSecurityOption1)
    ], FirebasedatabaseProjectsLocationsInstancesDeleteSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebasedatabaseProjectsLocationsInstancesDeleteSecurityOption2)
    ], FirebasedatabaseProjectsLocationsInstancesDeleteSecurity.prototype, "option2", void 0);
    return FirebasedatabaseProjectsLocationsInstancesDeleteSecurity;
}(SpeakeasyBase));
export { FirebasedatabaseProjectsLocationsInstancesDeleteSecurity };
var FirebasedatabaseProjectsLocationsInstancesDeleteRequest = /** @class */ (function (_super) {
    __extends(FirebasedatabaseProjectsLocationsInstancesDeleteRequest, _super);
    function FirebasedatabaseProjectsLocationsInstancesDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebasedatabaseProjectsLocationsInstancesDeletePathParams)
    ], FirebasedatabaseProjectsLocationsInstancesDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebasedatabaseProjectsLocationsInstancesDeleteQueryParams)
    ], FirebasedatabaseProjectsLocationsInstancesDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebasedatabaseProjectsLocationsInstancesDeleteSecurity)
    ], FirebasedatabaseProjectsLocationsInstancesDeleteRequest.prototype, "security", void 0);
    return FirebasedatabaseProjectsLocationsInstancesDeleteRequest;
}(SpeakeasyBase));
export { FirebasedatabaseProjectsLocationsInstancesDeleteRequest };
var FirebasedatabaseProjectsLocationsInstancesDeleteResponse = /** @class */ (function (_super) {
    __extends(FirebasedatabaseProjectsLocationsInstancesDeleteResponse, _super);
    function FirebasedatabaseProjectsLocationsInstancesDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FirebasedatabaseProjectsLocationsInstancesDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DatabaseInstance)
    ], FirebasedatabaseProjectsLocationsInstancesDeleteResponse.prototype, "databaseInstance", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FirebasedatabaseProjectsLocationsInstancesDeleteResponse.prototype, "statusCode", void 0);
    return FirebasedatabaseProjectsLocationsInstancesDeleteResponse;
}(SpeakeasyBase));
export { FirebasedatabaseProjectsLocationsInstancesDeleteResponse };
