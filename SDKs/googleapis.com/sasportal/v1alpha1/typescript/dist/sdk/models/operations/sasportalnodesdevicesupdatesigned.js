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
var SasportalNodesDevicesUpdateSignedPathParams = /** @class */ (function (_super) {
    __extends(SasportalNodesDevicesUpdateSignedPathParams, _super);
    function SasportalNodesDevicesUpdateSignedPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], SasportalNodesDevicesUpdateSignedPathParams.prototype, "name", void 0);
    return SasportalNodesDevicesUpdateSignedPathParams;
}(SpeakeasyBase));
export { SasportalNodesDevicesUpdateSignedPathParams };
var SasportalNodesDevicesUpdateSignedQueryParams = /** @class */ (function (_super) {
    __extends(SasportalNodesDevicesUpdateSignedQueryParams, _super);
    function SasportalNodesDevicesUpdateSignedQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SasportalNodesDevicesUpdateSignedQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SasportalNodesDevicesUpdateSignedQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SasportalNodesDevicesUpdateSignedQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SasportalNodesDevicesUpdateSignedQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SasportalNodesDevicesUpdateSignedQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SasportalNodesDevicesUpdateSignedQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SasportalNodesDevicesUpdateSignedQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SasportalNodesDevicesUpdateSignedQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SasportalNodesDevicesUpdateSignedQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SasportalNodesDevicesUpdateSignedQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SasportalNodesDevicesUpdateSignedQueryParams.prototype, "uploadProtocol", void 0);
    return SasportalNodesDevicesUpdateSignedQueryParams;
}(SpeakeasyBase));
export { SasportalNodesDevicesUpdateSignedQueryParams };
var SasportalNodesDevicesUpdateSignedSecurity = /** @class */ (function (_super) {
    __extends(SasportalNodesDevicesUpdateSignedSecurity, _super);
    function SasportalNodesDevicesUpdateSignedSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SasportalNodesDevicesUpdateSignedSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SasportalNodesDevicesUpdateSignedSecurity.prototype, "oauth2c", void 0);
    return SasportalNodesDevicesUpdateSignedSecurity;
}(SpeakeasyBase));
export { SasportalNodesDevicesUpdateSignedSecurity };
var SasportalNodesDevicesUpdateSignedRequest = /** @class */ (function (_super) {
    __extends(SasportalNodesDevicesUpdateSignedRequest, _super);
    function SasportalNodesDevicesUpdateSignedRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SasportalNodesDevicesUpdateSignedPathParams)
    ], SasportalNodesDevicesUpdateSignedRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SasportalNodesDevicesUpdateSignedQueryParams)
    ], SasportalNodesDevicesUpdateSignedRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SasPortalUpdateSignedDeviceRequest)
    ], SasportalNodesDevicesUpdateSignedRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SasportalNodesDevicesUpdateSignedSecurity)
    ], SasportalNodesDevicesUpdateSignedRequest.prototype, "security", void 0);
    return SasportalNodesDevicesUpdateSignedRequest;
}(SpeakeasyBase));
export { SasportalNodesDevicesUpdateSignedRequest };
var SasportalNodesDevicesUpdateSignedResponse = /** @class */ (function (_super) {
    __extends(SasportalNodesDevicesUpdateSignedResponse, _super);
    function SasportalNodesDevicesUpdateSignedResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SasportalNodesDevicesUpdateSignedResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SasPortalDevice)
    ], SasportalNodesDevicesUpdateSignedResponse.prototype, "sasPortalDevice", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SasportalNodesDevicesUpdateSignedResponse.prototype, "statusCode", void 0);
    return SasportalNodesDevicesUpdateSignedResponse;
}(SpeakeasyBase));
export { SasportalNodesDevicesUpdateSignedResponse };
