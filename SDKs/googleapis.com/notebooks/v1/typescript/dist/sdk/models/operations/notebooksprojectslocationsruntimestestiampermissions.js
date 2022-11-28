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
var NotebooksProjectsLocationsRuntimesTestIamPermissionsPathParams = /** @class */ (function (_super) {
    __extends(NotebooksProjectsLocationsRuntimesTestIamPermissionsPathParams, _super);
    function NotebooksProjectsLocationsRuntimesTestIamPermissionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsRuntimesTestIamPermissionsPathParams.prototype, "resource", void 0);
    return NotebooksProjectsLocationsRuntimesTestIamPermissionsPathParams;
}(SpeakeasyBase));
export { NotebooksProjectsLocationsRuntimesTestIamPermissionsPathParams };
var NotebooksProjectsLocationsRuntimesTestIamPermissionsQueryParams = /** @class */ (function (_super) {
    __extends(NotebooksProjectsLocationsRuntimesTestIamPermissionsQueryParams, _super);
    function NotebooksProjectsLocationsRuntimesTestIamPermissionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsRuntimesTestIamPermissionsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsRuntimesTestIamPermissionsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsRuntimesTestIamPermissionsQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsRuntimesTestIamPermissionsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsRuntimesTestIamPermissionsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsRuntimesTestIamPermissionsQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsRuntimesTestIamPermissionsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], NotebooksProjectsLocationsRuntimesTestIamPermissionsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsRuntimesTestIamPermissionsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsRuntimesTestIamPermissionsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsRuntimesTestIamPermissionsQueryParams.prototype, "uploadProtocol", void 0);
    return NotebooksProjectsLocationsRuntimesTestIamPermissionsQueryParams;
}(SpeakeasyBase));
export { NotebooksProjectsLocationsRuntimesTestIamPermissionsQueryParams };
var NotebooksProjectsLocationsRuntimesTestIamPermissionsSecurity = /** @class */ (function (_super) {
    __extends(NotebooksProjectsLocationsRuntimesTestIamPermissionsSecurity, _super);
    function NotebooksProjectsLocationsRuntimesTestIamPermissionsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], NotebooksProjectsLocationsRuntimesTestIamPermissionsSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], NotebooksProjectsLocationsRuntimesTestIamPermissionsSecurity.prototype, "oauth2c", void 0);
    return NotebooksProjectsLocationsRuntimesTestIamPermissionsSecurity;
}(SpeakeasyBase));
export { NotebooksProjectsLocationsRuntimesTestIamPermissionsSecurity };
var NotebooksProjectsLocationsRuntimesTestIamPermissionsRequest = /** @class */ (function (_super) {
    __extends(NotebooksProjectsLocationsRuntimesTestIamPermissionsRequest, _super);
    function NotebooksProjectsLocationsRuntimesTestIamPermissionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NotebooksProjectsLocationsRuntimesTestIamPermissionsPathParams)
    ], NotebooksProjectsLocationsRuntimesTestIamPermissionsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NotebooksProjectsLocationsRuntimesTestIamPermissionsQueryParams)
    ], NotebooksProjectsLocationsRuntimesTestIamPermissionsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.TestIamPermissionsRequest)
    ], NotebooksProjectsLocationsRuntimesTestIamPermissionsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NotebooksProjectsLocationsRuntimesTestIamPermissionsSecurity)
    ], NotebooksProjectsLocationsRuntimesTestIamPermissionsRequest.prototype, "security", void 0);
    return NotebooksProjectsLocationsRuntimesTestIamPermissionsRequest;
}(SpeakeasyBase));
export { NotebooksProjectsLocationsRuntimesTestIamPermissionsRequest };
var NotebooksProjectsLocationsRuntimesTestIamPermissionsResponse = /** @class */ (function (_super) {
    __extends(NotebooksProjectsLocationsRuntimesTestIamPermissionsResponse, _super);
    function NotebooksProjectsLocationsRuntimesTestIamPermissionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], NotebooksProjectsLocationsRuntimesTestIamPermissionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], NotebooksProjectsLocationsRuntimesTestIamPermissionsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TestIamPermissionsResponse)
    ], NotebooksProjectsLocationsRuntimesTestIamPermissionsResponse.prototype, "testIamPermissionsResponse", void 0);
    return NotebooksProjectsLocationsRuntimesTestIamPermissionsResponse;
}(SpeakeasyBase));
export { NotebooksProjectsLocationsRuntimesTestIamPermissionsResponse };
