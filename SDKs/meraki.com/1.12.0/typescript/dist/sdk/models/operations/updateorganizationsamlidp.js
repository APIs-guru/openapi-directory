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
var UpdateOrganizationSamlIdpPathParams = /** @class */ (function (_super) {
    __extends(UpdateOrganizationSamlIdpPathParams, _super);
    function UpdateOrganizationSamlIdpPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=idpId" }),
        __metadata("design:type", String)
    ], UpdateOrganizationSamlIdpPathParams.prototype, "idpId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" }),
        __metadata("design:type", String)
    ], UpdateOrganizationSamlIdpPathParams.prototype, "organizationId", void 0);
    return UpdateOrganizationSamlIdpPathParams;
}(SpeakeasyBase));
export { UpdateOrganizationSamlIdpPathParams };
var UpdateOrganizationSamlIdpRequestBody = /** @class */ (function (_super) {
    __extends(UpdateOrganizationSamlIdpRequestBody, _super);
    function UpdateOrganizationSamlIdpRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sloLogoutUrl" }),
        __metadata("design:type", String)
    ], UpdateOrganizationSamlIdpRequestBody.prototype, "sloLogoutUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=x509certSha1Fingerprint" }),
        __metadata("design:type", String)
    ], UpdateOrganizationSamlIdpRequestBody.prototype, "x509certSha1Fingerprint", void 0);
    return UpdateOrganizationSamlIdpRequestBody;
}(SpeakeasyBase));
export { UpdateOrganizationSamlIdpRequestBody };
var UpdateOrganizationSamlIdpRequest = /** @class */ (function (_super) {
    __extends(UpdateOrganizationSamlIdpRequest, _super);
    function UpdateOrganizationSamlIdpRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateOrganizationSamlIdpPathParams)
    ], UpdateOrganizationSamlIdpRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateOrganizationSamlIdpRequestBody)
    ], UpdateOrganizationSamlIdpRequest.prototype, "request", void 0);
    return UpdateOrganizationSamlIdpRequest;
}(SpeakeasyBase));
export { UpdateOrganizationSamlIdpRequest };
var UpdateOrganizationSamlIdpResponse = /** @class */ (function (_super) {
    __extends(UpdateOrganizationSamlIdpResponse, _super);
    function UpdateOrganizationSamlIdpResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateOrganizationSamlIdpResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateOrganizationSamlIdpResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateOrganizationSamlIdpResponse.prototype, "updateOrganizationSamlIdp200ApplicationJsonObject", void 0);
    return UpdateOrganizationSamlIdpResponse;
}(SpeakeasyBase));
export { UpdateOrganizationSamlIdpResponse };
