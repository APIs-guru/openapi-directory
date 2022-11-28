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
import { MonitorStreamInfo } from "./monitorstreaminfo";
export var LiveBroadcastContentDetailsClosedCaptionsTypeEnum;
(function (LiveBroadcastContentDetailsClosedCaptionsTypeEnum) {
    LiveBroadcastContentDetailsClosedCaptionsTypeEnum["ClosedCaptionsTypeUnspecified"] = "closedCaptionsTypeUnspecified";
    LiveBroadcastContentDetailsClosedCaptionsTypeEnum["ClosedCaptionsDisabled"] = "closedCaptionsDisabled";
    LiveBroadcastContentDetailsClosedCaptionsTypeEnum["ClosedCaptionsHttpPost"] = "closedCaptionsHttpPost";
    LiveBroadcastContentDetailsClosedCaptionsTypeEnum["ClosedCaptionsEmbedded"] = "closedCaptionsEmbedded";
})(LiveBroadcastContentDetailsClosedCaptionsTypeEnum || (LiveBroadcastContentDetailsClosedCaptionsTypeEnum = {}));
export var LiveBroadcastContentDetailsLatencyPreferenceEnum;
(function (LiveBroadcastContentDetailsLatencyPreferenceEnum) {
    LiveBroadcastContentDetailsLatencyPreferenceEnum["LatencyPreferenceUnspecified"] = "latencyPreferenceUnspecified";
    LiveBroadcastContentDetailsLatencyPreferenceEnum["Normal"] = "normal";
    LiveBroadcastContentDetailsLatencyPreferenceEnum["Low"] = "low";
    LiveBroadcastContentDetailsLatencyPreferenceEnum["UltraLow"] = "ultraLow";
})(LiveBroadcastContentDetailsLatencyPreferenceEnum || (LiveBroadcastContentDetailsLatencyPreferenceEnum = {}));
export var LiveBroadcastContentDetailsProjectionEnum;
(function (LiveBroadcastContentDetailsProjectionEnum) {
    LiveBroadcastContentDetailsProjectionEnum["ProjectionUnspecified"] = "projectionUnspecified";
    LiveBroadcastContentDetailsProjectionEnum["Rectangular"] = "rectangular";
    LiveBroadcastContentDetailsProjectionEnum["ThreeHundredAndSixty"] = "360";
    LiveBroadcastContentDetailsProjectionEnum["Mesh"] = "mesh";
})(LiveBroadcastContentDetailsProjectionEnum || (LiveBroadcastContentDetailsProjectionEnum = {}));
export var LiveBroadcastContentDetailsStereoLayoutEnum;
(function (LiveBroadcastContentDetailsStereoLayoutEnum) {
    LiveBroadcastContentDetailsStereoLayoutEnum["StereoLayoutUnspecified"] = "stereoLayoutUnspecified";
    LiveBroadcastContentDetailsStereoLayoutEnum["Mono"] = "mono";
    LiveBroadcastContentDetailsStereoLayoutEnum["LeftRight"] = "leftRight";
    LiveBroadcastContentDetailsStereoLayoutEnum["TopBottom"] = "topBottom";
})(LiveBroadcastContentDetailsStereoLayoutEnum || (LiveBroadcastContentDetailsStereoLayoutEnum = {}));
// LiveBroadcastContentDetails
/**
 * Detailed settings of a broadcast.
**/
var LiveBroadcastContentDetails = /** @class */ (function (_super) {
    __extends(LiveBroadcastContentDetails, _super);
    function LiveBroadcastContentDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=boundStreamId" }),
        __metadata("design:type", String)
    ], LiveBroadcastContentDetails.prototype, "boundStreamId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=boundStreamLastUpdateTimeMs" }),
        __metadata("design:type", Date)
    ], LiveBroadcastContentDetails.prototype, "boundStreamLastUpdateTimeMs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=closedCaptionsType" }),
        __metadata("design:type", String)
    ], LiveBroadcastContentDetails.prototype, "closedCaptionsType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enableAutoStart" }),
        __metadata("design:type", Boolean)
    ], LiveBroadcastContentDetails.prototype, "enableAutoStart", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enableAutoStop" }),
        __metadata("design:type", Boolean)
    ], LiveBroadcastContentDetails.prototype, "enableAutoStop", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enableClosedCaptions" }),
        __metadata("design:type", Boolean)
    ], LiveBroadcastContentDetails.prototype, "enableClosedCaptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enableContentEncryption" }),
        __metadata("design:type", Boolean)
    ], LiveBroadcastContentDetails.prototype, "enableContentEncryption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enableDvr" }),
        __metadata("design:type", Boolean)
    ], LiveBroadcastContentDetails.prototype, "enableDvr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enableEmbed" }),
        __metadata("design:type", Boolean)
    ], LiveBroadcastContentDetails.prototype, "enableEmbed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enableLowLatency" }),
        __metadata("design:type", Boolean)
    ], LiveBroadcastContentDetails.prototype, "enableLowLatency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=latencyPreference" }),
        __metadata("design:type", String)
    ], LiveBroadcastContentDetails.prototype, "latencyPreference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mesh" }),
        __metadata("design:type", String)
    ], LiveBroadcastContentDetails.prototype, "mesh", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=monitorStream" }),
        __metadata("design:type", MonitorStreamInfo)
    ], LiveBroadcastContentDetails.prototype, "monitorStream", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=projection" }),
        __metadata("design:type", String)
    ], LiveBroadcastContentDetails.prototype, "projection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recordFromStart" }),
        __metadata("design:type", Boolean)
    ], LiveBroadcastContentDetails.prototype, "recordFromStart", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startWithSlate" }),
        __metadata("design:type", Boolean)
    ], LiveBroadcastContentDetails.prototype, "startWithSlate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stereoLayout" }),
        __metadata("design:type", String)
    ], LiveBroadcastContentDetails.prototype, "stereoLayout", void 0);
    return LiveBroadcastContentDetails;
}(SpeakeasyBase));
export { LiveBroadcastContentDetails };
