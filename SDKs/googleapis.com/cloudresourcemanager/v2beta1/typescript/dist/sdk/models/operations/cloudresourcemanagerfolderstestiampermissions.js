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
var CloudresourcemanagerFoldersTestIamPermissionsPathParams = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerFoldersTestIamPermissionsPathParams, _super);
    function CloudresourcemanagerFoldersTestIamPermissionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerFoldersTestIamPermissionsPathParams.prototype, "resource", void 0);
    return CloudresourcemanagerFoldersTestIamPermissionsPathParams;
}(SpeakeasyBase));
export { CloudresourcemanagerFoldersTestIamPermissionsPathParams };
var CloudresourcemanagerFoldersTestIamPermissionsQueryParams = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerFoldersTestIamPermissionsQueryParams, _super);
    function CloudresourcemanagerFoldersTestIamPermissionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerFoldersTestIamPermissionsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerFoldersTestIamPermissionsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerFoldersTestIamPermissionsQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerFoldersTestIamPermissionsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerFoldersTestIamPermissionsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerFoldersTestIamPermissionsQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerFoldersTestIamPermissionsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudresourcemanagerFoldersTestIamPermissionsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerFoldersTestIamPermissionsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerFoldersTestIamPermissionsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerFoldersTestIamPermissionsQueryParams.prototype, "uploadProtocol", void 0);
    return CloudresourcemanagerFoldersTestIamPermissionsQueryParams;
}(SpeakeasyBase));
export { CloudresourcemanagerFoldersTestIamPermissionsQueryParams };
var CloudresourcemanagerFoldersTestIamPermissionsSecurity = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerFoldersTestIamPermissionsSecurity, _super);
    function CloudresourcemanagerFoldersTestIamPermissionsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudresourcemanagerFoldersTestIamPermissionsSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudresourcemanagerFoldersTestIamPermissionsSecurity.prototype, "oauth2c", void 0);
    return CloudresourcemanagerFoldersTestIamPermissionsSecurity;
}(SpeakeasyBase));
export { CloudresourcemanagerFoldersTestIamPermissionsSecurity };
var CloudresourcemanagerFoldersTestIamPermissionsRequest = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerFoldersTestIamPermissionsRequest, _super);
    function CloudresourcemanagerFoldersTestIamPermissionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudresourcemanagerFoldersTestIamPermissionsPathParams)
    ], CloudresourcemanagerFoldersTestIamPermissionsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudresourcemanagerFoldersTestIamPermissionsQueryParams)
    ], CloudresourcemanagerFoldersTestIamPermissionsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.TestIamPermissionsRequest)
    ], CloudresourcemanagerFoldersTestIamPermissionsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudresourcemanagerFoldersTestIamPermissionsSecurity)
    ], CloudresourcemanagerFoldersTestIamPermissionsRequest.prototype, "security", void 0);
    return CloudresourcemanagerFoldersTestIamPermissionsRequest;
}(SpeakeasyBase));
export { CloudresourcemanagerFoldersTestIamPermissionsRequest };
var CloudresourcemanagerFoldersTestIamPermissionsResponse = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerFoldersTestIamPermissionsResponse, _super);
    function CloudresourcemanagerFoldersTestIamPermissionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudresourcemanagerFoldersTestIamPermissionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudresourcemanagerFoldersTestIamPermissionsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TestIamPermissionsResponse)
    ], CloudresourcemanagerFoldersTestIamPermissionsResponse.prototype, "testIamPermissionsResponse", void 0);
    return CloudresourcemanagerFoldersTestIamPermissionsResponse;
}(SpeakeasyBase));
export { CloudresourcemanagerFoldersTestIamPermissionsResponse };
