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
var IapProjectsIapTunnelLocationsDestGroupsDeletePathParams = /** @class */ (function (_super) {
    __extends(IapProjectsIapTunnelLocationsDestGroupsDeletePathParams, _super);
    function IapProjectsIapTunnelLocationsDestGroupsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], IapProjectsIapTunnelLocationsDestGroupsDeletePathParams.prototype, "name", void 0);
    return IapProjectsIapTunnelLocationsDestGroupsDeletePathParams;
}(SpeakeasyBase));
export { IapProjectsIapTunnelLocationsDestGroupsDeletePathParams };
var IapProjectsIapTunnelLocationsDestGroupsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(IapProjectsIapTunnelLocationsDestGroupsDeleteQueryParams, _super);
    function IapProjectsIapTunnelLocationsDestGroupsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], IapProjectsIapTunnelLocationsDestGroupsDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], IapProjectsIapTunnelLocationsDestGroupsDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], IapProjectsIapTunnelLocationsDestGroupsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], IapProjectsIapTunnelLocationsDestGroupsDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], IapProjectsIapTunnelLocationsDestGroupsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], IapProjectsIapTunnelLocationsDestGroupsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], IapProjectsIapTunnelLocationsDestGroupsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], IapProjectsIapTunnelLocationsDestGroupsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], IapProjectsIapTunnelLocationsDestGroupsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], IapProjectsIapTunnelLocationsDestGroupsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], IapProjectsIapTunnelLocationsDestGroupsDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return IapProjectsIapTunnelLocationsDestGroupsDeleteQueryParams;
}(SpeakeasyBase));
export { IapProjectsIapTunnelLocationsDestGroupsDeleteQueryParams };
var IapProjectsIapTunnelLocationsDestGroupsDeleteSecurity = /** @class */ (function (_super) {
    __extends(IapProjectsIapTunnelLocationsDestGroupsDeleteSecurity, _super);
    function IapProjectsIapTunnelLocationsDestGroupsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], IapProjectsIapTunnelLocationsDestGroupsDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], IapProjectsIapTunnelLocationsDestGroupsDeleteSecurity.prototype, "oauth2c", void 0);
    return IapProjectsIapTunnelLocationsDestGroupsDeleteSecurity;
}(SpeakeasyBase));
export { IapProjectsIapTunnelLocationsDestGroupsDeleteSecurity };
var IapProjectsIapTunnelLocationsDestGroupsDeleteRequest = /** @class */ (function (_super) {
    __extends(IapProjectsIapTunnelLocationsDestGroupsDeleteRequest, _super);
    function IapProjectsIapTunnelLocationsDestGroupsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IapProjectsIapTunnelLocationsDestGroupsDeletePathParams)
    ], IapProjectsIapTunnelLocationsDestGroupsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IapProjectsIapTunnelLocationsDestGroupsDeleteQueryParams)
    ], IapProjectsIapTunnelLocationsDestGroupsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IapProjectsIapTunnelLocationsDestGroupsDeleteSecurity)
    ], IapProjectsIapTunnelLocationsDestGroupsDeleteRequest.prototype, "security", void 0);
    return IapProjectsIapTunnelLocationsDestGroupsDeleteRequest;
}(SpeakeasyBase));
export { IapProjectsIapTunnelLocationsDestGroupsDeleteRequest };
var IapProjectsIapTunnelLocationsDestGroupsDeleteResponse = /** @class */ (function (_super) {
    __extends(IapProjectsIapTunnelLocationsDestGroupsDeleteResponse, _super);
    function IapProjectsIapTunnelLocationsDestGroupsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], IapProjectsIapTunnelLocationsDestGroupsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], IapProjectsIapTunnelLocationsDestGroupsDeleteResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], IapProjectsIapTunnelLocationsDestGroupsDeleteResponse.prototype, "statusCode", void 0);
    return IapProjectsIapTunnelLocationsDestGroupsDeleteResponse;
}(SpeakeasyBase));
export { IapProjectsIapTunnelLocationsDestGroupsDeleteResponse };
