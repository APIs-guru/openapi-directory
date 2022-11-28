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
import { ChannelAuditDetails } from "./channelauditdetails";
import { ChannelBrandingSettings } from "./channelbrandingsettings";
import { ChannelContentDetails } from "./channelcontentdetails";
import { ChannelContentOwnerDetails } from "./channelcontentownerdetails";
import { ChannelConversionPings } from "./channelconversionpings";
import { ChannelLocalization } from "./channellocalization";
import { ChannelSnippet } from "./channelsnippet";
import { ChannelStatistics } from "./channelstatistics";
import { ChannelStatus } from "./channelstatus";
import { ChannelTopicDetails } from "./channeltopicdetails";
// Channel
/**
 * A *channel* resource contains information about a YouTube channel.
**/
var Channel = /** @class */ (function (_super) {
    __extends(Channel, _super);
    function Channel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=auditDetails" }),
        __metadata("design:type", ChannelAuditDetails)
    ], Channel.prototype, "auditDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=brandingSettings" }),
        __metadata("design:type", ChannelBrandingSettings)
    ], Channel.prototype, "brandingSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contentDetails" }),
        __metadata("design:type", ChannelContentDetails)
    ], Channel.prototype, "contentDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contentOwnerDetails" }),
        __metadata("design:type", ChannelContentOwnerDetails)
    ], Channel.prototype, "contentOwnerDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conversionPings" }),
        __metadata("design:type", ChannelConversionPings)
    ], Channel.prototype, "conversionPings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], Channel.prototype, "etag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Channel.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], Channel.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=localizations", elemType: ChannelLocalization }),
        __metadata("design:type", Map)
    ], Channel.prototype, "localizations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=snippet" }),
        __metadata("design:type", ChannelSnippet)
    ], Channel.prototype, "snippet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=statistics" }),
        __metadata("design:type", ChannelStatistics)
    ], Channel.prototype, "statistics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", ChannelStatus)
    ], Channel.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=topicDetails" }),
        __metadata("design:type", ChannelTopicDetails)
    ], Channel.prototype, "topicDetails", void 0);
    return Channel;
}(SpeakeasyBase));
export { Channel };
