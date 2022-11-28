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
import { Money } from "./money";
export var TransferParametersSupportedPrivacyEnum;
(function (TransferParametersSupportedPrivacyEnum) {
    TransferParametersSupportedPrivacyEnum["ContactPrivacyUnspecified"] = "CONTACT_PRIVACY_UNSPECIFIED";
    TransferParametersSupportedPrivacyEnum["PublicContactData"] = "PUBLIC_CONTACT_DATA";
    TransferParametersSupportedPrivacyEnum["PrivateContactData"] = "PRIVATE_CONTACT_DATA";
    TransferParametersSupportedPrivacyEnum["RedactedContactData"] = "REDACTED_CONTACT_DATA";
})(TransferParametersSupportedPrivacyEnum || (TransferParametersSupportedPrivacyEnum = {}));
export var TransferParametersTransferLockStateEnum;
(function (TransferParametersTransferLockStateEnum) {
    TransferParametersTransferLockStateEnum["TransferLockStateUnspecified"] = "TRANSFER_LOCK_STATE_UNSPECIFIED";
    TransferParametersTransferLockStateEnum["Unlocked"] = "UNLOCKED";
    TransferParametersTransferLockStateEnum["Locked"] = "LOCKED";
})(TransferParametersTransferLockStateEnum || (TransferParametersTransferLockStateEnum = {}));
// TransferParameters
/**
 * Parameters required to transfer a domain from another registrar.
**/
var TransferParameters = /** @class */ (function (_super) {
    __extends(TransferParameters, _super);
    function TransferParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currentRegistrar" }),
        __metadata("design:type", String)
    ], TransferParameters.prototype, "currentRegistrar", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currentRegistrarUri" }),
        __metadata("design:type", String)
    ], TransferParameters.prototype, "currentRegistrarUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=domainName" }),
        __metadata("design:type", String)
    ], TransferParameters.prototype, "domainName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nameServers" }),
        __metadata("design:type", Array)
    ], TransferParameters.prototype, "nameServers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=supportedPrivacy" }),
        __metadata("design:type", Array)
    ], TransferParameters.prototype, "supportedPrivacy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transferLockState" }),
        __metadata("design:type", String)
    ], TransferParameters.prototype, "transferLockState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=yearlyPrice" }),
        __metadata("design:type", Money)
    ], TransferParameters.prototype, "yearlyPrice", void 0);
    return TransferParameters;
}(SpeakeasyBase));
export { TransferParameters };
