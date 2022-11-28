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
var FirebasedatabaseProjectsLocationsInstancesReenablePathParams = /** @class */ (function (_super) {
    __extends(FirebasedatabaseProjectsLocationsInstancesReenablePathParams, _super);
    function FirebasedatabaseProjectsLocationsInstancesReenablePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], FirebasedatabaseProjectsLocationsInstancesReenablePathParams.prototype, "name", void 0);
    return FirebasedatabaseProjectsLocationsInstancesReenablePathParams;
}(SpeakeasyBase));
export { FirebasedatabaseProjectsLocationsInstancesReenablePathParams };
var FirebasedatabaseProjectsLocationsInstancesReenableQueryParams = /** @class */ (function (_super) {
    __extends(FirebasedatabaseProjectsLocationsInstancesReenableQueryParams, _super);
    function FirebasedatabaseProjectsLocationsInstancesReenableQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirebasedatabaseProjectsLocationsInstancesReenableQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirebasedatabaseProjectsLocationsInstancesReenableQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirebasedatabaseProjectsLocationsInstancesReenableQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirebasedatabaseProjectsLocationsInstancesReenableQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirebasedatabaseProjectsLocationsInstancesReenableQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirebasedatabaseProjectsLocationsInstancesReenableQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirebasedatabaseProjectsLocationsInstancesReenableQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirebasedatabaseProjectsLocationsInstancesReenableQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirebasedatabaseProjectsLocationsInstancesReenableQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirebasedatabaseProjectsLocationsInstancesReenableQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirebasedatabaseProjectsLocationsInstancesReenableQueryParams.prototype, "uploadProtocol", void 0);
    return FirebasedatabaseProjectsLocationsInstancesReenableQueryParams;
}(SpeakeasyBase));
export { FirebasedatabaseProjectsLocationsInstancesReenableQueryParams };
var FirebasedatabaseProjectsLocationsInstancesReenableSecurityOption1 = /** @class */ (function (_super) {
    __extends(FirebasedatabaseProjectsLocationsInstancesReenableSecurityOption1, _super);
    function FirebasedatabaseProjectsLocationsInstancesReenableSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebasedatabaseProjectsLocationsInstancesReenableSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebasedatabaseProjectsLocationsInstancesReenableSecurityOption1.prototype, "oauth2c", void 0);
    return FirebasedatabaseProjectsLocationsInstancesReenableSecurityOption1;
}(SpeakeasyBase));
export { FirebasedatabaseProjectsLocationsInstancesReenableSecurityOption1 };
var FirebasedatabaseProjectsLocationsInstancesReenableSecurityOption2 = /** @class */ (function (_super) {
    __extends(FirebasedatabaseProjectsLocationsInstancesReenableSecurityOption2, _super);
    function FirebasedatabaseProjectsLocationsInstancesReenableSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebasedatabaseProjectsLocationsInstancesReenableSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebasedatabaseProjectsLocationsInstancesReenableSecurityOption2.prototype, "oauth2c", void 0);
    return FirebasedatabaseProjectsLocationsInstancesReenableSecurityOption2;
}(SpeakeasyBase));
export { FirebasedatabaseProjectsLocationsInstancesReenableSecurityOption2 };
var FirebasedatabaseProjectsLocationsInstancesReenableSecurity = /** @class */ (function (_super) {
    __extends(FirebasedatabaseProjectsLocationsInstancesReenableSecurity, _super);
    function FirebasedatabaseProjectsLocationsInstancesReenableSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebasedatabaseProjectsLocationsInstancesReenableSecurityOption1)
    ], FirebasedatabaseProjectsLocationsInstancesReenableSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebasedatabaseProjectsLocationsInstancesReenableSecurityOption2)
    ], FirebasedatabaseProjectsLocationsInstancesReenableSecurity.prototype, "option2", void 0);
    return FirebasedatabaseProjectsLocationsInstancesReenableSecurity;
}(SpeakeasyBase));
export { FirebasedatabaseProjectsLocationsInstancesReenableSecurity };
var FirebasedatabaseProjectsLocationsInstancesReenableRequest = /** @class */ (function (_super) {
    __extends(FirebasedatabaseProjectsLocationsInstancesReenableRequest, _super);
    function FirebasedatabaseProjectsLocationsInstancesReenableRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebasedatabaseProjectsLocationsInstancesReenablePathParams)
    ], FirebasedatabaseProjectsLocationsInstancesReenableRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebasedatabaseProjectsLocationsInstancesReenableQueryParams)
    ], FirebasedatabaseProjectsLocationsInstancesReenableRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], FirebasedatabaseProjectsLocationsInstancesReenableRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebasedatabaseProjectsLocationsInstancesReenableSecurity)
    ], FirebasedatabaseProjectsLocationsInstancesReenableRequest.prototype, "security", void 0);
    return FirebasedatabaseProjectsLocationsInstancesReenableRequest;
}(SpeakeasyBase));
export { FirebasedatabaseProjectsLocationsInstancesReenableRequest };
var FirebasedatabaseProjectsLocationsInstancesReenableResponse = /** @class */ (function (_super) {
    __extends(FirebasedatabaseProjectsLocationsInstancesReenableResponse, _super);
    function FirebasedatabaseProjectsLocationsInstancesReenableResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FirebasedatabaseProjectsLocationsInstancesReenableResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DatabaseInstance)
    ], FirebasedatabaseProjectsLocationsInstancesReenableResponse.prototype, "databaseInstance", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FirebasedatabaseProjectsLocationsInstancesReenableResponse.prototype, "statusCode", void 0);
    return FirebasedatabaseProjectsLocationsInstancesReenableResponse;
}(SpeakeasyBase));
export { FirebasedatabaseProjectsLocationsInstancesReenableResponse };
