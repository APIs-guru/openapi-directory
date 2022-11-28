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
var FirebasedatabaseProjectsLocationsInstancesUndeletePathParams = /** @class */ (function (_super) {
    __extends(FirebasedatabaseProjectsLocationsInstancesUndeletePathParams, _super);
    function FirebasedatabaseProjectsLocationsInstancesUndeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], FirebasedatabaseProjectsLocationsInstancesUndeletePathParams.prototype, "name", void 0);
    return FirebasedatabaseProjectsLocationsInstancesUndeletePathParams;
}(SpeakeasyBase));
export { FirebasedatabaseProjectsLocationsInstancesUndeletePathParams };
var FirebasedatabaseProjectsLocationsInstancesUndeleteQueryParams = /** @class */ (function (_super) {
    __extends(FirebasedatabaseProjectsLocationsInstancesUndeleteQueryParams, _super);
    function FirebasedatabaseProjectsLocationsInstancesUndeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirebasedatabaseProjectsLocationsInstancesUndeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirebasedatabaseProjectsLocationsInstancesUndeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirebasedatabaseProjectsLocationsInstancesUndeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirebasedatabaseProjectsLocationsInstancesUndeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirebasedatabaseProjectsLocationsInstancesUndeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirebasedatabaseProjectsLocationsInstancesUndeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirebasedatabaseProjectsLocationsInstancesUndeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirebasedatabaseProjectsLocationsInstancesUndeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirebasedatabaseProjectsLocationsInstancesUndeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirebasedatabaseProjectsLocationsInstancesUndeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirebasedatabaseProjectsLocationsInstancesUndeleteQueryParams.prototype, "uploadProtocol", void 0);
    return FirebasedatabaseProjectsLocationsInstancesUndeleteQueryParams;
}(SpeakeasyBase));
export { FirebasedatabaseProjectsLocationsInstancesUndeleteQueryParams };
var FirebasedatabaseProjectsLocationsInstancesUndeleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(FirebasedatabaseProjectsLocationsInstancesUndeleteSecurityOption1, _super);
    function FirebasedatabaseProjectsLocationsInstancesUndeleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebasedatabaseProjectsLocationsInstancesUndeleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebasedatabaseProjectsLocationsInstancesUndeleteSecurityOption1.prototype, "oauth2c", void 0);
    return FirebasedatabaseProjectsLocationsInstancesUndeleteSecurityOption1;
}(SpeakeasyBase));
export { FirebasedatabaseProjectsLocationsInstancesUndeleteSecurityOption1 };
var FirebasedatabaseProjectsLocationsInstancesUndeleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(FirebasedatabaseProjectsLocationsInstancesUndeleteSecurityOption2, _super);
    function FirebasedatabaseProjectsLocationsInstancesUndeleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebasedatabaseProjectsLocationsInstancesUndeleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebasedatabaseProjectsLocationsInstancesUndeleteSecurityOption2.prototype, "oauth2c", void 0);
    return FirebasedatabaseProjectsLocationsInstancesUndeleteSecurityOption2;
}(SpeakeasyBase));
export { FirebasedatabaseProjectsLocationsInstancesUndeleteSecurityOption2 };
var FirebasedatabaseProjectsLocationsInstancesUndeleteSecurity = /** @class */ (function (_super) {
    __extends(FirebasedatabaseProjectsLocationsInstancesUndeleteSecurity, _super);
    function FirebasedatabaseProjectsLocationsInstancesUndeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebasedatabaseProjectsLocationsInstancesUndeleteSecurityOption1)
    ], FirebasedatabaseProjectsLocationsInstancesUndeleteSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebasedatabaseProjectsLocationsInstancesUndeleteSecurityOption2)
    ], FirebasedatabaseProjectsLocationsInstancesUndeleteSecurity.prototype, "option2", void 0);
    return FirebasedatabaseProjectsLocationsInstancesUndeleteSecurity;
}(SpeakeasyBase));
export { FirebasedatabaseProjectsLocationsInstancesUndeleteSecurity };
var FirebasedatabaseProjectsLocationsInstancesUndeleteRequest = /** @class */ (function (_super) {
    __extends(FirebasedatabaseProjectsLocationsInstancesUndeleteRequest, _super);
    function FirebasedatabaseProjectsLocationsInstancesUndeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebasedatabaseProjectsLocationsInstancesUndeletePathParams)
    ], FirebasedatabaseProjectsLocationsInstancesUndeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebasedatabaseProjectsLocationsInstancesUndeleteQueryParams)
    ], FirebasedatabaseProjectsLocationsInstancesUndeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], FirebasedatabaseProjectsLocationsInstancesUndeleteRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebasedatabaseProjectsLocationsInstancesUndeleteSecurity)
    ], FirebasedatabaseProjectsLocationsInstancesUndeleteRequest.prototype, "security", void 0);
    return FirebasedatabaseProjectsLocationsInstancesUndeleteRequest;
}(SpeakeasyBase));
export { FirebasedatabaseProjectsLocationsInstancesUndeleteRequest };
var FirebasedatabaseProjectsLocationsInstancesUndeleteResponse = /** @class */ (function (_super) {
    __extends(FirebasedatabaseProjectsLocationsInstancesUndeleteResponse, _super);
    function FirebasedatabaseProjectsLocationsInstancesUndeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FirebasedatabaseProjectsLocationsInstancesUndeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DatabaseInstance)
    ], FirebasedatabaseProjectsLocationsInstancesUndeleteResponse.prototype, "databaseInstance", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FirebasedatabaseProjectsLocationsInstancesUndeleteResponse.prototype, "statusCode", void 0);
    return FirebasedatabaseProjectsLocationsInstancesUndeleteResponse;
}(SpeakeasyBase));
export { FirebasedatabaseProjectsLocationsInstancesUndeleteResponse };
