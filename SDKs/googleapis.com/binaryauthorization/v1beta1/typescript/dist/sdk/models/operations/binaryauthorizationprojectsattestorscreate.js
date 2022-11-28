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
var BinaryauthorizationProjectsAttestorsCreatePathParams = /** @class */ (function (_super) {
    __extends(BinaryauthorizationProjectsAttestorsCreatePathParams, _super);
    function BinaryauthorizationProjectsAttestorsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], BinaryauthorizationProjectsAttestorsCreatePathParams.prototype, "parent", void 0);
    return BinaryauthorizationProjectsAttestorsCreatePathParams;
}(SpeakeasyBase));
export { BinaryauthorizationProjectsAttestorsCreatePathParams };
var BinaryauthorizationProjectsAttestorsCreateQueryParams = /** @class */ (function (_super) {
    __extends(BinaryauthorizationProjectsAttestorsCreateQueryParams, _super);
    function BinaryauthorizationProjectsAttestorsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BinaryauthorizationProjectsAttestorsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BinaryauthorizationProjectsAttestorsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BinaryauthorizationProjectsAttestorsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=attestorId" }),
        __metadata("design:type", String)
    ], BinaryauthorizationProjectsAttestorsCreateQueryParams.prototype, "attestorId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BinaryauthorizationProjectsAttestorsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BinaryauthorizationProjectsAttestorsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BinaryauthorizationProjectsAttestorsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BinaryauthorizationProjectsAttestorsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BinaryauthorizationProjectsAttestorsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BinaryauthorizationProjectsAttestorsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BinaryauthorizationProjectsAttestorsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BinaryauthorizationProjectsAttestorsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return BinaryauthorizationProjectsAttestorsCreateQueryParams;
}(SpeakeasyBase));
export { BinaryauthorizationProjectsAttestorsCreateQueryParams };
var BinaryauthorizationProjectsAttestorsCreateSecurity = /** @class */ (function (_super) {
    __extends(BinaryauthorizationProjectsAttestorsCreateSecurity, _super);
    function BinaryauthorizationProjectsAttestorsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BinaryauthorizationProjectsAttestorsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BinaryauthorizationProjectsAttestorsCreateSecurity.prototype, "oauth2c", void 0);
    return BinaryauthorizationProjectsAttestorsCreateSecurity;
}(SpeakeasyBase));
export { BinaryauthorizationProjectsAttestorsCreateSecurity };
var BinaryauthorizationProjectsAttestorsCreateRequest = /** @class */ (function (_super) {
    __extends(BinaryauthorizationProjectsAttestorsCreateRequest, _super);
    function BinaryauthorizationProjectsAttestorsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BinaryauthorizationProjectsAttestorsCreatePathParams)
    ], BinaryauthorizationProjectsAttestorsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BinaryauthorizationProjectsAttestorsCreateQueryParams)
    ], BinaryauthorizationProjectsAttestorsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AttestorInput)
    ], BinaryauthorizationProjectsAttestorsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BinaryauthorizationProjectsAttestorsCreateSecurity)
    ], BinaryauthorizationProjectsAttestorsCreateRequest.prototype, "security", void 0);
    return BinaryauthorizationProjectsAttestorsCreateRequest;
}(SpeakeasyBase));
export { BinaryauthorizationProjectsAttestorsCreateRequest };
var BinaryauthorizationProjectsAttestorsCreateResponse = /** @class */ (function (_super) {
    __extends(BinaryauthorizationProjectsAttestorsCreateResponse, _super);
    function BinaryauthorizationProjectsAttestorsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Attestor)
    ], BinaryauthorizationProjectsAttestorsCreateResponse.prototype, "attestor", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BinaryauthorizationProjectsAttestorsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BinaryauthorizationProjectsAttestorsCreateResponse.prototype, "statusCode", void 0);
    return BinaryauthorizationProjectsAttestorsCreateResponse;
}(SpeakeasyBase));
export { BinaryauthorizationProjectsAttestorsCreateResponse };
