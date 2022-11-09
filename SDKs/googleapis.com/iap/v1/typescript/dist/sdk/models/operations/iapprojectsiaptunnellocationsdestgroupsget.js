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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var IapProjectsIapTunnelLocationsDestGroupsGetPathParams = /** @class */ (function (_super) {
    __extends(IapProjectsIapTunnelLocationsDestGroupsGetPathParams, _super);
    function IapProjectsIapTunnelLocationsDestGroupsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], IapProjectsIapTunnelLocationsDestGroupsGetPathParams.prototype, "name", void 0);
    return IapProjectsIapTunnelLocationsDestGroupsGetPathParams;
}(SpeakeasyBase));
export { IapProjectsIapTunnelLocationsDestGroupsGetPathParams };
var IapProjectsIapTunnelLocationsDestGroupsGetQueryParams = /** @class */ (function (_super) {
    __extends(IapProjectsIapTunnelLocationsDestGroupsGetQueryParams, _super);
    function IapProjectsIapTunnelLocationsDestGroupsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], IapProjectsIapTunnelLocationsDestGroupsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], IapProjectsIapTunnelLocationsDestGroupsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], IapProjectsIapTunnelLocationsDestGroupsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], IapProjectsIapTunnelLocationsDestGroupsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], IapProjectsIapTunnelLocationsDestGroupsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], IapProjectsIapTunnelLocationsDestGroupsGetQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], IapProjectsIapTunnelLocationsDestGroupsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], IapProjectsIapTunnelLocationsDestGroupsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], IapProjectsIapTunnelLocationsDestGroupsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], IapProjectsIapTunnelLocationsDestGroupsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], IapProjectsIapTunnelLocationsDestGroupsGetQueryParams.prototype, "uploadProtocol", void 0);
    return IapProjectsIapTunnelLocationsDestGroupsGetQueryParams;
}(SpeakeasyBase));
export { IapProjectsIapTunnelLocationsDestGroupsGetQueryParams };
var IapProjectsIapTunnelLocationsDestGroupsGetSecurity = /** @class */ (function (_super) {
    __extends(IapProjectsIapTunnelLocationsDestGroupsGetSecurity, _super);
    function IapProjectsIapTunnelLocationsDestGroupsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], IapProjectsIapTunnelLocationsDestGroupsGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], IapProjectsIapTunnelLocationsDestGroupsGetSecurity.prototype, "oauth2c", void 0);
    return IapProjectsIapTunnelLocationsDestGroupsGetSecurity;
}(SpeakeasyBase));
export { IapProjectsIapTunnelLocationsDestGroupsGetSecurity };
var IapProjectsIapTunnelLocationsDestGroupsGetRequest = /** @class */ (function (_super) {
    __extends(IapProjectsIapTunnelLocationsDestGroupsGetRequest, _super);
    function IapProjectsIapTunnelLocationsDestGroupsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", IapProjectsIapTunnelLocationsDestGroupsGetPathParams)
    ], IapProjectsIapTunnelLocationsDestGroupsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", IapProjectsIapTunnelLocationsDestGroupsGetQueryParams)
    ], IapProjectsIapTunnelLocationsDestGroupsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", IapProjectsIapTunnelLocationsDestGroupsGetSecurity)
    ], IapProjectsIapTunnelLocationsDestGroupsGetRequest.prototype, "security", void 0);
    return IapProjectsIapTunnelLocationsDestGroupsGetRequest;
}(SpeakeasyBase));
export { IapProjectsIapTunnelLocationsDestGroupsGetRequest };
var IapProjectsIapTunnelLocationsDestGroupsGetResponse = /** @class */ (function (_super) {
    __extends(IapProjectsIapTunnelLocationsDestGroupsGetResponse, _super);
    function IapProjectsIapTunnelLocationsDestGroupsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], IapProjectsIapTunnelLocationsDestGroupsGetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], IapProjectsIapTunnelLocationsDestGroupsGetResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.TunnelDestGroup)
    ], IapProjectsIapTunnelLocationsDestGroupsGetResponse.prototype, "tunnelDestGroup", void 0);
    return IapProjectsIapTunnelLocationsDestGroupsGetResponse;
}(SpeakeasyBase));
export { IapProjectsIapTunnelLocationsDestGroupsGetResponse };
