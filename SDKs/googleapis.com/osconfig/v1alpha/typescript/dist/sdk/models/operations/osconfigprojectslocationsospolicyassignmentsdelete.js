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
var OsconfigProjectsLocationsOsPolicyAssignmentsDeletePathParams = /** @class */ (function (_super) {
    __extends(OsconfigProjectsLocationsOsPolicyAssignmentsDeletePathParams, _super);
    function OsconfigProjectsLocationsOsPolicyAssignmentsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], OsconfigProjectsLocationsOsPolicyAssignmentsDeletePathParams.prototype, "name", void 0);
    return OsconfigProjectsLocationsOsPolicyAssignmentsDeletePathParams;
}(SpeakeasyBase));
export { OsconfigProjectsLocationsOsPolicyAssignmentsDeletePathParams };
var OsconfigProjectsLocationsOsPolicyAssignmentsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(OsconfigProjectsLocationsOsPolicyAssignmentsDeleteQueryParams, _super);
    function OsconfigProjectsLocationsOsPolicyAssignmentsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], OsconfigProjectsLocationsOsPolicyAssignmentsDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], OsconfigProjectsLocationsOsPolicyAssignmentsDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], OsconfigProjectsLocationsOsPolicyAssignmentsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], OsconfigProjectsLocationsOsPolicyAssignmentsDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], OsconfigProjectsLocationsOsPolicyAssignmentsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], OsconfigProjectsLocationsOsPolicyAssignmentsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], OsconfigProjectsLocationsOsPolicyAssignmentsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], OsconfigProjectsLocationsOsPolicyAssignmentsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], OsconfigProjectsLocationsOsPolicyAssignmentsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], OsconfigProjectsLocationsOsPolicyAssignmentsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], OsconfigProjectsLocationsOsPolicyAssignmentsDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return OsconfigProjectsLocationsOsPolicyAssignmentsDeleteQueryParams;
}(SpeakeasyBase));
export { OsconfigProjectsLocationsOsPolicyAssignmentsDeleteQueryParams };
var OsconfigProjectsLocationsOsPolicyAssignmentsDeleteSecurity = /** @class */ (function (_super) {
    __extends(OsconfigProjectsLocationsOsPolicyAssignmentsDeleteSecurity, _super);
    function OsconfigProjectsLocationsOsPolicyAssignmentsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], OsconfigProjectsLocationsOsPolicyAssignmentsDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], OsconfigProjectsLocationsOsPolicyAssignmentsDeleteSecurity.prototype, "oauth2c", void 0);
    return OsconfigProjectsLocationsOsPolicyAssignmentsDeleteSecurity;
}(SpeakeasyBase));
export { OsconfigProjectsLocationsOsPolicyAssignmentsDeleteSecurity };
var OsconfigProjectsLocationsOsPolicyAssignmentsDeleteRequest = /** @class */ (function (_super) {
    __extends(OsconfigProjectsLocationsOsPolicyAssignmentsDeleteRequest, _super);
    function OsconfigProjectsLocationsOsPolicyAssignmentsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OsconfigProjectsLocationsOsPolicyAssignmentsDeletePathParams)
    ], OsconfigProjectsLocationsOsPolicyAssignmentsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OsconfigProjectsLocationsOsPolicyAssignmentsDeleteQueryParams)
    ], OsconfigProjectsLocationsOsPolicyAssignmentsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OsconfigProjectsLocationsOsPolicyAssignmentsDeleteSecurity)
    ], OsconfigProjectsLocationsOsPolicyAssignmentsDeleteRequest.prototype, "security", void 0);
    return OsconfigProjectsLocationsOsPolicyAssignmentsDeleteRequest;
}(SpeakeasyBase));
export { OsconfigProjectsLocationsOsPolicyAssignmentsDeleteRequest };
var OsconfigProjectsLocationsOsPolicyAssignmentsDeleteResponse = /** @class */ (function (_super) {
    __extends(OsconfigProjectsLocationsOsPolicyAssignmentsDeleteResponse, _super);
    function OsconfigProjectsLocationsOsPolicyAssignmentsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], OsconfigProjectsLocationsOsPolicyAssignmentsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], OsconfigProjectsLocationsOsPolicyAssignmentsDeleteResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], OsconfigProjectsLocationsOsPolicyAssignmentsDeleteResponse.prototype, "statusCode", void 0);
    return OsconfigProjectsLocationsOsPolicyAssignmentsDeleteResponse;
}(SpeakeasyBase));
export { OsconfigProjectsLocationsOsPolicyAssignmentsDeleteResponse };
