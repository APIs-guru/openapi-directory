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
var OsconfigProjectsLocationsOsPolicyAssignmentsCreatePathParams = /** @class */ (function (_super) {
    __extends(OsconfigProjectsLocationsOsPolicyAssignmentsCreatePathParams, _super);
    function OsconfigProjectsLocationsOsPolicyAssignmentsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], OsconfigProjectsLocationsOsPolicyAssignmentsCreatePathParams.prototype, "parent", void 0);
    return OsconfigProjectsLocationsOsPolicyAssignmentsCreatePathParams;
}(SpeakeasyBase));
export { OsconfigProjectsLocationsOsPolicyAssignmentsCreatePathParams };
var OsconfigProjectsLocationsOsPolicyAssignmentsCreateQueryParams = /** @class */ (function (_super) {
    __extends(OsconfigProjectsLocationsOsPolicyAssignmentsCreateQueryParams, _super);
    function OsconfigProjectsLocationsOsPolicyAssignmentsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], OsconfigProjectsLocationsOsPolicyAssignmentsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], OsconfigProjectsLocationsOsPolicyAssignmentsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], OsconfigProjectsLocationsOsPolicyAssignmentsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], OsconfigProjectsLocationsOsPolicyAssignmentsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], OsconfigProjectsLocationsOsPolicyAssignmentsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], OsconfigProjectsLocationsOsPolicyAssignmentsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], OsconfigProjectsLocationsOsPolicyAssignmentsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=osPolicyAssignmentId" }),
        __metadata("design:type", String)
    ], OsconfigProjectsLocationsOsPolicyAssignmentsCreateQueryParams.prototype, "osPolicyAssignmentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], OsconfigProjectsLocationsOsPolicyAssignmentsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], OsconfigProjectsLocationsOsPolicyAssignmentsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], OsconfigProjectsLocationsOsPolicyAssignmentsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], OsconfigProjectsLocationsOsPolicyAssignmentsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return OsconfigProjectsLocationsOsPolicyAssignmentsCreateQueryParams;
}(SpeakeasyBase));
export { OsconfigProjectsLocationsOsPolicyAssignmentsCreateQueryParams };
var OsconfigProjectsLocationsOsPolicyAssignmentsCreateSecurity = /** @class */ (function (_super) {
    __extends(OsconfigProjectsLocationsOsPolicyAssignmentsCreateSecurity, _super);
    function OsconfigProjectsLocationsOsPolicyAssignmentsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], OsconfigProjectsLocationsOsPolicyAssignmentsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], OsconfigProjectsLocationsOsPolicyAssignmentsCreateSecurity.prototype, "oauth2c", void 0);
    return OsconfigProjectsLocationsOsPolicyAssignmentsCreateSecurity;
}(SpeakeasyBase));
export { OsconfigProjectsLocationsOsPolicyAssignmentsCreateSecurity };
var OsconfigProjectsLocationsOsPolicyAssignmentsCreateRequest = /** @class */ (function (_super) {
    __extends(OsconfigProjectsLocationsOsPolicyAssignmentsCreateRequest, _super);
    function OsconfigProjectsLocationsOsPolicyAssignmentsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OsconfigProjectsLocationsOsPolicyAssignmentsCreatePathParams)
    ], OsconfigProjectsLocationsOsPolicyAssignmentsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OsconfigProjectsLocationsOsPolicyAssignmentsCreateQueryParams)
    ], OsconfigProjectsLocationsOsPolicyAssignmentsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.OsPolicyAssignmentInput)
    ], OsconfigProjectsLocationsOsPolicyAssignmentsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OsconfigProjectsLocationsOsPolicyAssignmentsCreateSecurity)
    ], OsconfigProjectsLocationsOsPolicyAssignmentsCreateRequest.prototype, "security", void 0);
    return OsconfigProjectsLocationsOsPolicyAssignmentsCreateRequest;
}(SpeakeasyBase));
export { OsconfigProjectsLocationsOsPolicyAssignmentsCreateRequest };
var OsconfigProjectsLocationsOsPolicyAssignmentsCreateResponse = /** @class */ (function (_super) {
    __extends(OsconfigProjectsLocationsOsPolicyAssignmentsCreateResponse, _super);
    function OsconfigProjectsLocationsOsPolicyAssignmentsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], OsconfigProjectsLocationsOsPolicyAssignmentsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], OsconfigProjectsLocationsOsPolicyAssignmentsCreateResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], OsconfigProjectsLocationsOsPolicyAssignmentsCreateResponse.prototype, "statusCode", void 0);
    return OsconfigProjectsLocationsOsPolicyAssignmentsCreateResponse;
}(SpeakeasyBase));
export { OsconfigProjectsLocationsOsPolicyAssignmentsCreateResponse };
