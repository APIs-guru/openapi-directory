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
var BinaryauthorizationProjectsAttestorsDeletePathParams = /** @class */ (function (_super) {
    __extends(BinaryauthorizationProjectsAttestorsDeletePathParams, _super);
    function BinaryauthorizationProjectsAttestorsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], BinaryauthorizationProjectsAttestorsDeletePathParams.prototype, "name", void 0);
    return BinaryauthorizationProjectsAttestorsDeletePathParams;
}(SpeakeasyBase));
export { BinaryauthorizationProjectsAttestorsDeletePathParams };
var BinaryauthorizationProjectsAttestorsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(BinaryauthorizationProjectsAttestorsDeleteQueryParams, _super);
    function BinaryauthorizationProjectsAttestorsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BinaryauthorizationProjectsAttestorsDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BinaryauthorizationProjectsAttestorsDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BinaryauthorizationProjectsAttestorsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BinaryauthorizationProjectsAttestorsDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BinaryauthorizationProjectsAttestorsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BinaryauthorizationProjectsAttestorsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BinaryauthorizationProjectsAttestorsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BinaryauthorizationProjectsAttestorsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BinaryauthorizationProjectsAttestorsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BinaryauthorizationProjectsAttestorsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BinaryauthorizationProjectsAttestorsDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return BinaryauthorizationProjectsAttestorsDeleteQueryParams;
}(SpeakeasyBase));
export { BinaryauthorizationProjectsAttestorsDeleteQueryParams };
var BinaryauthorizationProjectsAttestorsDeleteSecurity = /** @class */ (function (_super) {
    __extends(BinaryauthorizationProjectsAttestorsDeleteSecurity, _super);
    function BinaryauthorizationProjectsAttestorsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BinaryauthorizationProjectsAttestorsDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BinaryauthorizationProjectsAttestorsDeleteSecurity.prototype, "oauth2c", void 0);
    return BinaryauthorizationProjectsAttestorsDeleteSecurity;
}(SpeakeasyBase));
export { BinaryauthorizationProjectsAttestorsDeleteSecurity };
var BinaryauthorizationProjectsAttestorsDeleteRequest = /** @class */ (function (_super) {
    __extends(BinaryauthorizationProjectsAttestorsDeleteRequest, _super);
    function BinaryauthorizationProjectsAttestorsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BinaryauthorizationProjectsAttestorsDeletePathParams)
    ], BinaryauthorizationProjectsAttestorsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BinaryauthorizationProjectsAttestorsDeleteQueryParams)
    ], BinaryauthorizationProjectsAttestorsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BinaryauthorizationProjectsAttestorsDeleteSecurity)
    ], BinaryauthorizationProjectsAttestorsDeleteRequest.prototype, "security", void 0);
    return BinaryauthorizationProjectsAttestorsDeleteRequest;
}(SpeakeasyBase));
export { BinaryauthorizationProjectsAttestorsDeleteRequest };
var BinaryauthorizationProjectsAttestorsDeleteResponse = /** @class */ (function (_super) {
    __extends(BinaryauthorizationProjectsAttestorsDeleteResponse, _super);
    function BinaryauthorizationProjectsAttestorsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BinaryauthorizationProjectsAttestorsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], BinaryauthorizationProjectsAttestorsDeleteResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BinaryauthorizationProjectsAttestorsDeleteResponse.prototype, "statusCode", void 0);
    return BinaryauthorizationProjectsAttestorsDeleteResponse;
}(SpeakeasyBase));
export { BinaryauthorizationProjectsAttestorsDeleteResponse };
