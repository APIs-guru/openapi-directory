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
var OsconfigProjectsLocationsOsPolicyAssignmentsPatchPathParams = /** @class */ (function (_super) {
    __extends(OsconfigProjectsLocationsOsPolicyAssignmentsPatchPathParams, _super);
    function OsconfigProjectsLocationsOsPolicyAssignmentsPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], OsconfigProjectsLocationsOsPolicyAssignmentsPatchPathParams.prototype, "name", void 0);
    return OsconfigProjectsLocationsOsPolicyAssignmentsPatchPathParams;
}(SpeakeasyBase));
export { OsconfigProjectsLocationsOsPolicyAssignmentsPatchPathParams };
var OsconfigProjectsLocationsOsPolicyAssignmentsPatchQueryParams = /** @class */ (function (_super) {
    __extends(OsconfigProjectsLocationsOsPolicyAssignmentsPatchQueryParams, _super);
    function OsconfigProjectsLocationsOsPolicyAssignmentsPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], OsconfigProjectsLocationsOsPolicyAssignmentsPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], OsconfigProjectsLocationsOsPolicyAssignmentsPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], OsconfigProjectsLocationsOsPolicyAssignmentsPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], OsconfigProjectsLocationsOsPolicyAssignmentsPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], OsconfigProjectsLocationsOsPolicyAssignmentsPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], OsconfigProjectsLocationsOsPolicyAssignmentsPatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], OsconfigProjectsLocationsOsPolicyAssignmentsPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], OsconfigProjectsLocationsOsPolicyAssignmentsPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], OsconfigProjectsLocationsOsPolicyAssignmentsPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updateMask" }),
        __metadata("design:type", String)
    ], OsconfigProjectsLocationsOsPolicyAssignmentsPatchQueryParams.prototype, "updateMask", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], OsconfigProjectsLocationsOsPolicyAssignmentsPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], OsconfigProjectsLocationsOsPolicyAssignmentsPatchQueryParams.prototype, "uploadProtocol", void 0);
    return OsconfigProjectsLocationsOsPolicyAssignmentsPatchQueryParams;
}(SpeakeasyBase));
export { OsconfigProjectsLocationsOsPolicyAssignmentsPatchQueryParams };
var OsconfigProjectsLocationsOsPolicyAssignmentsPatchSecurity = /** @class */ (function (_super) {
    __extends(OsconfigProjectsLocationsOsPolicyAssignmentsPatchSecurity, _super);
    function OsconfigProjectsLocationsOsPolicyAssignmentsPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], OsconfigProjectsLocationsOsPolicyAssignmentsPatchSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], OsconfigProjectsLocationsOsPolicyAssignmentsPatchSecurity.prototype, "oauth2c", void 0);
    return OsconfigProjectsLocationsOsPolicyAssignmentsPatchSecurity;
}(SpeakeasyBase));
export { OsconfigProjectsLocationsOsPolicyAssignmentsPatchSecurity };
var OsconfigProjectsLocationsOsPolicyAssignmentsPatchRequest = /** @class */ (function (_super) {
    __extends(OsconfigProjectsLocationsOsPolicyAssignmentsPatchRequest, _super);
    function OsconfigProjectsLocationsOsPolicyAssignmentsPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OsconfigProjectsLocationsOsPolicyAssignmentsPatchPathParams)
    ], OsconfigProjectsLocationsOsPolicyAssignmentsPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OsconfigProjectsLocationsOsPolicyAssignmentsPatchQueryParams)
    ], OsconfigProjectsLocationsOsPolicyAssignmentsPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.OsPolicyAssignmentInput)
    ], OsconfigProjectsLocationsOsPolicyAssignmentsPatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OsconfigProjectsLocationsOsPolicyAssignmentsPatchSecurity)
    ], OsconfigProjectsLocationsOsPolicyAssignmentsPatchRequest.prototype, "security", void 0);
    return OsconfigProjectsLocationsOsPolicyAssignmentsPatchRequest;
}(SpeakeasyBase));
export { OsconfigProjectsLocationsOsPolicyAssignmentsPatchRequest };
var OsconfigProjectsLocationsOsPolicyAssignmentsPatchResponse = /** @class */ (function (_super) {
    __extends(OsconfigProjectsLocationsOsPolicyAssignmentsPatchResponse, _super);
    function OsconfigProjectsLocationsOsPolicyAssignmentsPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], OsconfigProjectsLocationsOsPolicyAssignmentsPatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], OsconfigProjectsLocationsOsPolicyAssignmentsPatchResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], OsconfigProjectsLocationsOsPolicyAssignmentsPatchResponse.prototype, "statusCode", void 0);
    return OsconfigProjectsLocationsOsPolicyAssignmentsPatchResponse;
}(SpeakeasyBase));
export { OsconfigProjectsLocationsOsPolicyAssignmentsPatchResponse };
