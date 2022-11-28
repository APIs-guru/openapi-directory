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
var OsconfigProjectsLocationsOsPolicyAssignmentsOperationsCancelPathParams = /** @class */ (function (_super) {
    __extends(OsconfigProjectsLocationsOsPolicyAssignmentsOperationsCancelPathParams, _super);
    function OsconfigProjectsLocationsOsPolicyAssignmentsOperationsCancelPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], OsconfigProjectsLocationsOsPolicyAssignmentsOperationsCancelPathParams.prototype, "name", void 0);
    return OsconfigProjectsLocationsOsPolicyAssignmentsOperationsCancelPathParams;
}(SpeakeasyBase));
export { OsconfigProjectsLocationsOsPolicyAssignmentsOperationsCancelPathParams };
var OsconfigProjectsLocationsOsPolicyAssignmentsOperationsCancelQueryParams = /** @class */ (function (_super) {
    __extends(OsconfigProjectsLocationsOsPolicyAssignmentsOperationsCancelQueryParams, _super);
    function OsconfigProjectsLocationsOsPolicyAssignmentsOperationsCancelQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], OsconfigProjectsLocationsOsPolicyAssignmentsOperationsCancelQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], OsconfigProjectsLocationsOsPolicyAssignmentsOperationsCancelQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], OsconfigProjectsLocationsOsPolicyAssignmentsOperationsCancelQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], OsconfigProjectsLocationsOsPolicyAssignmentsOperationsCancelQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], OsconfigProjectsLocationsOsPolicyAssignmentsOperationsCancelQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], OsconfigProjectsLocationsOsPolicyAssignmentsOperationsCancelQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], OsconfigProjectsLocationsOsPolicyAssignmentsOperationsCancelQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], OsconfigProjectsLocationsOsPolicyAssignmentsOperationsCancelQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], OsconfigProjectsLocationsOsPolicyAssignmentsOperationsCancelQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], OsconfigProjectsLocationsOsPolicyAssignmentsOperationsCancelQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], OsconfigProjectsLocationsOsPolicyAssignmentsOperationsCancelQueryParams.prototype, "uploadProtocol", void 0);
    return OsconfigProjectsLocationsOsPolicyAssignmentsOperationsCancelQueryParams;
}(SpeakeasyBase));
export { OsconfigProjectsLocationsOsPolicyAssignmentsOperationsCancelQueryParams };
var OsconfigProjectsLocationsOsPolicyAssignmentsOperationsCancelSecurity = /** @class */ (function (_super) {
    __extends(OsconfigProjectsLocationsOsPolicyAssignmentsOperationsCancelSecurity, _super);
    function OsconfigProjectsLocationsOsPolicyAssignmentsOperationsCancelSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], OsconfigProjectsLocationsOsPolicyAssignmentsOperationsCancelSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], OsconfigProjectsLocationsOsPolicyAssignmentsOperationsCancelSecurity.prototype, "oauth2c", void 0);
    return OsconfigProjectsLocationsOsPolicyAssignmentsOperationsCancelSecurity;
}(SpeakeasyBase));
export { OsconfigProjectsLocationsOsPolicyAssignmentsOperationsCancelSecurity };
var OsconfigProjectsLocationsOsPolicyAssignmentsOperationsCancelRequest = /** @class */ (function (_super) {
    __extends(OsconfigProjectsLocationsOsPolicyAssignmentsOperationsCancelRequest, _super);
    function OsconfigProjectsLocationsOsPolicyAssignmentsOperationsCancelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OsconfigProjectsLocationsOsPolicyAssignmentsOperationsCancelPathParams)
    ], OsconfigProjectsLocationsOsPolicyAssignmentsOperationsCancelRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OsconfigProjectsLocationsOsPolicyAssignmentsOperationsCancelQueryParams)
    ], OsconfigProjectsLocationsOsPolicyAssignmentsOperationsCancelRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], OsconfigProjectsLocationsOsPolicyAssignmentsOperationsCancelRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OsconfigProjectsLocationsOsPolicyAssignmentsOperationsCancelSecurity)
    ], OsconfigProjectsLocationsOsPolicyAssignmentsOperationsCancelRequest.prototype, "security", void 0);
    return OsconfigProjectsLocationsOsPolicyAssignmentsOperationsCancelRequest;
}(SpeakeasyBase));
export { OsconfigProjectsLocationsOsPolicyAssignmentsOperationsCancelRequest };
var OsconfigProjectsLocationsOsPolicyAssignmentsOperationsCancelResponse = /** @class */ (function (_super) {
    __extends(OsconfigProjectsLocationsOsPolicyAssignmentsOperationsCancelResponse, _super);
    function OsconfigProjectsLocationsOsPolicyAssignmentsOperationsCancelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], OsconfigProjectsLocationsOsPolicyAssignmentsOperationsCancelResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], OsconfigProjectsLocationsOsPolicyAssignmentsOperationsCancelResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], OsconfigProjectsLocationsOsPolicyAssignmentsOperationsCancelResponse.prototype, "statusCode", void 0);
    return OsconfigProjectsLocationsOsPolicyAssignmentsOperationsCancelResponse;
}(SpeakeasyBase));
export { OsconfigProjectsLocationsOsPolicyAssignmentsOperationsCancelResponse };
