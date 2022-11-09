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
var CloudiotProjectsLocationsRegistriesGroupsDevicesListPathParams = /** @class */ (function (_super) {
    __extends(CloudiotProjectsLocationsRegistriesGroupsDevicesListPathParams, _super);
    function CloudiotProjectsLocationsRegistriesGroupsDevicesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesGroupsDevicesListPathParams.prototype, "parent", void 0);
    return CloudiotProjectsLocationsRegistriesGroupsDevicesListPathParams;
}(SpeakeasyBase));
export { CloudiotProjectsLocationsRegistriesGroupsDevicesListPathParams };
export var CloudiotProjectsLocationsRegistriesGroupsDevicesListGatewayListOptionsGatewayTypeEnum;
(function (CloudiotProjectsLocationsRegistriesGroupsDevicesListGatewayListOptionsGatewayTypeEnum) {
    CloudiotProjectsLocationsRegistriesGroupsDevicesListGatewayListOptionsGatewayTypeEnum["GatewayTypeUnspecified"] = "GATEWAY_TYPE_UNSPECIFIED";
    CloudiotProjectsLocationsRegistriesGroupsDevicesListGatewayListOptionsGatewayTypeEnum["Gateway"] = "GATEWAY";
    CloudiotProjectsLocationsRegistriesGroupsDevicesListGatewayListOptionsGatewayTypeEnum["NonGateway"] = "NON_GATEWAY";
})(CloudiotProjectsLocationsRegistriesGroupsDevicesListGatewayListOptionsGatewayTypeEnum || (CloudiotProjectsLocationsRegistriesGroupsDevicesListGatewayListOptionsGatewayTypeEnum = {}));
var CloudiotProjectsLocationsRegistriesGroupsDevicesListQueryParams = /** @class */ (function (_super) {
    __extends(CloudiotProjectsLocationsRegistriesGroupsDevicesListQueryParams, _super);
    function CloudiotProjectsLocationsRegistriesGroupsDevicesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesGroupsDevicesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesGroupsDevicesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesGroupsDevicesListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesGroupsDevicesListQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=deviceIds" }),
        __metadata("design:type", Array)
    ], CloudiotProjectsLocationsRegistriesGroupsDevicesListQueryParams.prototype, "deviceIds", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=deviceNumIds" }),
        __metadata("design:type", Array)
    ], CloudiotProjectsLocationsRegistriesGroupsDevicesListQueryParams.prototype, "deviceNumIds", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fieldMask" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesGroupsDevicesListQueryParams.prototype, "fieldMask", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesGroupsDevicesListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=gatewayListOptions.associationsDeviceId" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesGroupsDevicesListQueryParams.prototype, "gatewayListOptionsAssociationsDeviceId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=gatewayListOptions.associationsGatewayId" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesGroupsDevicesListQueryParams.prototype, "gatewayListOptionsAssociationsGatewayId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=gatewayListOptions.gatewayType" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesGroupsDevicesListQueryParams.prototype, "gatewayListOptionsGatewayType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesGroupsDevicesListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesGroupsDevicesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], CloudiotProjectsLocationsRegistriesGroupsDevicesListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesGroupsDevicesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudiotProjectsLocationsRegistriesGroupsDevicesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesGroupsDevicesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesGroupsDevicesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesGroupsDevicesListQueryParams.prototype, "uploadProtocol", void 0);
    return CloudiotProjectsLocationsRegistriesGroupsDevicesListQueryParams;
}(SpeakeasyBase));
export { CloudiotProjectsLocationsRegistriesGroupsDevicesListQueryParams };
var CloudiotProjectsLocationsRegistriesGroupsDevicesListSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudiotProjectsLocationsRegistriesGroupsDevicesListSecurityOption1, _super);
    function CloudiotProjectsLocationsRegistriesGroupsDevicesListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudiotProjectsLocationsRegistriesGroupsDevicesListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudiotProjectsLocationsRegistriesGroupsDevicesListSecurityOption1.prototype, "oauth2c", void 0);
    return CloudiotProjectsLocationsRegistriesGroupsDevicesListSecurityOption1;
}(SpeakeasyBase));
export { CloudiotProjectsLocationsRegistriesGroupsDevicesListSecurityOption1 };
var CloudiotProjectsLocationsRegistriesGroupsDevicesListSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudiotProjectsLocationsRegistriesGroupsDevicesListSecurityOption2, _super);
    function CloudiotProjectsLocationsRegistriesGroupsDevicesListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudiotProjectsLocationsRegistriesGroupsDevicesListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudiotProjectsLocationsRegistriesGroupsDevicesListSecurityOption2.prototype, "oauth2c", void 0);
    return CloudiotProjectsLocationsRegistriesGroupsDevicesListSecurityOption2;
}(SpeakeasyBase));
export { CloudiotProjectsLocationsRegistriesGroupsDevicesListSecurityOption2 };
var CloudiotProjectsLocationsRegistriesGroupsDevicesListSecurity = /** @class */ (function (_super) {
    __extends(CloudiotProjectsLocationsRegistriesGroupsDevicesListSecurity, _super);
    function CloudiotProjectsLocationsRegistriesGroupsDevicesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", CloudiotProjectsLocationsRegistriesGroupsDevicesListSecurityOption1)
    ], CloudiotProjectsLocationsRegistriesGroupsDevicesListSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", CloudiotProjectsLocationsRegistriesGroupsDevicesListSecurityOption2)
    ], CloudiotProjectsLocationsRegistriesGroupsDevicesListSecurity.prototype, "option2", void 0);
    return CloudiotProjectsLocationsRegistriesGroupsDevicesListSecurity;
}(SpeakeasyBase));
export { CloudiotProjectsLocationsRegistriesGroupsDevicesListSecurity };
var CloudiotProjectsLocationsRegistriesGroupsDevicesListRequest = /** @class */ (function (_super) {
    __extends(CloudiotProjectsLocationsRegistriesGroupsDevicesListRequest, _super);
    function CloudiotProjectsLocationsRegistriesGroupsDevicesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CloudiotProjectsLocationsRegistriesGroupsDevicesListPathParams)
    ], CloudiotProjectsLocationsRegistriesGroupsDevicesListRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CloudiotProjectsLocationsRegistriesGroupsDevicesListQueryParams)
    ], CloudiotProjectsLocationsRegistriesGroupsDevicesListRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CloudiotProjectsLocationsRegistriesGroupsDevicesListSecurity)
    ], CloudiotProjectsLocationsRegistriesGroupsDevicesListRequest.prototype, "security", void 0);
    return CloudiotProjectsLocationsRegistriesGroupsDevicesListRequest;
}(SpeakeasyBase));
export { CloudiotProjectsLocationsRegistriesGroupsDevicesListRequest };
var CloudiotProjectsLocationsRegistriesGroupsDevicesListResponse = /** @class */ (function (_super) {
    __extends(CloudiotProjectsLocationsRegistriesGroupsDevicesListResponse, _super);
    function CloudiotProjectsLocationsRegistriesGroupsDevicesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesGroupsDevicesListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListDevicesResponse)
    ], CloudiotProjectsLocationsRegistriesGroupsDevicesListResponse.prototype, "listDevicesResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CloudiotProjectsLocationsRegistriesGroupsDevicesListResponse.prototype, "statusCode", void 0);
    return CloudiotProjectsLocationsRegistriesGroupsDevicesListResponse;
}(SpeakeasyBase));
export { CloudiotProjectsLocationsRegistriesGroupsDevicesListResponse };
