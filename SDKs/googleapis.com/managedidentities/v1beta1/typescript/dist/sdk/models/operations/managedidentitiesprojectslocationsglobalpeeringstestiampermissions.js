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
var ManagedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissionsPathParams = /** @class */ (function (_super) {
    __extends(ManagedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissionsPathParams, _super);
    function ManagedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], ManagedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissionsPathParams.prototype, "resource", void 0);
    return ManagedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissionsPathParams;
}(SpeakeasyBase));
export { ManagedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissionsPathParams };
var ManagedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissionsQueryParams = /** @class */ (function (_super) {
    __extends(ManagedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissionsQueryParams, _super);
    function ManagedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ManagedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissionsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ManagedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissionsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ManagedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissionsQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ManagedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissionsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ManagedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissionsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ManagedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissionsQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ManagedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissionsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ManagedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissionsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ManagedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissionsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ManagedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissionsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ManagedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissionsQueryParams.prototype, "uploadProtocol", void 0);
    return ManagedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissionsQueryParams;
}(SpeakeasyBase));
export { ManagedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissionsQueryParams };
var ManagedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissionsSecurity = /** @class */ (function (_super) {
    __extends(ManagedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissionsSecurity, _super);
    function ManagedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissionsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ManagedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissionsSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ManagedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissionsSecurity.prototype, "oauth2c", void 0);
    return ManagedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissionsSecurity;
}(SpeakeasyBase));
export { ManagedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissionsSecurity };
var ManagedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissionsRequest = /** @class */ (function (_super) {
    __extends(ManagedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissionsRequest, _super);
    function ManagedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ManagedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissionsPathParams)
    ], ManagedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissionsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ManagedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissionsQueryParams)
    ], ManagedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissionsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.TestIamPermissionsRequest)
    ], ManagedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissionsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ManagedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissionsSecurity)
    ], ManagedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissionsRequest.prototype, "security", void 0);
    return ManagedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissionsRequest;
}(SpeakeasyBase));
export { ManagedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissionsRequest };
var ManagedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissionsResponse = /** @class */ (function (_super) {
    __extends(ManagedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissionsResponse, _super);
    function ManagedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ManagedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ManagedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissionsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TestIamPermissionsResponse)
    ], ManagedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissionsResponse.prototype, "testIamPermissionsResponse", void 0);
    return ManagedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissionsResponse;
}(SpeakeasyBase));
export { ManagedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissionsResponse };
