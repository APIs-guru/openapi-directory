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
var BinaryauthorizationProjectsAttestorsUpdatePathParams = /** @class */ (function (_super) {
    __extends(BinaryauthorizationProjectsAttestorsUpdatePathParams, _super);
    function BinaryauthorizationProjectsAttestorsUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], BinaryauthorizationProjectsAttestorsUpdatePathParams.prototype, "name", void 0);
    return BinaryauthorizationProjectsAttestorsUpdatePathParams;
}(SpeakeasyBase));
export { BinaryauthorizationProjectsAttestorsUpdatePathParams };
var BinaryauthorizationProjectsAttestorsUpdateQueryParams = /** @class */ (function (_super) {
    __extends(BinaryauthorizationProjectsAttestorsUpdateQueryParams, _super);
    function BinaryauthorizationProjectsAttestorsUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BinaryauthorizationProjectsAttestorsUpdateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BinaryauthorizationProjectsAttestorsUpdateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BinaryauthorizationProjectsAttestorsUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BinaryauthorizationProjectsAttestorsUpdateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BinaryauthorizationProjectsAttestorsUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BinaryauthorizationProjectsAttestorsUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BinaryauthorizationProjectsAttestorsUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BinaryauthorizationProjectsAttestorsUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BinaryauthorizationProjectsAttestorsUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BinaryauthorizationProjectsAttestorsUpdateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BinaryauthorizationProjectsAttestorsUpdateQueryParams.prototype, "uploadProtocol", void 0);
    return BinaryauthorizationProjectsAttestorsUpdateQueryParams;
}(SpeakeasyBase));
export { BinaryauthorizationProjectsAttestorsUpdateQueryParams };
var BinaryauthorizationProjectsAttestorsUpdateSecurity = /** @class */ (function (_super) {
    __extends(BinaryauthorizationProjectsAttestorsUpdateSecurity, _super);
    function BinaryauthorizationProjectsAttestorsUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BinaryauthorizationProjectsAttestorsUpdateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BinaryauthorizationProjectsAttestorsUpdateSecurity.prototype, "oauth2c", void 0);
    return BinaryauthorizationProjectsAttestorsUpdateSecurity;
}(SpeakeasyBase));
export { BinaryauthorizationProjectsAttestorsUpdateSecurity };
var BinaryauthorizationProjectsAttestorsUpdateRequest = /** @class */ (function (_super) {
    __extends(BinaryauthorizationProjectsAttestorsUpdateRequest, _super);
    function BinaryauthorizationProjectsAttestorsUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BinaryauthorizationProjectsAttestorsUpdatePathParams)
    ], BinaryauthorizationProjectsAttestorsUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BinaryauthorizationProjectsAttestorsUpdateQueryParams)
    ], BinaryauthorizationProjectsAttestorsUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AttestorInput)
    ], BinaryauthorizationProjectsAttestorsUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BinaryauthorizationProjectsAttestorsUpdateSecurity)
    ], BinaryauthorizationProjectsAttestorsUpdateRequest.prototype, "security", void 0);
    return BinaryauthorizationProjectsAttestorsUpdateRequest;
}(SpeakeasyBase));
export { BinaryauthorizationProjectsAttestorsUpdateRequest };
var BinaryauthorizationProjectsAttestorsUpdateResponse = /** @class */ (function (_super) {
    __extends(BinaryauthorizationProjectsAttestorsUpdateResponse, _super);
    function BinaryauthorizationProjectsAttestorsUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Attestor)
    ], BinaryauthorizationProjectsAttestorsUpdateResponse.prototype, "attestor", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BinaryauthorizationProjectsAttestorsUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BinaryauthorizationProjectsAttestorsUpdateResponse.prototype, "statusCode", void 0);
    return BinaryauthorizationProjectsAttestorsUpdateResponse;
}(SpeakeasyBase));
export { BinaryauthorizationProjectsAttestorsUpdateResponse };
