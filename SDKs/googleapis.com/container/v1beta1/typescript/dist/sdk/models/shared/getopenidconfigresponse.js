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
import { HttpCacheControlResponseHeader } from "./httpcachecontrolresponseheader";
// GetOpenIdConfigResponse
/**
 * GetOpenIDConfigResponse is an OIDC discovery document for the cluster. See the OpenID Connect Discovery 1.0 specification for details.
**/
var GetOpenIdConfigResponse = /** @class */ (function (_super) {
    __extends(GetOpenIdConfigResponse, _super);
    function GetOpenIdConfigResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cacheHeader" }),
        __metadata("design:type", HttpCacheControlResponseHeader)
    ], GetOpenIdConfigResponse.prototype, "cacheHeader", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=claims_supported" }),
        __metadata("design:type", Array)
    ], GetOpenIdConfigResponse.prototype, "claimsSupported", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=grant_types" }),
        __metadata("design:type", Array)
    ], GetOpenIdConfigResponse.prototype, "grantTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id_token_signing_alg_values_supported" }),
        __metadata("design:type", Array)
    ], GetOpenIdConfigResponse.prototype, "idTokenSigningAlgValuesSupported", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=issuer" }),
        __metadata("design:type", String)
    ], GetOpenIdConfigResponse.prototype, "issuer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jwks_uri" }),
        __metadata("design:type", String)
    ], GetOpenIdConfigResponse.prototype, "jwksUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=response_types_supported" }),
        __metadata("design:type", Array)
    ], GetOpenIdConfigResponse.prototype, "responseTypesSupported", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subject_types_supported" }),
        __metadata("design:type", Array)
    ], GetOpenIdConfigResponse.prototype, "subjectTypesSupported", void 0);
    return GetOpenIdConfigResponse;
}(SpeakeasyBase));
export { GetOpenIdConfigResponse };
