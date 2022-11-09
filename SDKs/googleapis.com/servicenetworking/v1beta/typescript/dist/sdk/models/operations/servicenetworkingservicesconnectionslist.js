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
var ServicenetworkingServicesConnectionsListPathParams = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesConnectionsListPathParams, _super);
    function ServicenetworkingServicesConnectionsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesConnectionsListPathParams.prototype, "parent", void 0);
    return ServicenetworkingServicesConnectionsListPathParams;
}(SpeakeasyBase));
export { ServicenetworkingServicesConnectionsListPathParams };
var ServicenetworkingServicesConnectionsListQueryParams = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesConnectionsListQueryParams, _super);
    function ServicenetworkingServicesConnectionsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesConnectionsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesConnectionsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesConnectionsListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesConnectionsListQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesConnectionsListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesConnectionsListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=network" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesConnectionsListQueryParams.prototype, "network", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesConnectionsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ServicenetworkingServicesConnectionsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesConnectionsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesConnectionsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesConnectionsListQueryParams.prototype, "uploadProtocol", void 0);
    return ServicenetworkingServicesConnectionsListQueryParams;
}(SpeakeasyBase));
export { ServicenetworkingServicesConnectionsListQueryParams };
var ServicenetworkingServicesConnectionsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesConnectionsListSecurityOption1, _super);
    function ServicenetworkingServicesConnectionsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicenetworkingServicesConnectionsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicenetworkingServicesConnectionsListSecurityOption1.prototype, "oauth2c", void 0);
    return ServicenetworkingServicesConnectionsListSecurityOption1;
}(SpeakeasyBase));
export { ServicenetworkingServicesConnectionsListSecurityOption1 };
var ServicenetworkingServicesConnectionsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesConnectionsListSecurityOption2, _super);
    function ServicenetworkingServicesConnectionsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicenetworkingServicesConnectionsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicenetworkingServicesConnectionsListSecurityOption2.prototype, "oauth2c", void 0);
    return ServicenetworkingServicesConnectionsListSecurityOption2;
}(SpeakeasyBase));
export { ServicenetworkingServicesConnectionsListSecurityOption2 };
var ServicenetworkingServicesConnectionsListSecurity = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesConnectionsListSecurity, _super);
    function ServicenetworkingServicesConnectionsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", ServicenetworkingServicesConnectionsListSecurityOption1)
    ], ServicenetworkingServicesConnectionsListSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", ServicenetworkingServicesConnectionsListSecurityOption2)
    ], ServicenetworkingServicesConnectionsListSecurity.prototype, "option2", void 0);
    return ServicenetworkingServicesConnectionsListSecurity;
}(SpeakeasyBase));
export { ServicenetworkingServicesConnectionsListSecurity };
var ServicenetworkingServicesConnectionsListRequest = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesConnectionsListRequest, _super);
    function ServicenetworkingServicesConnectionsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ServicenetworkingServicesConnectionsListPathParams)
    ], ServicenetworkingServicesConnectionsListRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ServicenetworkingServicesConnectionsListQueryParams)
    ], ServicenetworkingServicesConnectionsListRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ServicenetworkingServicesConnectionsListSecurity)
    ], ServicenetworkingServicesConnectionsListRequest.prototype, "security", void 0);
    return ServicenetworkingServicesConnectionsListRequest;
}(SpeakeasyBase));
export { ServicenetworkingServicesConnectionsListRequest };
var ServicenetworkingServicesConnectionsListResponse = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesConnectionsListResponse, _super);
    function ServicenetworkingServicesConnectionsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ServicenetworkingServicesConnectionsListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListConnectionsResponse)
    ], ServicenetworkingServicesConnectionsListResponse.prototype, "listConnectionsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ServicenetworkingServicesConnectionsListResponse.prototype, "statusCode", void 0);
    return ServicenetworkingServicesConnectionsListResponse;
}(SpeakeasyBase));
export { ServicenetworkingServicesConnectionsListResponse };
