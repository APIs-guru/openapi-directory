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
import { HrefType } from "./hreftype";
// LinksSigningBasket
/**
 * A list of hyperlinks to be recognised by the TPP. The actual hyperlinks used in the
 * response depend on the dynamical decisions of the ASPSP when processing the request.
 *
 * Remark: All links can be relative or full links, to be decided by the ASPSP.
 * Type of links admitted in this response, (further links might be added for ASPSP defined
 * extensions):
 *
 *   * 'scaRedirect':
 *     In case of an SCA Redirect Approach, the ASPSP is transmitting the link to
 *     which to redirect the PSU browser.
 *   * 'scaOAuth':
 *     In case of a SCA OAuth2 Approach, the ASPSP is transmitting the URI where the configuration of
 *     the Authorisation Server can be retrieved. The configuration follows the
 *     OAuth 2.0 Authorisation Server Metadata specification.
 *   * 'startAuthorisation':
 *     In case, where an explicit start of the transaction authorisation is needed,
 *     but no more data needs to be updated (no authentication method to be selected,
 *     no PSU identification nor PSU authentication data to be uploaded).
 *   * 'startAuthorisationWithPsuIdentification':
 *     The link to the authorisation end-point, where the authorisation sub-resource
 *     has to be generated while uploading the PSU identification data.
 *   * 'startAuthorisationWithPsuAuthentication':
 *     The link to the authorisation end-point, where the authorisation sub-resource
 *     has to be generated while uploading the PSU authentication data.
 *   * 'startAuthorisationWithEncryptedPsuAuthentication':
 *     The link to the authorisation end-point, where the authorisation sub-resource has
 *     to be generated while uploading the encrypted PSU authentication data.
 *   * 'startAuthorisationWithAuthenticationMethodSelection':
 *     The link to the authorisation end-point, where the authorisation sub-resource
 *     has to be generated while selecting the authentication method.
 *     This link is contained under exactly the same conditions as the data element 'scaMethods'
 *   * 'startAuthorisationWithTransactionAuthorisation':
 *     The link to the authorisation end-point, where the authorisation sub-resource
 *     has to be generated while authorising the transaction e.g. by uploading an
 *     OTP received by SMS.
 *   * 'self':
 *     The link to the payment initiation resource created by this request.
 *     This link can be used to retrieve the resource data.
 *   * 'status':
 *     The link to retrieve the transaction status of the payment initiation.
 *   * 'scaStatus':
 *     The link to retrieve the scaStatus of the corresponding authorisation sub-resource.
 *     This link is only contained, if an authorisation sub-resource has been already created.
 *
**/
var LinksSigningBasket = /** @class */ (function (_super) {
    __extends(LinksSigningBasket, _super);
    function LinksSigningBasket() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scaOAuth" }),
        __metadata("design:type", HrefType)
    ], LinksSigningBasket.prototype, "scaOAuth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scaRedirect" }),
        __metadata("design:type", HrefType)
    ], LinksSigningBasket.prototype, "scaRedirect", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scaStatus" }),
        __metadata("design:type", HrefType)
    ], LinksSigningBasket.prototype, "scaStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=self" }),
        __metadata("design:type", HrefType)
    ], LinksSigningBasket.prototype, "self", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startAuthorisation" }),
        __metadata("design:type", HrefType)
    ], LinksSigningBasket.prototype, "startAuthorisation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startAuthorisationWithAuthenticationMethodSelection" }),
        __metadata("design:type", HrefType)
    ], LinksSigningBasket.prototype, "startAuthorisationWithAuthenticationMethodSelection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startAuthorisationWithEncryptedPsuAuthentication" }),
        __metadata("design:type", HrefType)
    ], LinksSigningBasket.prototype, "startAuthorisationWithEncryptedPsuAuthentication", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startAuthorisationWithPsuAuthentication" }),
        __metadata("design:type", HrefType)
    ], LinksSigningBasket.prototype, "startAuthorisationWithPsuAuthentication", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startAuthorisationWithPsuIdentification" }),
        __metadata("design:type", HrefType)
    ], LinksSigningBasket.prototype, "startAuthorisationWithPsuIdentification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startAuthorisationWithTransactionAuthorisation" }),
        __metadata("design:type", HrefType)
    ], LinksSigningBasket.prototype, "startAuthorisationWithTransactionAuthorisation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", HrefType)
    ], LinksSigningBasket.prototype, "status", void 0);
    return LinksSigningBasket;
}(SpeakeasyBase));
export { LinksSigningBasket };
