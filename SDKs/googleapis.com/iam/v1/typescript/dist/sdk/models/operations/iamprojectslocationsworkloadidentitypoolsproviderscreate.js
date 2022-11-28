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
var IamProjectsLocationsWorkloadIdentityPoolsProvidersCreatePathParams = /** @class */ (function (_super) {
    __extends(IamProjectsLocationsWorkloadIdentityPoolsProvidersCreatePathParams, _super);
    function IamProjectsLocationsWorkloadIdentityPoolsProvidersCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], IamProjectsLocationsWorkloadIdentityPoolsProvidersCreatePathParams.prototype, "parent", void 0);
    return IamProjectsLocationsWorkloadIdentityPoolsProvidersCreatePathParams;
}(SpeakeasyBase));
export { IamProjectsLocationsWorkloadIdentityPoolsProvidersCreatePathParams };
var IamProjectsLocationsWorkloadIdentityPoolsProvidersCreateQueryParams = /** @class */ (function (_super) {
    __extends(IamProjectsLocationsWorkloadIdentityPoolsProvidersCreateQueryParams, _super);
    function IamProjectsLocationsWorkloadIdentityPoolsProvidersCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], IamProjectsLocationsWorkloadIdentityPoolsProvidersCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], IamProjectsLocationsWorkloadIdentityPoolsProvidersCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], IamProjectsLocationsWorkloadIdentityPoolsProvidersCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], IamProjectsLocationsWorkloadIdentityPoolsProvidersCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], IamProjectsLocationsWorkloadIdentityPoolsProvidersCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], IamProjectsLocationsWorkloadIdentityPoolsProvidersCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], IamProjectsLocationsWorkloadIdentityPoolsProvidersCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], IamProjectsLocationsWorkloadIdentityPoolsProvidersCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], IamProjectsLocationsWorkloadIdentityPoolsProvidersCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], IamProjectsLocationsWorkloadIdentityPoolsProvidersCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], IamProjectsLocationsWorkloadIdentityPoolsProvidersCreateQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=workloadIdentityPoolProviderId" }),
        __metadata("design:type", String)
    ], IamProjectsLocationsWorkloadIdentityPoolsProvidersCreateQueryParams.prototype, "workloadIdentityPoolProviderId", void 0);
    return IamProjectsLocationsWorkloadIdentityPoolsProvidersCreateQueryParams;
}(SpeakeasyBase));
export { IamProjectsLocationsWorkloadIdentityPoolsProvidersCreateQueryParams };
var IamProjectsLocationsWorkloadIdentityPoolsProvidersCreateSecurity = /** @class */ (function (_super) {
    __extends(IamProjectsLocationsWorkloadIdentityPoolsProvidersCreateSecurity, _super);
    function IamProjectsLocationsWorkloadIdentityPoolsProvidersCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], IamProjectsLocationsWorkloadIdentityPoolsProvidersCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], IamProjectsLocationsWorkloadIdentityPoolsProvidersCreateSecurity.prototype, "oauth2c", void 0);
    return IamProjectsLocationsWorkloadIdentityPoolsProvidersCreateSecurity;
}(SpeakeasyBase));
export { IamProjectsLocationsWorkloadIdentityPoolsProvidersCreateSecurity };
var IamProjectsLocationsWorkloadIdentityPoolsProvidersCreateRequest = /** @class */ (function (_super) {
    __extends(IamProjectsLocationsWorkloadIdentityPoolsProvidersCreateRequest, _super);
    function IamProjectsLocationsWorkloadIdentityPoolsProvidersCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IamProjectsLocationsWorkloadIdentityPoolsProvidersCreatePathParams)
    ], IamProjectsLocationsWorkloadIdentityPoolsProvidersCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IamProjectsLocationsWorkloadIdentityPoolsProvidersCreateQueryParams)
    ], IamProjectsLocationsWorkloadIdentityPoolsProvidersCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.WorkloadIdentityPoolProviderInput)
    ], IamProjectsLocationsWorkloadIdentityPoolsProvidersCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IamProjectsLocationsWorkloadIdentityPoolsProvidersCreateSecurity)
    ], IamProjectsLocationsWorkloadIdentityPoolsProvidersCreateRequest.prototype, "security", void 0);
    return IamProjectsLocationsWorkloadIdentityPoolsProvidersCreateRequest;
}(SpeakeasyBase));
export { IamProjectsLocationsWorkloadIdentityPoolsProvidersCreateRequest };
var IamProjectsLocationsWorkloadIdentityPoolsProvidersCreateResponse = /** @class */ (function (_super) {
    __extends(IamProjectsLocationsWorkloadIdentityPoolsProvidersCreateResponse, _super);
    function IamProjectsLocationsWorkloadIdentityPoolsProvidersCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], IamProjectsLocationsWorkloadIdentityPoolsProvidersCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], IamProjectsLocationsWorkloadIdentityPoolsProvidersCreateResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], IamProjectsLocationsWorkloadIdentityPoolsProvidersCreateResponse.prototype, "statusCode", void 0);
    return IamProjectsLocationsWorkloadIdentityPoolsProvidersCreateResponse;
}(SpeakeasyBase));
export { IamProjectsLocationsWorkloadIdentityPoolsProvidersCreateResponse };
