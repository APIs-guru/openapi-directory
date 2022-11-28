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
var IdsProjectsLocationsEndpointsTestIamPermissionsPathParams = /** @class */ (function (_super) {
    __extends(IdsProjectsLocationsEndpointsTestIamPermissionsPathParams, _super);
    function IdsProjectsLocationsEndpointsTestIamPermissionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], IdsProjectsLocationsEndpointsTestIamPermissionsPathParams.prototype, "resource", void 0);
    return IdsProjectsLocationsEndpointsTestIamPermissionsPathParams;
}(SpeakeasyBase));
export { IdsProjectsLocationsEndpointsTestIamPermissionsPathParams };
var IdsProjectsLocationsEndpointsTestIamPermissionsQueryParams = /** @class */ (function (_super) {
    __extends(IdsProjectsLocationsEndpointsTestIamPermissionsQueryParams, _super);
    function IdsProjectsLocationsEndpointsTestIamPermissionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], IdsProjectsLocationsEndpointsTestIamPermissionsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], IdsProjectsLocationsEndpointsTestIamPermissionsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], IdsProjectsLocationsEndpointsTestIamPermissionsQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], IdsProjectsLocationsEndpointsTestIamPermissionsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], IdsProjectsLocationsEndpointsTestIamPermissionsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], IdsProjectsLocationsEndpointsTestIamPermissionsQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], IdsProjectsLocationsEndpointsTestIamPermissionsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], IdsProjectsLocationsEndpointsTestIamPermissionsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], IdsProjectsLocationsEndpointsTestIamPermissionsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], IdsProjectsLocationsEndpointsTestIamPermissionsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], IdsProjectsLocationsEndpointsTestIamPermissionsQueryParams.prototype, "uploadProtocol", void 0);
    return IdsProjectsLocationsEndpointsTestIamPermissionsQueryParams;
}(SpeakeasyBase));
export { IdsProjectsLocationsEndpointsTestIamPermissionsQueryParams };
var IdsProjectsLocationsEndpointsTestIamPermissionsSecurity = /** @class */ (function (_super) {
    __extends(IdsProjectsLocationsEndpointsTestIamPermissionsSecurity, _super);
    function IdsProjectsLocationsEndpointsTestIamPermissionsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], IdsProjectsLocationsEndpointsTestIamPermissionsSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], IdsProjectsLocationsEndpointsTestIamPermissionsSecurity.prototype, "oauth2c", void 0);
    return IdsProjectsLocationsEndpointsTestIamPermissionsSecurity;
}(SpeakeasyBase));
export { IdsProjectsLocationsEndpointsTestIamPermissionsSecurity };
var IdsProjectsLocationsEndpointsTestIamPermissionsRequest = /** @class */ (function (_super) {
    __extends(IdsProjectsLocationsEndpointsTestIamPermissionsRequest, _super);
    function IdsProjectsLocationsEndpointsTestIamPermissionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IdsProjectsLocationsEndpointsTestIamPermissionsPathParams)
    ], IdsProjectsLocationsEndpointsTestIamPermissionsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IdsProjectsLocationsEndpointsTestIamPermissionsQueryParams)
    ], IdsProjectsLocationsEndpointsTestIamPermissionsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.TestIamPermissionsRequest)
    ], IdsProjectsLocationsEndpointsTestIamPermissionsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IdsProjectsLocationsEndpointsTestIamPermissionsSecurity)
    ], IdsProjectsLocationsEndpointsTestIamPermissionsRequest.prototype, "security", void 0);
    return IdsProjectsLocationsEndpointsTestIamPermissionsRequest;
}(SpeakeasyBase));
export { IdsProjectsLocationsEndpointsTestIamPermissionsRequest };
var IdsProjectsLocationsEndpointsTestIamPermissionsResponse = /** @class */ (function (_super) {
    __extends(IdsProjectsLocationsEndpointsTestIamPermissionsResponse, _super);
    function IdsProjectsLocationsEndpointsTestIamPermissionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], IdsProjectsLocationsEndpointsTestIamPermissionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], IdsProjectsLocationsEndpointsTestIamPermissionsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TestIamPermissionsResponse)
    ], IdsProjectsLocationsEndpointsTestIamPermissionsResponse.prototype, "testIamPermissionsResponse", void 0);
    return IdsProjectsLocationsEndpointsTestIamPermissionsResponse;
}(SpeakeasyBase));
export { IdsProjectsLocationsEndpointsTestIamPermissionsResponse };
