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
var CreateOrganizationSamlIdpPathParams = /** @class */ (function (_super) {
    __extends(CreateOrganizationSamlIdpPathParams, _super);
    function CreateOrganizationSamlIdpPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" }),
        __metadata("design:type", String)
    ], CreateOrganizationSamlIdpPathParams.prototype, "organizationId", void 0);
    return CreateOrganizationSamlIdpPathParams;
}(SpeakeasyBase));
export { CreateOrganizationSamlIdpPathParams };
var CreateOrganizationSamlIdpRequestBody = /** @class */ (function (_super) {
    __extends(CreateOrganizationSamlIdpRequestBody, _super);
    function CreateOrganizationSamlIdpRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sloLogoutUrl" }),
        __metadata("design:type", String)
    ], CreateOrganizationSamlIdpRequestBody.prototype, "sloLogoutUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=x509certSha1Fingerprint" }),
        __metadata("design:type", String)
    ], CreateOrganizationSamlIdpRequestBody.prototype, "x509certSha1Fingerprint", void 0);
    return CreateOrganizationSamlIdpRequestBody;
}(SpeakeasyBase));
export { CreateOrganizationSamlIdpRequestBody };
var CreateOrganizationSamlIdpRequest = /** @class */ (function (_super) {
    __extends(CreateOrganizationSamlIdpRequest, _super);
    function CreateOrganizationSamlIdpRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateOrganizationSamlIdpPathParams)
    ], CreateOrganizationSamlIdpRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateOrganizationSamlIdpRequestBody)
    ], CreateOrganizationSamlIdpRequest.prototype, "request", void 0);
    return CreateOrganizationSamlIdpRequest;
}(SpeakeasyBase));
export { CreateOrganizationSamlIdpRequest };
var CreateOrganizationSamlIdpResponse = /** @class */ (function (_super) {
    __extends(CreateOrganizationSamlIdpResponse, _super);
    function CreateOrganizationSamlIdpResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateOrganizationSamlIdpResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateOrganizationSamlIdpResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], CreateOrganizationSamlIdpResponse.prototype, "createOrganizationSamlIdp201ApplicationJsonObject", void 0);
    return CreateOrganizationSamlIdpResponse;
}(SpeakeasyBase));
export { CreateOrganizationSamlIdpResponse };
