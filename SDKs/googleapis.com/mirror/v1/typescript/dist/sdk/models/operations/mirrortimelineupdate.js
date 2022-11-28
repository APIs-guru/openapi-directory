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
var MirrorTimelineUpdatePathParams = /** @class */ (function (_super) {
    __extends(MirrorTimelineUpdatePathParams, _super);
    function MirrorTimelineUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], MirrorTimelineUpdatePathParams.prototype, "id", void 0);
    return MirrorTimelineUpdatePathParams;
}(SpeakeasyBase));
export { MirrorTimelineUpdatePathParams };
var MirrorTimelineUpdateQueryParams = /** @class */ (function (_super) {
    __extends(MirrorTimelineUpdateQueryParams, _super);
    function MirrorTimelineUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], MirrorTimelineUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], MirrorTimelineUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], MirrorTimelineUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], MirrorTimelineUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], MirrorTimelineUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], MirrorTimelineUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], MirrorTimelineUpdateQueryParams.prototype, "userIp", void 0);
    return MirrorTimelineUpdateQueryParams;
}(SpeakeasyBase));
export { MirrorTimelineUpdateQueryParams };
var MirrorTimelineUpdateRequests = /** @class */ (function (_super) {
    __extends(MirrorTimelineUpdateRequests, _super);
    function MirrorTimelineUpdateRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/1d-interleaved-parityfec" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audio1dInterleavedParityfec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/32kadpcm" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audio32kadpcm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/3gpp" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audio3gpp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/3gpp2" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audio3gpp2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/aac" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioAac", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/ac3" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioAc3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/adpcm" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioAdpcm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/amr" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioAmr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/amr-wb" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioAmrWb", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/amr-wb+" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioAmrWbPlus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/aptx" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioAptx", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/asc" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioAsc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/atrac3" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioAtrac3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/atrac-advanced-lossless" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioAtracAdvancedLossless", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/atrac-x" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioAtracX", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/basic" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioBasic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/bv16" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioBv16", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/bv32" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioBv32", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/clearmode" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioClearmode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/cn" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioCn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/dat12" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioDat12", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/dls" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioDls", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/dsr-es201108" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioDsrEs201108", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/dsr-es202050" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioDsrEs202050", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/dsr-es202211" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioDsrEs202211", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/dsr-es202212" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioDsrEs202212", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/dv" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioDv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/dvi4" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioDvi4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/eac3" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioEac3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/encaprtp" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioEncaprtp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/evrc" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioEvrc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/evrc0" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioEvrc0", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/evrc1" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioEvrc1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/evrc-qcp" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioEvrcQcp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/evrcb" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioEvrcb", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/evrcb0" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioEvrcb0", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/evrcb1" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioEvrcb1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/evrcnw" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioEvrcnw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/evrcnw0" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioEvrcnw0", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/evrcnw1" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioEvrcnw1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/evrcwb" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioEvrcwb", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/evrcwb0" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioEvrcwb0", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/evrcwb1" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioEvrcwb1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/evs" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioEvs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/fwdred" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioFwdred", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/g711-0" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioG7110", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/g719" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioG719", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/g722" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioG722", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/g7221" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioG7221", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/g723" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioG723", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/g726-16" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioG72616", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/g726-24" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioG72624", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/g726-32" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioG72632", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/g726-40" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioG72640", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/g728" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioG728", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/g729" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioG729", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/g7291" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioG7291", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/g729d" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioG729d", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/g729e" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioG729e", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/gsm" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioGsm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/gsm-efr" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioGsmEfr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/gsm-hr-08" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioGsmHr08", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/ip-mr_v2.5" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioIpMrV25", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/ilbc" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioIlbc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/isac" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioIsac", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/l16" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioL16", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/l20" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioL20", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/l24" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioL24", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/l8" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioL8", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/lpc" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioLpc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/melp" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioMelp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/melp1200" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioMelp1200", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/melp2400" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioMelp2400", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/melp600" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioMelp600", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/midi" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioMidi", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/mobile-xmf" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioMobileXmf", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/mp3" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioMp3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/mp4" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioMp4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/mp4a-latm" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioMp4aLatm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/mpa" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioMpa", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/mpa-robust" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioMpaRobust", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/mpeg" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioMpeg", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/mpeg4-generic" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioMpeg4Generic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/musepack" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioMusepack", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/ogg" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioOgg", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/opus" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioOpus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/parityfec" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioParityfec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/pcma" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioPcma", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/pcma-wb" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioPcmaWb", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/pcmu" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioPcmu", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/pcmu-wb" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioPcmuWb", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/prs.sid" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioPrsSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/qcelp" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioQcelp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/raptorfec" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioRaptorfec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/red" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioRed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/rtp-enc-aescm128" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioRtpEncAescm128", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/rtp-midi" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioRtpMidi", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/rtploopback" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioRtploopback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/rtx" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioRtx", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/s3m" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioS3m", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/silk" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioSilk", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/smv" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioSmv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/smv0" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioSmv0", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/smv-qcp" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioSmvQcp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/sp-midi" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioSpMidi", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/speex" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioSpeex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/t140c" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioT140c", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/t38" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioT38", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/telephone-event" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioTelephoneEvent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/tetra_acelp" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioTetraAcelp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/tone" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioTone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/uemclip" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioUemclip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/ulpfec" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioUlpfec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/usac" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioUsac", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/vdvi" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioVdvi", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/vmr-wb" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioVmrWb", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/vnd.3gpp.iufp" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioVnd3gppIufp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/vnd.4sb" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioVnd4sb", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/vnd.audiokoz" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioVndAudiokoz", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/vnd.celp" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioVndCelp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/vnd.cisco.nse" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioVndCiscoNse", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/vnd.cmles.radio-events" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioVndCmlesRadioEvents", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/vnd.cns.anp1" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioVndCnsAnp1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/vnd.cns.inf1" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioVndCnsInf1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/vnd.dece.audio" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioVndDeceAudio", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/vnd.digital-winds" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioVndDigitalWinds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/vnd.dlna.adts" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioVndDlnaAdts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/vnd.dolby.heaac.1" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioVndDolbyHeaac1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/vnd.dolby.heaac.2" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioVndDolbyHeaac2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/vnd.dolby.mlp" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioVndDolbyMlp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/vnd.dolby.mps" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioVndDolbyMps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/vnd.dolby.pl2" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioVndDolbyPl2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/vnd.dolby.pl2x" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioVndDolbyPl2x", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/vnd.dolby.pl2z" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioVndDolbyPl2z", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/vnd.dolby.pulse.1" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioVndDolbyPulse1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/vnd.dra" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioVndDra", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/vnd.dts" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioVndDts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/vnd.dts.hd" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioVndDtsHd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/vnd.dts.uhd" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioVndDtsUhd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/vnd.dvb.file" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioVndDvbFile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/vnd.everad.plj" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioVndEveradPlj", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/vnd.hns.audio" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioVndHnsAudio", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/vnd.lucent.voice" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioVndLucentVoice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/vnd.ms-playready.media.pya" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioVndMsPlayreadyMediaPya", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/vnd.nokia.mobile-xmf" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioVndNokiaMobileXmf", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/vnd.nortel.vbk" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioVndNortelVbk", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/vnd.nuera.ecelp4800" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioVndNueraEcelp4800", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/vnd.nuera.ecelp7470" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioVndNueraEcelp7470", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/vnd.nuera.ecelp9600" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioVndNueraEcelp9600", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/vnd.octel.sbc" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioVndOctelSbc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/vnd.presonus.multitrack" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioVndPresonusMultitrack", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/vnd.qcelp" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioVndQcelp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/vnd.rhetorex.32kadpcm" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioVndRhetorex32kadpcm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/vnd.rip" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioVndRip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/vnd.rn-realaudio" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioVndRnRealaudio", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/vnd.sealedmedia.softseal.mpeg" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioVndSealedmediaSoftsealMpeg", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/vnd.vmx.cvsd" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioVndVmxCvsd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/vnd.wave" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioVndWave", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/vorbis" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioVorbis", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/vorbis-config" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioVorbisConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/wav" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioWav", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/wave" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioWave", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/webm" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioWebm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/x-aac" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioXAac", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/x-aiff" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioXAiff", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/x-caf" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioXCaf", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/x-flac" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioXFlac", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/x-matroska" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioXMatroska", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/x-mpegurl" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioXMpegurl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/x-ms-wax" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioXMsWax", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/x-ms-wma" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioXMsWma", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/x-pn-realaudio" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioXPnRealaudio", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/x-pn-realaudio-plugin" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioXPnRealaudioPlugin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/x-realaudio" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioXRealaudio", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/x-tta" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioXTta", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/x-wav" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioXWav", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/xm" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioXm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/x-m4a" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "audioXm4a", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/aces" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "imageAces", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/apng" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "imageApng", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/avci" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "imageAvci", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/avcs" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "imageAvcs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/bmp" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "imageBmp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/cgm" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "imageCgm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/dicom-rle" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "imageDicomRle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/emf" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "imageEmf", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/fits" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "imageFits", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/g3fax" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "imageG3fax", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/gif" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "imageGif", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/heic" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "imageHeic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/heic-sequence" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "imageHeicSequence", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/heif" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "imageHeif", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/heif-sequence" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "imageHeifSequence", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/ief" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "imageIef", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/jls" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "imageJls", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/jp2" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "imageJp2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/jpeg" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "imageJpeg", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/jpm" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "imageJpm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/jpx" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "imageJpx", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/ktx" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "imageKtx", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/naplps" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "imageNaplps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/pjpeg" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "imagePjpeg", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/png" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "imagePng", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/prs.btif" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "imagePrsBtif", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/prs.pti" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "imagePrsPti", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/pwg-raster" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "imagePwgRaster", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/sgi" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "imageSgi", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/svg+xml" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "imageSvgPlusXml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/t38" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "imageT38", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/tiff" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "imageTiff", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/tiff-fx" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "imageTiffFx", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/vnd.adobe.photoshop" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "imageVndAdobePhotoshop", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/vnd.airzip.accelerator.azv" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "imageVndAirzipAcceleratorAzv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/vnd.cns.inf2" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "imageVndCnsInf2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/vnd.dece.graphic" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "imageVndDeceGraphic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/vnd.djvu" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "imageVndDjvu", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/vnd.dvb.subtitle" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "imageVndDvbSubtitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/vnd.dwg" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "imageVndDwg", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/vnd.dxf" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "imageVndDxf", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/vnd.fastbidsheet" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "imageVndFastbidsheet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/vnd.fpx" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "imageVndFpx", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/vnd.fst" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "imageVndFst", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/vnd.fujixerox.edmics-mmr" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "imageVndFujixeroxEdmicsMmr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/vnd.fujixerox.edmics-rlc" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "imageVndFujixeroxEdmicsRlc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/vnd.globalgraphics.pgb" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "imageVndGlobalgraphicsPgb", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/vnd.microsoft.icon" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "imageVndMicrosoftIcon", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/vnd.mix" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "imageVndMix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/vnd.mozilla.apng" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "imageVndMozillaApng", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/vnd.ms-modi" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "imageVndMsModi", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/vnd.ms-photo" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "imageVndMsPhoto", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/vnd.net-fpx" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "imageVndNetFpx", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/vnd.radiance" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "imageVndRadiance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/vnd.sealed.png" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "imageVndSealedPng", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/vnd.sealedmedia.softseal.gif" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "imageVndSealedmediaSoftsealGif", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/vnd.sealedmedia.softseal.jpg" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "imageVndSealedmediaSoftsealJpg", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/vnd.svf" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "imageVndSvf", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/vnd.tencent.tap" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "imageVndTencentTap", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/vnd.valve.source.texture" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "imageVndValveSourceTexture", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/vnd.wap.wbmp" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "imageVndWapWbmp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/vnd.xiff" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "imageVndXiff", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/vnd.zbrush.pcx" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "imageVndZbrushPcx", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/webp" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "imageWebp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/wmf" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "imageWmf", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/x-3ds" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "imageX3ds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/x-cmu-raster" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "imageXCmuRaster", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/x-cmx" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "imageXCmx", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/x-freehand" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "imageXFreehand", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/x-icon" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "imageXIcon", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/x-jng" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "imageXJng", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/x-mrsid-image" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "imageXMrsidImage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/x-ms-bmp" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "imageXMsBmp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/x-pcx" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "imageXPcx", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/x-pict" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "imageXPict", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/x-portable-anymap" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "imageXPortableAnymap", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/x-portable-bitmap" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "imageXPortableBitmap", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/x-portable-graymap" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "imageXPortableGraymap", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/x-portable-pixmap" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "imageXPortablePixmap", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/x-rgb" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "imageXRgb", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/x-tga" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "imageXTga", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/x-xbitmap" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "imageXXbitmap", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/x-xcf" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "imageXXcf", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/x-xpixmap" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "imageXXpixmap", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/x-xwindowdump" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "imageXXwindowdump", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/1d-interleaved-parityfec" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "video1dInterleavedParityfec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/3gpp" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "video3gpp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/3gpp2" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "video3gpp2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/3gpp-tt" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "video3gppTt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/bmpeg" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "videoBmpeg", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/bt656" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "videoBt656", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/celb" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "videoCelb", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/dv" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "videoDv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/encaprtp" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "videoEncaprtp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/h261" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "videoH261", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/h263" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "videoH263", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/h263-1998" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "videoH2631998", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/h263-2000" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "videoH2632000", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/h264" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "videoH264", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/h264-rcdo" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "videoH264Rcdo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/h264-svc" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "videoH264Svc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/h265" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "videoH265", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/iso.segment" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "videoIsoSegment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/jpeg" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "videoJpeg", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/jpeg2000" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "videoJpeg2000", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/jpm" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "videoJpm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/mj2" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "videoMj2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/mp1s" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "videoMp1s", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/mp2p" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "videoMp2p", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/mp2t" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "videoMp2t", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/mp4" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "videoMp4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/mp4v-es" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "videoMp4vEs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/mpeg" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "videoMpeg", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/mpeg4-generic" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "videoMpeg4Generic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/mpv" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "videoMpv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/nv" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "videoNv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/ogg" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "videoOgg", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/parityfec" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "videoParityfec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/pointer" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "videoPointer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/quicktime" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "videoQuicktime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/raptorfec" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "videoRaptorfec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/raw" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "videoRaw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/rtp-enc-aescm128" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "videoRtpEncAescm128", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/rtploopback" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "videoRtploopback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/rtx" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "videoRtx", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/smpte291" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "videoSmpte291", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/smpte292m" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "videoSmpte292m", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/ulpfec" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "videoUlpfec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vc1" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "videoVc1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vc2" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "videoVc2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.cctv" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "videoVndCctv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.dece.hd" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "videoVndDeceHd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.dece.mobile" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "videoVndDeceMobile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.dece.mp4" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "videoVndDeceMp4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.dece.pd" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "videoVndDecePd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.dece.sd" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "videoVndDeceSd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.dece.video" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "videoVndDeceVideo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.directv.mpeg" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "videoVndDirectvMpeg", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.directv.mpeg-tts" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "videoVndDirectvMpegTts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.dlna.mpeg-tts" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "videoVndDlnaMpegTts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.dvb.file" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "videoVndDvbFile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.fvt" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "videoVndFvt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.hns.video" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "videoVndHnsVideo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.iptvforum.1dparityfec-1010" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "videoVndIptvforum1dparityfec1010", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.iptvforum.1dparityfec-2005" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "videoVndIptvforum1dparityfec2005", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.iptvforum.2dparityfec-1010" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "videoVndIptvforum2dparityfec1010", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.iptvforum.2dparityfec-2005" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "videoVndIptvforum2dparityfec2005", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.iptvforum.ttsavc" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "videoVndIptvforumTtsavc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.iptvforum.ttsmpeg2" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "videoVndIptvforumTtsmpeg2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.motorola.video" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "videoVndMotorolaVideo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.motorola.videop" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "videoVndMotorolaVideop", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.mpegurl" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "videoVndMpegurl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.ms-playready.media.pyv" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "videoVndMsPlayreadyMediaPyv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.nokia.interleaved-multimedia" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "videoVndNokiaInterleavedMultimedia", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.nokia.mp4vr" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "videoVndNokiaMp4vr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.nokia.videovoip" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "videoVndNokiaVideovoip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.objectvideo" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "videoVndObjectvideo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.radgamettools.bink" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "videoVndRadgamettoolsBink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.radgamettools.smacker" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "videoVndRadgamettoolsSmacker", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.sealed.mpeg1" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "videoVndSealedMpeg1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.sealed.mpeg4" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "videoVndSealedMpeg4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.sealed.swf" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "videoVndSealedSwf", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.sealedmedia.softseal.mov" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "videoVndSealedmediaSoftsealMov", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.uvvu.mp4" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "videoVndUvvuMp4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.vivo" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "videoVndVivo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vp8" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "videoVp8", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/webm" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "videoWebm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/x-fli" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "videoXFli", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/x-flv" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "videoXFlv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/x-matroska" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "videoXMatroska", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/x-mng" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "videoXMng", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/x-ms-asf" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "videoXMsAsf", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/x-ms-vob" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "videoXMsVob", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/x-ms-wm" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "videoXMsWm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/x-ms-wmv" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "videoXMsWmv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/x-ms-wmx" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "videoXMsWmx", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/x-ms-wvx" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "videoXMsWvx", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/x-msvideo" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "videoXMsvideo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/x-sgi-movie" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "videoXSgiMovie", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/x-smv" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "videoXSmv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/x-f4v" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "videoXf4v", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/x-m4v" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateRequests.prototype, "videoXm4v", void 0);
    return MirrorTimelineUpdateRequests;
}(SpeakeasyBase));
export { MirrorTimelineUpdateRequests };
var MirrorTimelineUpdateSecurityOption1 = /** @class */ (function (_super) {
    __extends(MirrorTimelineUpdateSecurityOption1, _super);
    function MirrorTimelineUpdateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MirrorTimelineUpdateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MirrorTimelineUpdateSecurityOption1.prototype, "oauth2c", void 0);
    return MirrorTimelineUpdateSecurityOption1;
}(SpeakeasyBase));
export { MirrorTimelineUpdateSecurityOption1 };
var MirrorTimelineUpdateSecurityOption2 = /** @class */ (function (_super) {
    __extends(MirrorTimelineUpdateSecurityOption2, _super);
    function MirrorTimelineUpdateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MirrorTimelineUpdateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MirrorTimelineUpdateSecurityOption2.prototype, "oauth2c", void 0);
    return MirrorTimelineUpdateSecurityOption2;
}(SpeakeasyBase));
export { MirrorTimelineUpdateSecurityOption2 };
var MirrorTimelineUpdateSecurity = /** @class */ (function (_super) {
    __extends(MirrorTimelineUpdateSecurity, _super);
    function MirrorTimelineUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MirrorTimelineUpdateSecurityOption1)
    ], MirrorTimelineUpdateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MirrorTimelineUpdateSecurityOption2)
    ], MirrorTimelineUpdateSecurity.prototype, "option2", void 0);
    return MirrorTimelineUpdateSecurity;
}(SpeakeasyBase));
export { MirrorTimelineUpdateSecurity };
var MirrorTimelineUpdateRequest = /** @class */ (function (_super) {
    __extends(MirrorTimelineUpdateRequest, _super);
    function MirrorTimelineUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MirrorTimelineUpdatePathParams)
    ], MirrorTimelineUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MirrorTimelineUpdateQueryParams)
    ], MirrorTimelineUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MirrorTimelineUpdateRequests)
    ], MirrorTimelineUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MirrorTimelineUpdateSecurity)
    ], MirrorTimelineUpdateRequest.prototype, "security", void 0);
    return MirrorTimelineUpdateRequest;
}(SpeakeasyBase));
export { MirrorTimelineUpdateRequest };
var MirrorTimelineUpdateResponse = /** @class */ (function (_super) {
    __extends(MirrorTimelineUpdateResponse, _super);
    function MirrorTimelineUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineUpdateResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MirrorTimelineUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MirrorTimelineUpdateResponse.prototype, "statusCode", void 0);
    return MirrorTimelineUpdateResponse;
}(SpeakeasyBase));
export { MirrorTimelineUpdateResponse };
