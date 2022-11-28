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
var BinaryauthorizationProjectsAttestorsValidateAttestationOccurrencePathParams = /** @class */ (function (_super) {
    __extends(BinaryauthorizationProjectsAttestorsValidateAttestationOccurrencePathParams, _super);
    function BinaryauthorizationProjectsAttestorsValidateAttestationOccurrencePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=attestor" }),
        __metadata("design:type", String)
    ], BinaryauthorizationProjectsAttestorsValidateAttestationOccurrencePathParams.prototype, "attestor", void 0);
    return BinaryauthorizationProjectsAttestorsValidateAttestationOccurrencePathParams;
}(SpeakeasyBase));
export { BinaryauthorizationProjectsAttestorsValidateAttestationOccurrencePathParams };
var BinaryauthorizationProjectsAttestorsValidateAttestationOccurrenceQueryParams = /** @class */ (function (_super) {
    __extends(BinaryauthorizationProjectsAttestorsValidateAttestationOccurrenceQueryParams, _super);
    function BinaryauthorizationProjectsAttestorsValidateAttestationOccurrenceQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BinaryauthorizationProjectsAttestorsValidateAttestationOccurrenceQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BinaryauthorizationProjectsAttestorsValidateAttestationOccurrenceQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BinaryauthorizationProjectsAttestorsValidateAttestationOccurrenceQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BinaryauthorizationProjectsAttestorsValidateAttestationOccurrenceQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BinaryauthorizationProjectsAttestorsValidateAttestationOccurrenceQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BinaryauthorizationProjectsAttestorsValidateAttestationOccurrenceQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BinaryauthorizationProjectsAttestorsValidateAttestationOccurrenceQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BinaryauthorizationProjectsAttestorsValidateAttestationOccurrenceQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BinaryauthorizationProjectsAttestorsValidateAttestationOccurrenceQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BinaryauthorizationProjectsAttestorsValidateAttestationOccurrenceQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BinaryauthorizationProjectsAttestorsValidateAttestationOccurrenceQueryParams.prototype, "uploadProtocol", void 0);
    return BinaryauthorizationProjectsAttestorsValidateAttestationOccurrenceQueryParams;
}(SpeakeasyBase));
export { BinaryauthorizationProjectsAttestorsValidateAttestationOccurrenceQueryParams };
var BinaryauthorizationProjectsAttestorsValidateAttestationOccurrenceSecurity = /** @class */ (function (_super) {
    __extends(BinaryauthorizationProjectsAttestorsValidateAttestationOccurrenceSecurity, _super);
    function BinaryauthorizationProjectsAttestorsValidateAttestationOccurrenceSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BinaryauthorizationProjectsAttestorsValidateAttestationOccurrenceSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BinaryauthorizationProjectsAttestorsValidateAttestationOccurrenceSecurity.prototype, "oauth2c", void 0);
    return BinaryauthorizationProjectsAttestorsValidateAttestationOccurrenceSecurity;
}(SpeakeasyBase));
export { BinaryauthorizationProjectsAttestorsValidateAttestationOccurrenceSecurity };
var BinaryauthorizationProjectsAttestorsValidateAttestationOccurrenceRequest = /** @class */ (function (_super) {
    __extends(BinaryauthorizationProjectsAttestorsValidateAttestationOccurrenceRequest, _super);
    function BinaryauthorizationProjectsAttestorsValidateAttestationOccurrenceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BinaryauthorizationProjectsAttestorsValidateAttestationOccurrencePathParams)
    ], BinaryauthorizationProjectsAttestorsValidateAttestationOccurrenceRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BinaryauthorizationProjectsAttestorsValidateAttestationOccurrenceQueryParams)
    ], BinaryauthorizationProjectsAttestorsValidateAttestationOccurrenceRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ValidateAttestationOccurrenceRequest)
    ], BinaryauthorizationProjectsAttestorsValidateAttestationOccurrenceRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BinaryauthorizationProjectsAttestorsValidateAttestationOccurrenceSecurity)
    ], BinaryauthorizationProjectsAttestorsValidateAttestationOccurrenceRequest.prototype, "security", void 0);
    return BinaryauthorizationProjectsAttestorsValidateAttestationOccurrenceRequest;
}(SpeakeasyBase));
export { BinaryauthorizationProjectsAttestorsValidateAttestationOccurrenceRequest };
var BinaryauthorizationProjectsAttestorsValidateAttestationOccurrenceResponse = /** @class */ (function (_super) {
    __extends(BinaryauthorizationProjectsAttestorsValidateAttestationOccurrenceResponse, _super);
    function BinaryauthorizationProjectsAttestorsValidateAttestationOccurrenceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BinaryauthorizationProjectsAttestorsValidateAttestationOccurrenceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BinaryauthorizationProjectsAttestorsValidateAttestationOccurrenceResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidateAttestationOccurrenceResponse)
    ], BinaryauthorizationProjectsAttestorsValidateAttestationOccurrenceResponse.prototype, "validateAttestationOccurrenceResponse", void 0);
    return BinaryauthorizationProjectsAttestorsValidateAttestationOccurrenceResponse;
}(SpeakeasyBase));
export { BinaryauthorizationProjectsAttestorsValidateAttestationOccurrenceResponse };
