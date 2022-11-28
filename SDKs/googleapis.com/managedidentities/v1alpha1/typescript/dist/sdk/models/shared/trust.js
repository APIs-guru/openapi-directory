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
export var TrustStateEnum;
(function (TrustStateEnum) {
    TrustStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    TrustStateEnum["Creating"] = "CREATING";
    TrustStateEnum["Updating"] = "UPDATING";
    TrustStateEnum["Deleting"] = "DELETING";
    TrustStateEnum["Connected"] = "CONNECTED";
    TrustStateEnum["Disconnected"] = "DISCONNECTED";
})(TrustStateEnum || (TrustStateEnum = {}));
export var TrustTrustDirectionEnum;
(function (TrustTrustDirectionEnum) {
    TrustTrustDirectionEnum["TrustDirectionUnspecified"] = "TRUST_DIRECTION_UNSPECIFIED";
    TrustTrustDirectionEnum["Inbound"] = "INBOUND";
    TrustTrustDirectionEnum["Outbound"] = "OUTBOUND";
    TrustTrustDirectionEnum["Bidirectional"] = "BIDIRECTIONAL";
})(TrustTrustDirectionEnum || (TrustTrustDirectionEnum = {}));
export var TrustTrustTypeEnum;
(function (TrustTrustTypeEnum) {
    TrustTrustTypeEnum["TrustTypeUnspecified"] = "TRUST_TYPE_UNSPECIFIED";
    TrustTrustTypeEnum["Forest"] = "FOREST";
    TrustTrustTypeEnum["External"] = "EXTERNAL";
})(TrustTrustTypeEnum || (TrustTrustTypeEnum = {}));
// Trust
/**
 * Represents a relationship between two domains which makes it possible for users in one domain to be authenticated by a dc in another domain. Refer https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2008-R2-and-2008/cc731335(v%3dws.10) If the trust is being changed, it will be placed into the UPDATING state, which indicates that the resource is being reconciled. At this point, Get will reflect an intermediate state.
**/
var Trust = /** @class */ (function (_super) {
    __extends(Trust, _super);
    function Trust() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], Trust.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastKnownTrustConnectedHeartbeatTime" }),
        __metadata("design:type", String)
    ], Trust.prototype, "lastKnownTrustConnectedHeartbeatTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=selectiveAuthentication" }),
        __metadata("design:type", Boolean)
    ], Trust.prototype, "selectiveAuthentication", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], Trust.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stateDescription" }),
        __metadata("design:type", String)
    ], Trust.prototype, "stateDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetDnsIpAddresses" }),
        __metadata("design:type", Array)
    ], Trust.prototype, "targetDnsIpAddresses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetDomainName" }),
        __metadata("design:type", String)
    ], Trust.prototype, "targetDomainName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trustDirection" }),
        __metadata("design:type", String)
    ], Trust.prototype, "trustDirection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trustHandshakeSecret" }),
        __metadata("design:type", String)
    ], Trust.prototype, "trustHandshakeSecret", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trustType" }),
        __metadata("design:type", String)
    ], Trust.prototype, "trustType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], Trust.prototype, "updateTime", void 0);
    return Trust;
}(SpeakeasyBase));
export { Trust };
