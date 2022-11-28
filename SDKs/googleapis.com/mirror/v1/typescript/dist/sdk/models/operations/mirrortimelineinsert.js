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
var MirrorTimelineInsertQueryParams = /** @class */ (function (_super) {
    __extends(MirrorTimelineInsertQueryParams, _super);
    function MirrorTimelineInsertQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], MirrorTimelineInsertQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], MirrorTimelineInsertQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], MirrorTimelineInsertQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], MirrorTimelineInsertQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], MirrorTimelineInsertQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], MirrorTimelineInsertQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], MirrorTimelineInsertQueryParams.prototype, "userIp", void 0);
    return MirrorTimelineInsertQueryParams;
}(SpeakeasyBase));
export { MirrorTimelineInsertQueryParams };
var MirrorTimelineInsertRequests = /** @class */ (function (_super) {
    __extends(MirrorTimelineInsertRequests, _super);
    function MirrorTimelineInsertRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/1d-interleaved-parityfec" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audio1dInterleavedParityfec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/32kadpcm" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audio32kadpcm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/3gpp" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audio3gpp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/3gpp2" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audio3gpp2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/aac" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioAac", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/ac3" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioAc3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/adpcm" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioAdpcm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/amr" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioAmr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/amr-wb" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioAmrWb", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/amr-wb+" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioAmrWbPlus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/aptx" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioAptx", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/asc" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioAsc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/atrac3" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioAtrac3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/atrac-advanced-lossless" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioAtracAdvancedLossless", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/atrac-x" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioAtracX", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/basic" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioBasic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/bv16" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioBv16", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/bv32" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioBv32", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/clearmode" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioClearmode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/cn" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioCn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/dat12" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioDat12", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/dls" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioDls", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/dsr-es201108" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioDsrEs201108", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/dsr-es202050" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioDsrEs202050", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/dsr-es202211" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioDsrEs202211", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/dsr-es202212" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioDsrEs202212", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/dv" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioDv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/dvi4" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioDvi4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/eac3" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioEac3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/encaprtp" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioEncaprtp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/evrc" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioEvrc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/evrc0" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioEvrc0", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/evrc1" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioEvrc1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/evrc-qcp" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioEvrcQcp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/evrcb" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioEvrcb", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/evrcb0" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioEvrcb0", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/evrcb1" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioEvrcb1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/evrcnw" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioEvrcnw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/evrcnw0" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioEvrcnw0", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/evrcnw1" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioEvrcnw1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/evrcwb" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioEvrcwb", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/evrcwb0" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioEvrcwb0", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/evrcwb1" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioEvrcwb1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/evs" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioEvs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/fwdred" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioFwdred", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/g711-0" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioG7110", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/g719" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioG719", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/g722" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioG722", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/g7221" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioG7221", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/g723" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioG723", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/g726-16" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioG72616", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/g726-24" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioG72624", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/g726-32" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioG72632", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/g726-40" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioG72640", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/g728" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioG728", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/g729" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioG729", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/g7291" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioG7291", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/g729d" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioG729d", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/g729e" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioG729e", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/gsm" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioGsm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/gsm-efr" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioGsmEfr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/gsm-hr-08" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioGsmHr08", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/ip-mr_v2.5" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioIpMrV25", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/ilbc" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioIlbc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/isac" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioIsac", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/l16" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioL16", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/l20" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioL20", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/l24" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioL24", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/l8" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioL8", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/lpc" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioLpc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/melp" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioMelp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/melp1200" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioMelp1200", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/melp2400" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioMelp2400", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/melp600" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioMelp600", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/midi" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioMidi", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/mobile-xmf" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioMobileXmf", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/mp3" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioMp3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/mp4" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioMp4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/mp4a-latm" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioMp4aLatm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/mpa" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioMpa", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/mpa-robust" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioMpaRobust", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/mpeg" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioMpeg", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/mpeg4-generic" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioMpeg4Generic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/musepack" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioMusepack", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/ogg" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioOgg", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/opus" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioOpus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/parityfec" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioParityfec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/pcma" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioPcma", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/pcma-wb" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioPcmaWb", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/pcmu" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioPcmu", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/pcmu-wb" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioPcmuWb", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/prs.sid" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioPrsSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/qcelp" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioQcelp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/raptorfec" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioRaptorfec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/red" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioRed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/rtp-enc-aescm128" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioRtpEncAescm128", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/rtp-midi" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioRtpMidi", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/rtploopback" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioRtploopback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/rtx" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioRtx", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/s3m" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioS3m", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/silk" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioSilk", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/smv" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioSmv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/smv0" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioSmv0", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/smv-qcp" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioSmvQcp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/sp-midi" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioSpMidi", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/speex" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioSpeex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/t140c" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioT140c", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/t38" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioT38", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/telephone-event" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioTelephoneEvent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/tetra_acelp" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioTetraAcelp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/tone" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioTone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/uemclip" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioUemclip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/ulpfec" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioUlpfec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/usac" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioUsac", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/vdvi" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioVdvi", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/vmr-wb" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioVmrWb", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/vnd.3gpp.iufp" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioVnd3gppIufp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/vnd.4sb" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioVnd4sb", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/vnd.audiokoz" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioVndAudiokoz", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/vnd.celp" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioVndCelp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/vnd.cisco.nse" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioVndCiscoNse", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/vnd.cmles.radio-events" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioVndCmlesRadioEvents", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/vnd.cns.anp1" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioVndCnsAnp1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/vnd.cns.inf1" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioVndCnsInf1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/vnd.dece.audio" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioVndDeceAudio", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/vnd.digital-winds" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioVndDigitalWinds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/vnd.dlna.adts" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioVndDlnaAdts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/vnd.dolby.heaac.1" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioVndDolbyHeaac1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/vnd.dolby.heaac.2" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioVndDolbyHeaac2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/vnd.dolby.mlp" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioVndDolbyMlp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/vnd.dolby.mps" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioVndDolbyMps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/vnd.dolby.pl2" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioVndDolbyPl2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/vnd.dolby.pl2x" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioVndDolbyPl2x", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/vnd.dolby.pl2z" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioVndDolbyPl2z", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/vnd.dolby.pulse.1" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioVndDolbyPulse1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/vnd.dra" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioVndDra", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/vnd.dts" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioVndDts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/vnd.dts.hd" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioVndDtsHd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/vnd.dts.uhd" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioVndDtsUhd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/vnd.dvb.file" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioVndDvbFile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/vnd.everad.plj" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioVndEveradPlj", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/vnd.hns.audio" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioVndHnsAudio", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/vnd.lucent.voice" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioVndLucentVoice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/vnd.ms-playready.media.pya" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioVndMsPlayreadyMediaPya", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/vnd.nokia.mobile-xmf" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioVndNokiaMobileXmf", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/vnd.nortel.vbk" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioVndNortelVbk", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/vnd.nuera.ecelp4800" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioVndNueraEcelp4800", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/vnd.nuera.ecelp7470" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioVndNueraEcelp7470", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/vnd.nuera.ecelp9600" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioVndNueraEcelp9600", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/vnd.octel.sbc" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioVndOctelSbc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/vnd.presonus.multitrack" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioVndPresonusMultitrack", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/vnd.qcelp" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioVndQcelp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/vnd.rhetorex.32kadpcm" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioVndRhetorex32kadpcm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/vnd.rip" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioVndRip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/vnd.rn-realaudio" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioVndRnRealaudio", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/vnd.sealedmedia.softseal.mpeg" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioVndSealedmediaSoftsealMpeg", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/vnd.vmx.cvsd" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioVndVmxCvsd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/vnd.wave" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioVndWave", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/vorbis" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioVorbis", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/vorbis-config" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioVorbisConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/wav" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioWav", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/wave" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioWave", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/webm" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioWebm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/x-aac" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioXAac", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/x-aiff" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioXAiff", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/x-caf" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioXCaf", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/x-flac" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioXFlac", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/x-matroska" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioXMatroska", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/x-mpegurl" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioXMpegurl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/x-ms-wax" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioXMsWax", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/x-ms-wma" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioXMsWma", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/x-pn-realaudio" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioXPnRealaudio", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/x-pn-realaudio-plugin" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioXPnRealaudioPlugin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/x-realaudio" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioXRealaudio", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/x-tta" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioXTta", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/x-wav" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioXWav", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/xm" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioXm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=audio/x-m4a" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "audioXm4a", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/aces" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "imageAces", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/apng" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "imageApng", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/avci" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "imageAvci", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/avcs" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "imageAvcs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/bmp" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "imageBmp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/cgm" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "imageCgm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/dicom-rle" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "imageDicomRle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/emf" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "imageEmf", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/fits" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "imageFits", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/g3fax" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "imageG3fax", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/gif" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "imageGif", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/heic" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "imageHeic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/heic-sequence" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "imageHeicSequence", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/heif" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "imageHeif", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/heif-sequence" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "imageHeifSequence", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/ief" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "imageIef", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/jls" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "imageJls", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/jp2" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "imageJp2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/jpeg" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "imageJpeg", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/jpm" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "imageJpm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/jpx" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "imageJpx", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/ktx" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "imageKtx", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/naplps" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "imageNaplps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/pjpeg" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "imagePjpeg", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/png" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "imagePng", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/prs.btif" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "imagePrsBtif", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/prs.pti" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "imagePrsPti", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/pwg-raster" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "imagePwgRaster", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/sgi" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "imageSgi", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/svg+xml" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "imageSvgPlusXml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/t38" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "imageT38", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/tiff" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "imageTiff", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/tiff-fx" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "imageTiffFx", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/vnd.adobe.photoshop" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "imageVndAdobePhotoshop", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/vnd.airzip.accelerator.azv" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "imageVndAirzipAcceleratorAzv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/vnd.cns.inf2" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "imageVndCnsInf2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/vnd.dece.graphic" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "imageVndDeceGraphic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/vnd.djvu" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "imageVndDjvu", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/vnd.dvb.subtitle" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "imageVndDvbSubtitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/vnd.dwg" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "imageVndDwg", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/vnd.dxf" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "imageVndDxf", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/vnd.fastbidsheet" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "imageVndFastbidsheet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/vnd.fpx" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "imageVndFpx", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/vnd.fst" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "imageVndFst", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/vnd.fujixerox.edmics-mmr" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "imageVndFujixeroxEdmicsMmr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/vnd.fujixerox.edmics-rlc" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "imageVndFujixeroxEdmicsRlc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/vnd.globalgraphics.pgb" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "imageVndGlobalgraphicsPgb", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/vnd.microsoft.icon" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "imageVndMicrosoftIcon", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/vnd.mix" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "imageVndMix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/vnd.mozilla.apng" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "imageVndMozillaApng", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/vnd.ms-modi" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "imageVndMsModi", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/vnd.ms-photo" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "imageVndMsPhoto", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/vnd.net-fpx" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "imageVndNetFpx", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/vnd.radiance" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "imageVndRadiance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/vnd.sealed.png" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "imageVndSealedPng", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/vnd.sealedmedia.softseal.gif" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "imageVndSealedmediaSoftsealGif", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/vnd.sealedmedia.softseal.jpg" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "imageVndSealedmediaSoftsealJpg", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/vnd.svf" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "imageVndSvf", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/vnd.tencent.tap" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "imageVndTencentTap", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/vnd.valve.source.texture" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "imageVndValveSourceTexture", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/vnd.wap.wbmp" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "imageVndWapWbmp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/vnd.xiff" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "imageVndXiff", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/vnd.zbrush.pcx" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "imageVndZbrushPcx", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/webp" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "imageWebp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/wmf" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "imageWmf", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/x-3ds" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "imageX3ds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/x-cmu-raster" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "imageXCmuRaster", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/x-cmx" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "imageXCmx", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/x-freehand" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "imageXFreehand", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/x-icon" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "imageXIcon", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/x-jng" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "imageXJng", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/x-mrsid-image" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "imageXMrsidImage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/x-ms-bmp" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "imageXMsBmp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/x-pcx" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "imageXPcx", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/x-pict" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "imageXPict", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/x-portable-anymap" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "imageXPortableAnymap", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/x-portable-bitmap" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "imageXPortableBitmap", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/x-portable-graymap" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "imageXPortableGraymap", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/x-portable-pixmap" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "imageXPortablePixmap", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/x-rgb" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "imageXRgb", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/x-tga" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "imageXTga", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/x-xbitmap" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "imageXXbitmap", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/x-xcf" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "imageXXcf", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/x-xpixmap" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "imageXXpixmap", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/x-xwindowdump" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "imageXXwindowdump", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/1d-interleaved-parityfec" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "video1dInterleavedParityfec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/3gpp" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "video3gpp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/3gpp2" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "video3gpp2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/3gpp-tt" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "video3gppTt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/bmpeg" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "videoBmpeg", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/bt656" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "videoBt656", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/celb" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "videoCelb", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/dv" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "videoDv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/encaprtp" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "videoEncaprtp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/h261" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "videoH261", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/h263" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "videoH263", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/h263-1998" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "videoH2631998", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/h263-2000" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "videoH2632000", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/h264" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "videoH264", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/h264-rcdo" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "videoH264Rcdo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/h264-svc" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "videoH264Svc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/h265" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "videoH265", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/iso.segment" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "videoIsoSegment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/jpeg" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "videoJpeg", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/jpeg2000" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "videoJpeg2000", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/jpm" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "videoJpm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/mj2" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "videoMj2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/mp1s" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "videoMp1s", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/mp2p" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "videoMp2p", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/mp2t" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "videoMp2t", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/mp4" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "videoMp4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/mp4v-es" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "videoMp4vEs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/mpeg" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "videoMpeg", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/mpeg4-generic" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "videoMpeg4Generic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/mpv" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "videoMpv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/nv" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "videoNv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/ogg" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "videoOgg", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/parityfec" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "videoParityfec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/pointer" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "videoPointer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/quicktime" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "videoQuicktime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/raptorfec" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "videoRaptorfec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/raw" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "videoRaw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/rtp-enc-aescm128" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "videoRtpEncAescm128", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/rtploopback" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "videoRtploopback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/rtx" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "videoRtx", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/smpte291" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "videoSmpte291", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/smpte292m" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "videoSmpte292m", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/ulpfec" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "videoUlpfec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vc1" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "videoVc1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vc2" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "videoVc2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.cctv" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "videoVndCctv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.dece.hd" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "videoVndDeceHd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.dece.mobile" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "videoVndDeceMobile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.dece.mp4" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "videoVndDeceMp4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.dece.pd" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "videoVndDecePd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.dece.sd" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "videoVndDeceSd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.dece.video" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "videoVndDeceVideo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.directv.mpeg" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "videoVndDirectvMpeg", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.directv.mpeg-tts" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "videoVndDirectvMpegTts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.dlna.mpeg-tts" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "videoVndDlnaMpegTts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.dvb.file" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "videoVndDvbFile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.fvt" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "videoVndFvt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.hns.video" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "videoVndHnsVideo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.iptvforum.1dparityfec-1010" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "videoVndIptvforum1dparityfec1010", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.iptvforum.1dparityfec-2005" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "videoVndIptvforum1dparityfec2005", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.iptvforum.2dparityfec-1010" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "videoVndIptvforum2dparityfec1010", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.iptvforum.2dparityfec-2005" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "videoVndIptvforum2dparityfec2005", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.iptvforum.ttsavc" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "videoVndIptvforumTtsavc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.iptvforum.ttsmpeg2" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "videoVndIptvforumTtsmpeg2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.motorola.video" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "videoVndMotorolaVideo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.motorola.videop" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "videoVndMotorolaVideop", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.mpegurl" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "videoVndMpegurl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.ms-playready.media.pyv" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "videoVndMsPlayreadyMediaPyv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.nokia.interleaved-multimedia" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "videoVndNokiaInterleavedMultimedia", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.nokia.mp4vr" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "videoVndNokiaMp4vr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.nokia.videovoip" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "videoVndNokiaVideovoip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.objectvideo" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "videoVndObjectvideo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.radgamettools.bink" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "videoVndRadgamettoolsBink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.radgamettools.smacker" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "videoVndRadgamettoolsSmacker", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.sealed.mpeg1" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "videoVndSealedMpeg1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.sealed.mpeg4" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "videoVndSealedMpeg4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.sealed.swf" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "videoVndSealedSwf", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.sealedmedia.softseal.mov" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "videoVndSealedmediaSoftsealMov", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.uvvu.mp4" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "videoVndUvvuMp4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.vivo" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "videoVndVivo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vp8" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "videoVp8", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/webm" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "videoWebm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/x-fli" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "videoXFli", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/x-flv" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "videoXFlv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/x-matroska" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "videoXMatroska", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/x-mng" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "videoXMng", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/x-ms-asf" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "videoXMsAsf", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/x-ms-vob" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "videoXMsVob", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/x-ms-wm" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "videoXMsWm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/x-ms-wmv" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "videoXMsWmv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/x-ms-wmx" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "videoXMsWmx", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/x-ms-wvx" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "videoXMsWvx", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/x-msvideo" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "videoXMsvideo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/x-sgi-movie" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "videoXSgiMovie", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/x-smv" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "videoXSmv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/x-f4v" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "videoXf4v", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/x-m4v" }),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertRequests.prototype, "videoXm4v", void 0);
    return MirrorTimelineInsertRequests;
}(SpeakeasyBase));
export { MirrorTimelineInsertRequests };
var MirrorTimelineInsertSecurityOption1 = /** @class */ (function (_super) {
    __extends(MirrorTimelineInsertSecurityOption1, _super);
    function MirrorTimelineInsertSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MirrorTimelineInsertSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MirrorTimelineInsertSecurityOption1.prototype, "oauth2c", void 0);
    return MirrorTimelineInsertSecurityOption1;
}(SpeakeasyBase));
export { MirrorTimelineInsertSecurityOption1 };
var MirrorTimelineInsertSecurityOption2 = /** @class */ (function (_super) {
    __extends(MirrorTimelineInsertSecurityOption2, _super);
    function MirrorTimelineInsertSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MirrorTimelineInsertSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MirrorTimelineInsertSecurityOption2.prototype, "oauth2c", void 0);
    return MirrorTimelineInsertSecurityOption2;
}(SpeakeasyBase));
export { MirrorTimelineInsertSecurityOption2 };
var MirrorTimelineInsertSecurity = /** @class */ (function (_super) {
    __extends(MirrorTimelineInsertSecurity, _super);
    function MirrorTimelineInsertSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MirrorTimelineInsertSecurityOption1)
    ], MirrorTimelineInsertSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MirrorTimelineInsertSecurityOption2)
    ], MirrorTimelineInsertSecurity.prototype, "option2", void 0);
    return MirrorTimelineInsertSecurity;
}(SpeakeasyBase));
export { MirrorTimelineInsertSecurity };
var MirrorTimelineInsertRequest = /** @class */ (function (_super) {
    __extends(MirrorTimelineInsertRequest, _super);
    function MirrorTimelineInsertRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MirrorTimelineInsertQueryParams)
    ], MirrorTimelineInsertRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MirrorTimelineInsertRequests)
    ], MirrorTimelineInsertRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MirrorTimelineInsertSecurity)
    ], MirrorTimelineInsertRequest.prototype, "security", void 0);
    return MirrorTimelineInsertRequest;
}(SpeakeasyBase));
export { MirrorTimelineInsertRequest };
var MirrorTimelineInsertResponse = /** @class */ (function (_super) {
    __extends(MirrorTimelineInsertResponse, _super);
    function MirrorTimelineInsertResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineInsertResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MirrorTimelineInsertResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MirrorTimelineInsertResponse.prototype, "statusCode", void 0);
    return MirrorTimelineInsertResponse;
}(SpeakeasyBase));
export { MirrorTimelineInsertResponse };
