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
import { SasPortalFrequencyRange } from "./sasportalfrequencyrange";
import { SasPortalDpaMoveList } from "./sasportaldpamovelist";
export var SasPortalDeviceGrantChannelTypeEnum;
(function (SasPortalDeviceGrantChannelTypeEnum) {
    SasPortalDeviceGrantChannelTypeEnum["ChannelTypeUnspecified"] = "CHANNEL_TYPE_UNSPECIFIED";
    SasPortalDeviceGrantChannelTypeEnum["ChannelTypeGaa"] = "CHANNEL_TYPE_GAA";
    SasPortalDeviceGrantChannelTypeEnum["ChannelTypePal"] = "CHANNEL_TYPE_PAL";
})(SasPortalDeviceGrantChannelTypeEnum || (SasPortalDeviceGrantChannelTypeEnum = {}));
export var SasPortalDeviceGrantStateEnum;
(function (SasPortalDeviceGrantStateEnum) {
    SasPortalDeviceGrantStateEnum["GrantStateUnspecified"] = "GRANT_STATE_UNSPECIFIED";
    SasPortalDeviceGrantStateEnum["GrantStateGranted"] = "GRANT_STATE_GRANTED";
    SasPortalDeviceGrantStateEnum["GrantStateTerminated"] = "GRANT_STATE_TERMINATED";
    SasPortalDeviceGrantStateEnum["GrantStateSuspended"] = "GRANT_STATE_SUSPENDED";
    SasPortalDeviceGrantStateEnum["GrantStateAuthorized"] = "GRANT_STATE_AUTHORIZED";
    SasPortalDeviceGrantStateEnum["GrantStateExpired"] = "GRANT_STATE_EXPIRED";
})(SasPortalDeviceGrantStateEnum || (SasPortalDeviceGrantStateEnum = {}));
// SasPortalDeviceGrant
/**
 * Device grant. It is an authorization provided by the Spectrum Access System to a device to transmit using specified operating parameters after a successful heartbeat by the device.
**/
var SasPortalDeviceGrant = /** @class */ (function (_super) {
    __extends(SasPortalDeviceGrant, _super);
    function SasPortalDeviceGrant() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=channelType" }),
        __metadata("design:type", String)
    ], SasPortalDeviceGrant.prototype, "channelType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expireTime" }),
        __metadata("design:type", String)
    ], SasPortalDeviceGrant.prototype, "expireTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=frequencyRange" }),
        __metadata("design:type", SasPortalFrequencyRange)
    ], SasPortalDeviceGrant.prototype, "frequencyRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=grantId" }),
        __metadata("design:type", String)
    ], SasPortalDeviceGrant.prototype, "grantId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastHeartbeatTransmitExpireTime" }),
        __metadata("design:type", String)
    ], SasPortalDeviceGrant.prototype, "lastHeartbeatTransmitExpireTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxEirp" }),
        __metadata("design:type", Number)
    ], SasPortalDeviceGrant.prototype, "maxEirp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=moveList", elemType: SasPortalDpaMoveList }),
        __metadata("design:type", Array)
    ], SasPortalDeviceGrant.prototype, "moveList", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], SasPortalDeviceGrant.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=suspensionReason" }),
        __metadata("design:type", Array)
    ], SasPortalDeviceGrant.prototype, "suspensionReason", void 0);
    return SasPortalDeviceGrant;
}(SpeakeasyBase));
export { SasPortalDeviceGrant };
