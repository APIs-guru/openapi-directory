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
var ServicenetworkingServicesUpdateConnectionsPathParams = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesUpdateConnectionsPathParams, _super);
    function ServicenetworkingServicesUpdateConnectionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesUpdateConnectionsPathParams.prototype, "name", void 0);
    return ServicenetworkingServicesUpdateConnectionsPathParams;
}(SpeakeasyBase));
export { ServicenetworkingServicesUpdateConnectionsPathParams };
var ServicenetworkingServicesUpdateConnectionsQueryParams = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesUpdateConnectionsQueryParams, _super);
    function ServicenetworkingServicesUpdateConnectionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesUpdateConnectionsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesUpdateConnectionsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesUpdateConnectionsQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesUpdateConnectionsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesUpdateConnectionsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=force" }),
        __metadata("design:type", Boolean)
    ], ServicenetworkingServicesUpdateConnectionsQueryParams.prototype, "force", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesUpdateConnectionsQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesUpdateConnectionsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ServicenetworkingServicesUpdateConnectionsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesUpdateConnectionsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updateMask" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesUpdateConnectionsQueryParams.prototype, "updateMask", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesUpdateConnectionsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesUpdateConnectionsQueryParams.prototype, "uploadProtocol", void 0);
    return ServicenetworkingServicesUpdateConnectionsQueryParams;
}(SpeakeasyBase));
export { ServicenetworkingServicesUpdateConnectionsQueryParams };
var ServicenetworkingServicesUpdateConnectionsSecurityOption1 = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesUpdateConnectionsSecurityOption1, _super);
    function ServicenetworkingServicesUpdateConnectionsSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicenetworkingServicesUpdateConnectionsSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicenetworkingServicesUpdateConnectionsSecurityOption1.prototype, "oauth2c", void 0);
    return ServicenetworkingServicesUpdateConnectionsSecurityOption1;
}(SpeakeasyBase));
export { ServicenetworkingServicesUpdateConnectionsSecurityOption1 };
var ServicenetworkingServicesUpdateConnectionsSecurityOption2 = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesUpdateConnectionsSecurityOption2, _super);
    function ServicenetworkingServicesUpdateConnectionsSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicenetworkingServicesUpdateConnectionsSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicenetworkingServicesUpdateConnectionsSecurityOption2.prototype, "oauth2c", void 0);
    return ServicenetworkingServicesUpdateConnectionsSecurityOption2;
}(SpeakeasyBase));
export { ServicenetworkingServicesUpdateConnectionsSecurityOption2 };
var ServicenetworkingServicesUpdateConnectionsSecurity = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesUpdateConnectionsSecurity, _super);
    function ServicenetworkingServicesUpdateConnectionsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServicenetworkingServicesUpdateConnectionsSecurityOption1)
    ], ServicenetworkingServicesUpdateConnectionsSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServicenetworkingServicesUpdateConnectionsSecurityOption2)
    ], ServicenetworkingServicesUpdateConnectionsSecurity.prototype, "option2", void 0);
    return ServicenetworkingServicesUpdateConnectionsSecurity;
}(SpeakeasyBase));
export { ServicenetworkingServicesUpdateConnectionsSecurity };
var ServicenetworkingServicesUpdateConnectionsRequest = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesUpdateConnectionsRequest, _super);
    function ServicenetworkingServicesUpdateConnectionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicenetworkingServicesUpdateConnectionsPathParams)
    ], ServicenetworkingServicesUpdateConnectionsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicenetworkingServicesUpdateConnectionsQueryParams)
    ], ServicenetworkingServicesUpdateConnectionsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudServicenetworkingV1betaConnection)
    ], ServicenetworkingServicesUpdateConnectionsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicenetworkingServicesUpdateConnectionsSecurity)
    ], ServicenetworkingServicesUpdateConnectionsRequest.prototype, "security", void 0);
    return ServicenetworkingServicesUpdateConnectionsRequest;
}(SpeakeasyBase));
export { ServicenetworkingServicesUpdateConnectionsRequest };
var ServicenetworkingServicesUpdateConnectionsResponse = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesUpdateConnectionsResponse, _super);
    function ServicenetworkingServicesUpdateConnectionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ServicenetworkingServicesUpdateConnectionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], ServicenetworkingServicesUpdateConnectionsResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ServicenetworkingServicesUpdateConnectionsResponse.prototype, "statusCode", void 0);
    return ServicenetworkingServicesUpdateConnectionsResponse;
}(SpeakeasyBase));
export { ServicenetworkingServicesUpdateConnectionsResponse };
