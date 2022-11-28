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
var SasportalNodesNodesDevicesCreateSignedPathParams = /** @class */ (function (_super) {
    __extends(SasportalNodesNodesDevicesCreateSignedPathParams, _super);
    function SasportalNodesNodesDevicesCreateSignedPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], SasportalNodesNodesDevicesCreateSignedPathParams.prototype, "parent", void 0);
    return SasportalNodesNodesDevicesCreateSignedPathParams;
}(SpeakeasyBase));
export { SasportalNodesNodesDevicesCreateSignedPathParams };
var SasportalNodesNodesDevicesCreateSignedQueryParams = /** @class */ (function (_super) {
    __extends(SasportalNodesNodesDevicesCreateSignedQueryParams, _super);
    function SasportalNodesNodesDevicesCreateSignedQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SasportalNodesNodesDevicesCreateSignedQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SasportalNodesNodesDevicesCreateSignedQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SasportalNodesNodesDevicesCreateSignedQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SasportalNodesNodesDevicesCreateSignedQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SasportalNodesNodesDevicesCreateSignedQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SasportalNodesNodesDevicesCreateSignedQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SasportalNodesNodesDevicesCreateSignedQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SasportalNodesNodesDevicesCreateSignedQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SasportalNodesNodesDevicesCreateSignedQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SasportalNodesNodesDevicesCreateSignedQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SasportalNodesNodesDevicesCreateSignedQueryParams.prototype, "uploadProtocol", void 0);
    return SasportalNodesNodesDevicesCreateSignedQueryParams;
}(SpeakeasyBase));
export { SasportalNodesNodesDevicesCreateSignedQueryParams };
var SasportalNodesNodesDevicesCreateSignedSecurity = /** @class */ (function (_super) {
    __extends(SasportalNodesNodesDevicesCreateSignedSecurity, _super);
    function SasportalNodesNodesDevicesCreateSignedSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SasportalNodesNodesDevicesCreateSignedSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SasportalNodesNodesDevicesCreateSignedSecurity.prototype, "oauth2c", void 0);
    return SasportalNodesNodesDevicesCreateSignedSecurity;
}(SpeakeasyBase));
export { SasportalNodesNodesDevicesCreateSignedSecurity };
var SasportalNodesNodesDevicesCreateSignedRequest = /** @class */ (function (_super) {
    __extends(SasportalNodesNodesDevicesCreateSignedRequest, _super);
    function SasportalNodesNodesDevicesCreateSignedRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SasportalNodesNodesDevicesCreateSignedPathParams)
    ], SasportalNodesNodesDevicesCreateSignedRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SasportalNodesNodesDevicesCreateSignedQueryParams)
    ], SasportalNodesNodesDevicesCreateSignedRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SasPortalCreateSignedDeviceRequest)
    ], SasportalNodesNodesDevicesCreateSignedRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SasportalNodesNodesDevicesCreateSignedSecurity)
    ], SasportalNodesNodesDevicesCreateSignedRequest.prototype, "security", void 0);
    return SasportalNodesNodesDevicesCreateSignedRequest;
}(SpeakeasyBase));
export { SasportalNodesNodesDevicesCreateSignedRequest };
var SasportalNodesNodesDevicesCreateSignedResponse = /** @class */ (function (_super) {
    __extends(SasportalNodesNodesDevicesCreateSignedResponse, _super);
    function SasportalNodesNodesDevicesCreateSignedResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SasportalNodesNodesDevicesCreateSignedResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SasPortalDevice)
    ], SasportalNodesNodesDevicesCreateSignedResponse.prototype, "sasPortalDevice", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SasportalNodesNodesDevicesCreateSignedResponse.prototype, "statusCode", void 0);
    return SasportalNodesNodesDevicesCreateSignedResponse;
}(SpeakeasyBase));
export { SasportalNodesNodesDevicesCreateSignedResponse };
