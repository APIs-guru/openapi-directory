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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
// EphemeralIdRegistration
/**
 * Write-only registration parameters for beacons using Eddystone-EID format. Two ways of securely registering an Eddystone-EID beacon with the service are supported: 1. Perform an ECDH key exchange via this API, including a previous call to `GET /v1beta1/eidparams`. In this case the fields `beacon_ecdh_public_key` and `service_ecdh_public_key` should be populated and `beacon_identity_key` should not be populated. This method ensures that only the two parties in the ECDH key exchange can compute the identity key, which becomes a secret between them. 2. Derive or obtain the beacon's identity key via other secure means (perhaps an ECDH key exchange between the beacon and a mobile device or any other secure method), and then submit the resulting identity key to the service. In this case `beacon_identity_key` field should be populated, and neither of `beacon_ecdh_public_key` nor `service_ecdh_public_key` fields should be. The security of this method depends on how securely the parties involved (in particular the bluetooth client) handle the identity key, and obviously on how securely the identity key was generated. See [the Eddystone specification](https://github.com/google/eddystone/tree/master/eddystone-eid) at GitHub.
**/
var EphemeralIdRegistration = /** @class */ (function (_super) {
    __extends(EphemeralIdRegistration, _super);
    function EphemeralIdRegistration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=beaconEcdhPublicKey" }),
        __metadata("design:type", String)
    ], EphemeralIdRegistration.prototype, "beaconEcdhPublicKey", void 0);
    __decorate([
        Metadata({ data: "json, name=beaconIdentityKey" }),
        __metadata("design:type", String)
    ], EphemeralIdRegistration.prototype, "beaconIdentityKey", void 0);
    __decorate([
        Metadata({ data: "json, name=initialClockValue" }),
        __metadata("design:type", String)
    ], EphemeralIdRegistration.prototype, "initialClockValue", void 0);
    __decorate([
        Metadata({ data: "json, name=initialEid" }),
        __metadata("design:type", String)
    ], EphemeralIdRegistration.prototype, "initialEid", void 0);
    __decorate([
        Metadata({ data: "json, name=rotationPeriodExponent" }),
        __metadata("design:type", Number)
    ], EphemeralIdRegistration.prototype, "rotationPeriodExponent", void 0);
    __decorate([
        Metadata({ data: "json, name=serviceEcdhPublicKey" }),
        __metadata("design:type", String)
    ], EphemeralIdRegistration.prototype, "serviceEcdhPublicKey", void 0);
    return EphemeralIdRegistration;
}(SpeakeasyBase));
export { EphemeralIdRegistration };
