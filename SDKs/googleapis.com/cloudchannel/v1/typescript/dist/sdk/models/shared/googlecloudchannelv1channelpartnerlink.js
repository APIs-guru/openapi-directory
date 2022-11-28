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
import { GoogleCloudChannelV1CloudIdentityInfoInput } from "./googlecloudchannelv1cloudidentityinfo";
import { GoogleCloudChannelV1CloudIdentityInfo } from "./googlecloudchannelv1cloudidentityinfo";
export var GoogleCloudChannelV1ChannelPartnerLinkLinkStateEnum;
(function (GoogleCloudChannelV1ChannelPartnerLinkLinkStateEnum) {
    GoogleCloudChannelV1ChannelPartnerLinkLinkStateEnum["ChannelPartnerLinkStateUnspecified"] = "CHANNEL_PARTNER_LINK_STATE_UNSPECIFIED";
    GoogleCloudChannelV1ChannelPartnerLinkLinkStateEnum["Invited"] = "INVITED";
    GoogleCloudChannelV1ChannelPartnerLinkLinkStateEnum["Active"] = "ACTIVE";
    GoogleCloudChannelV1ChannelPartnerLinkLinkStateEnum["Revoked"] = "REVOKED";
    GoogleCloudChannelV1ChannelPartnerLinkLinkStateEnum["Suspended"] = "SUSPENDED";
})(GoogleCloudChannelV1ChannelPartnerLinkLinkStateEnum || (GoogleCloudChannelV1ChannelPartnerLinkLinkStateEnum = {}));
// GoogleCloudChannelV1ChannelPartnerLinkInput
/**
 * Entity representing a link between distributors and their indirect resellers in an n-tier resale channel.
**/
var GoogleCloudChannelV1ChannelPartnerLinkInput = /** @class */ (function (_super) {
    __extends(GoogleCloudChannelV1ChannelPartnerLinkInput, _super);
    function GoogleCloudChannelV1ChannelPartnerLinkInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=channelPartnerCloudIdentityInfo" }),
        __metadata("design:type", GoogleCloudChannelV1CloudIdentityInfoInput)
    ], GoogleCloudChannelV1ChannelPartnerLinkInput.prototype, "channelPartnerCloudIdentityInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=linkState" }),
        __metadata("design:type", String)
    ], GoogleCloudChannelV1ChannelPartnerLinkInput.prototype, "linkState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resellerCloudIdentityId" }),
        __metadata("design:type", String)
    ], GoogleCloudChannelV1ChannelPartnerLinkInput.prototype, "resellerCloudIdentityId", void 0);
    return GoogleCloudChannelV1ChannelPartnerLinkInput;
}(SpeakeasyBase));
export { GoogleCloudChannelV1ChannelPartnerLinkInput };
// GoogleCloudChannelV1ChannelPartnerLink
/**
 * Entity representing a link between distributors and their indirect resellers in an n-tier resale channel.
**/
var GoogleCloudChannelV1ChannelPartnerLink = /** @class */ (function (_super) {
    __extends(GoogleCloudChannelV1ChannelPartnerLink, _super);
    function GoogleCloudChannelV1ChannelPartnerLink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=channelPartnerCloudIdentityInfo" }),
        __metadata("design:type", GoogleCloudChannelV1CloudIdentityInfo)
    ], GoogleCloudChannelV1ChannelPartnerLink.prototype, "channelPartnerCloudIdentityInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], GoogleCloudChannelV1ChannelPartnerLink.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inviteLinkUri" }),
        __metadata("design:type", String)
    ], GoogleCloudChannelV1ChannelPartnerLink.prototype, "inviteLinkUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=linkState" }),
        __metadata("design:type", String)
    ], GoogleCloudChannelV1ChannelPartnerLink.prototype, "linkState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudChannelV1ChannelPartnerLink.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publicId" }),
        __metadata("design:type", String)
    ], GoogleCloudChannelV1ChannelPartnerLink.prototype, "publicId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resellerCloudIdentityId" }),
        __metadata("design:type", String)
    ], GoogleCloudChannelV1ChannelPartnerLink.prototype, "resellerCloudIdentityId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], GoogleCloudChannelV1ChannelPartnerLink.prototype, "updateTime", void 0);
    return GoogleCloudChannelV1ChannelPartnerLink;
}(SpeakeasyBase));
export { GoogleCloudChannelV1ChannelPartnerLink };
