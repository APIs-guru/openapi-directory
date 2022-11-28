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
var GameservicesProjectsLocationsGameServerDeploymentsTestIamPermissionsPathParams = /** @class */ (function (_super) {
    __extends(GameservicesProjectsLocationsGameServerDeploymentsTestIamPermissionsPathParams, _super);
    function GameservicesProjectsLocationsGameServerDeploymentsTestIamPermissionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], GameservicesProjectsLocationsGameServerDeploymentsTestIamPermissionsPathParams.prototype, "resource", void 0);
    return GameservicesProjectsLocationsGameServerDeploymentsTestIamPermissionsPathParams;
}(SpeakeasyBase));
export { GameservicesProjectsLocationsGameServerDeploymentsTestIamPermissionsPathParams };
var GameservicesProjectsLocationsGameServerDeploymentsTestIamPermissionsQueryParams = /** @class */ (function (_super) {
    __extends(GameservicesProjectsLocationsGameServerDeploymentsTestIamPermissionsQueryParams, _super);
    function GameservicesProjectsLocationsGameServerDeploymentsTestIamPermissionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], GameservicesProjectsLocationsGameServerDeploymentsTestIamPermissionsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], GameservicesProjectsLocationsGameServerDeploymentsTestIamPermissionsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GameservicesProjectsLocationsGameServerDeploymentsTestIamPermissionsQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GameservicesProjectsLocationsGameServerDeploymentsTestIamPermissionsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GameservicesProjectsLocationsGameServerDeploymentsTestIamPermissionsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GameservicesProjectsLocationsGameServerDeploymentsTestIamPermissionsQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GameservicesProjectsLocationsGameServerDeploymentsTestIamPermissionsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GameservicesProjectsLocationsGameServerDeploymentsTestIamPermissionsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GameservicesProjectsLocationsGameServerDeploymentsTestIamPermissionsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], GameservicesProjectsLocationsGameServerDeploymentsTestIamPermissionsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], GameservicesProjectsLocationsGameServerDeploymentsTestIamPermissionsQueryParams.prototype, "uploadProtocol", void 0);
    return GameservicesProjectsLocationsGameServerDeploymentsTestIamPermissionsQueryParams;
}(SpeakeasyBase));
export { GameservicesProjectsLocationsGameServerDeploymentsTestIamPermissionsQueryParams };
var GameservicesProjectsLocationsGameServerDeploymentsTestIamPermissionsSecurity = /** @class */ (function (_super) {
    __extends(GameservicesProjectsLocationsGameServerDeploymentsTestIamPermissionsSecurity, _super);
    function GameservicesProjectsLocationsGameServerDeploymentsTestIamPermissionsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GameservicesProjectsLocationsGameServerDeploymentsTestIamPermissionsSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GameservicesProjectsLocationsGameServerDeploymentsTestIamPermissionsSecurity.prototype, "oauth2c", void 0);
    return GameservicesProjectsLocationsGameServerDeploymentsTestIamPermissionsSecurity;
}(SpeakeasyBase));
export { GameservicesProjectsLocationsGameServerDeploymentsTestIamPermissionsSecurity };
var GameservicesProjectsLocationsGameServerDeploymentsTestIamPermissionsRequest = /** @class */ (function (_super) {
    __extends(GameservicesProjectsLocationsGameServerDeploymentsTestIamPermissionsRequest, _super);
    function GameservicesProjectsLocationsGameServerDeploymentsTestIamPermissionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GameservicesProjectsLocationsGameServerDeploymentsTestIamPermissionsPathParams)
    ], GameservicesProjectsLocationsGameServerDeploymentsTestIamPermissionsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GameservicesProjectsLocationsGameServerDeploymentsTestIamPermissionsQueryParams)
    ], GameservicesProjectsLocationsGameServerDeploymentsTestIamPermissionsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.TestIamPermissionsRequest)
    ], GameservicesProjectsLocationsGameServerDeploymentsTestIamPermissionsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GameservicesProjectsLocationsGameServerDeploymentsTestIamPermissionsSecurity)
    ], GameservicesProjectsLocationsGameServerDeploymentsTestIamPermissionsRequest.prototype, "security", void 0);
    return GameservicesProjectsLocationsGameServerDeploymentsTestIamPermissionsRequest;
}(SpeakeasyBase));
export { GameservicesProjectsLocationsGameServerDeploymentsTestIamPermissionsRequest };
var GameservicesProjectsLocationsGameServerDeploymentsTestIamPermissionsResponse = /** @class */ (function (_super) {
    __extends(GameservicesProjectsLocationsGameServerDeploymentsTestIamPermissionsResponse, _super);
    function GameservicesProjectsLocationsGameServerDeploymentsTestIamPermissionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GameservicesProjectsLocationsGameServerDeploymentsTestIamPermissionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GameservicesProjectsLocationsGameServerDeploymentsTestIamPermissionsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TestIamPermissionsResponse)
    ], GameservicesProjectsLocationsGameServerDeploymentsTestIamPermissionsResponse.prototype, "testIamPermissionsResponse", void 0);
    return GameservicesProjectsLocationsGameServerDeploymentsTestIamPermissionsResponse;
}(SpeakeasyBase));
export { GameservicesProjectsLocationsGameServerDeploymentsTestIamPermissionsResponse };
