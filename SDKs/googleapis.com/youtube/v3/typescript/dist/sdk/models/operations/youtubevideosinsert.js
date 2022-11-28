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
var YoutubeVideosInsertQueryParams = /** @class */ (function (_super) {
    __extends(YoutubeVideosInsertQueryParams, _super);
    function YoutubeVideosInsertQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], YoutubeVideosInsertQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], YoutubeVideosInsertQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], YoutubeVideosInsertQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=autoLevels" }),
        __metadata("design:type", Boolean)
    ], YoutubeVideosInsertQueryParams.prototype, "autoLevels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], YoutubeVideosInsertQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], YoutubeVideosInsertQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], YoutubeVideosInsertQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=notifySubscribers" }),
        __metadata("design:type", Boolean)
    ], YoutubeVideosInsertQueryParams.prototype, "notifySubscribers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], YoutubeVideosInsertQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=onBehalfOfContentOwner" }),
        __metadata("design:type", String)
    ], YoutubeVideosInsertQueryParams.prototype, "onBehalfOfContentOwner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=onBehalfOfContentOwnerChannel" }),
        __metadata("design:type", String)
    ], YoutubeVideosInsertQueryParams.prototype, "onBehalfOfContentOwnerChannel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=part" }),
        __metadata("design:type", Array)
    ], YoutubeVideosInsertQueryParams.prototype, "part", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], YoutubeVideosInsertQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], YoutubeVideosInsertQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=stabilize" }),
        __metadata("design:type", Boolean)
    ], YoutubeVideosInsertQueryParams.prototype, "stabilize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], YoutubeVideosInsertQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], YoutubeVideosInsertQueryParams.prototype, "uploadProtocol", void 0);
    return YoutubeVideosInsertQueryParams;
}(SpeakeasyBase));
export { YoutubeVideosInsertQueryParams };
var YoutubeVideosInsertRequests = /** @class */ (function (_super) {
    __extends(YoutubeVideosInsertRequests, _super);
    function YoutubeVideosInsertRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/octet-stream" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeVideosInsertRequests.prototype, "applicationOctetStream", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/1d-interleaved-parityfec" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeVideosInsertRequests.prototype, "video1dInterleavedParityfec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/3gpp" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeVideosInsertRequests.prototype, "video3gpp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/3gpp2" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeVideosInsertRequests.prototype, "video3gpp2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/3gpp-tt" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeVideosInsertRequests.prototype, "video3gppTt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/av1" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeVideosInsertRequests.prototype, "videoAv1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/bmpeg" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeVideosInsertRequests.prototype, "videoBmpeg", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/bt656" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeVideosInsertRequests.prototype, "videoBt656", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/celb" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeVideosInsertRequests.prototype, "videoCelb", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/dv" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeVideosInsertRequests.prototype, "videoDv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/encaprtp" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeVideosInsertRequests.prototype, "videoEncaprtp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/ffv1" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeVideosInsertRequests.prototype, "videoFfv1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/flexfec" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeVideosInsertRequests.prototype, "videoFlexfec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/h261" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeVideosInsertRequests.prototype, "videoH261", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/h263" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeVideosInsertRequests.prototype, "videoH263", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/h263-1998" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeVideosInsertRequests.prototype, "videoH2631998", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/h263-2000" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeVideosInsertRequests.prototype, "videoH2632000", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/h264" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeVideosInsertRequests.prototype, "videoH264", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/h264-rcdo" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeVideosInsertRequests.prototype, "videoH264Rcdo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/h264-svc" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeVideosInsertRequests.prototype, "videoH264Svc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/h265" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeVideosInsertRequests.prototype, "videoH265", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/iso.segment" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeVideosInsertRequests.prototype, "videoIsoSegment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/jpeg" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeVideosInsertRequests.prototype, "videoJpeg", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/jpeg2000" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeVideosInsertRequests.prototype, "videoJpeg2000", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/jpm" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeVideosInsertRequests.prototype, "videoJpm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/jxsv" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeVideosInsertRequests.prototype, "videoJxsv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/mj2" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeVideosInsertRequests.prototype, "videoMj2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/mp1s" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeVideosInsertRequests.prototype, "videoMp1s", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/mp2p" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeVideosInsertRequests.prototype, "videoMp2p", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/mp2t" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeVideosInsertRequests.prototype, "videoMp2t", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/mp4" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeVideosInsertRequests.prototype, "videoMp4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/mp4v-es" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeVideosInsertRequests.prototype, "videoMp4vEs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/mpeg" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeVideosInsertRequests.prototype, "videoMpeg", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/mpeg4-generic" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeVideosInsertRequests.prototype, "videoMpeg4Generic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/mpv" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeVideosInsertRequests.prototype, "videoMpv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/nv" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeVideosInsertRequests.prototype, "videoNv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/ogg" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeVideosInsertRequests.prototype, "videoOgg", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/parityfec" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeVideosInsertRequests.prototype, "videoParityfec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/pointer" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeVideosInsertRequests.prototype, "videoPointer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/quicktime" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeVideosInsertRequests.prototype, "videoQuicktime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/raptorfec" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeVideosInsertRequests.prototype, "videoRaptorfec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/raw" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeVideosInsertRequests.prototype, "videoRaw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/rtp-enc-aescm128" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeVideosInsertRequests.prototype, "videoRtpEncAescm128", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/rtploopback" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeVideosInsertRequests.prototype, "videoRtploopback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/rtx" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeVideosInsertRequests.prototype, "videoRtx", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/scip" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeVideosInsertRequests.prototype, "videoScip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/smpte291" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeVideosInsertRequests.prototype, "videoSmpte291", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/smpte292m" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeVideosInsertRequests.prototype, "videoSmpte292m", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/ulpfec" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeVideosInsertRequests.prototype, "videoUlpfec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vc1" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeVideosInsertRequests.prototype, "videoVc1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vc2" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeVideosInsertRequests.prototype, "videoVc2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.cctv" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeVideosInsertRequests.prototype, "videoVndCctv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.dece.hd" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeVideosInsertRequests.prototype, "videoVndDeceHd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.dece.mobile" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeVideosInsertRequests.prototype, "videoVndDeceMobile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.dece.mp4" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeVideosInsertRequests.prototype, "videoVndDeceMp4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.dece.pd" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeVideosInsertRequests.prototype, "videoVndDecePd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.dece.sd" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeVideosInsertRequests.prototype, "videoVndDeceSd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.dece.video" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeVideosInsertRequests.prototype, "videoVndDeceVideo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.directv.mpeg" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeVideosInsertRequests.prototype, "videoVndDirectvMpeg", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.directv.mpeg-tts" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeVideosInsertRequests.prototype, "videoVndDirectvMpegTts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.dlna.mpeg-tts" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeVideosInsertRequests.prototype, "videoVndDlnaMpegTts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.dvb.file" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeVideosInsertRequests.prototype, "videoVndDvbFile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.fvt" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeVideosInsertRequests.prototype, "videoVndFvt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.hns.video" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeVideosInsertRequests.prototype, "videoVndHnsVideo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.iptvforum.1dparityfec-1010" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeVideosInsertRequests.prototype, "videoVndIptvforum1dparityfec1010", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.iptvforum.1dparityfec-2005" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeVideosInsertRequests.prototype, "videoVndIptvforum1dparityfec2005", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.iptvforum.2dparityfec-1010" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeVideosInsertRequests.prototype, "videoVndIptvforum2dparityfec1010", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.iptvforum.2dparityfec-2005" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeVideosInsertRequests.prototype, "videoVndIptvforum2dparityfec2005", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.iptvforum.ttsavc" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeVideosInsertRequests.prototype, "videoVndIptvforumTtsavc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.iptvforum.ttsmpeg2" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeVideosInsertRequests.prototype, "videoVndIptvforumTtsmpeg2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.motorola.video" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeVideosInsertRequests.prototype, "videoVndMotorolaVideo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.motorola.videop" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeVideosInsertRequests.prototype, "videoVndMotorolaVideop", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.mpegurl" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeVideosInsertRequests.prototype, "videoVndMpegurl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.ms-playready.media.pyv" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeVideosInsertRequests.prototype, "videoVndMsPlayreadyMediaPyv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.nokia.interleaved-multimedia" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeVideosInsertRequests.prototype, "videoVndNokiaInterleavedMultimedia", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.nokia.mp4vr" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeVideosInsertRequests.prototype, "videoVndNokiaMp4vr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.nokia.videovoip" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeVideosInsertRequests.prototype, "videoVndNokiaVideovoip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.objectvideo" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeVideosInsertRequests.prototype, "videoVndObjectvideo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.radgamettools.bink" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeVideosInsertRequests.prototype, "videoVndRadgamettoolsBink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.radgamettools.smacker" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeVideosInsertRequests.prototype, "videoVndRadgamettoolsSmacker", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.sealed.mpeg1" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeVideosInsertRequests.prototype, "videoVndSealedMpeg1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.sealed.mpeg4" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeVideosInsertRequests.prototype, "videoVndSealedMpeg4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.sealed.swf" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeVideosInsertRequests.prototype, "videoVndSealedSwf", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.sealedmedia.softseal.mov" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeVideosInsertRequests.prototype, "videoVndSealedmediaSoftsealMov", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.uvvu.mp4" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeVideosInsertRequests.prototype, "videoVndUvvuMp4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.vivo" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeVideosInsertRequests.prototype, "videoVndVivo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vnd.youtube.yt" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeVideosInsertRequests.prototype, "videoVndYoutubeYt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vp8" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeVideosInsertRequests.prototype, "videoVp8", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/vp9" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeVideosInsertRequests.prototype, "videoVp9", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/webm" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeVideosInsertRequests.prototype, "videoWebm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/x-fli" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeVideosInsertRequests.prototype, "videoXFli", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/x-flv" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeVideosInsertRequests.prototype, "videoXFlv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/x-matroska" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeVideosInsertRequests.prototype, "videoXMatroska", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/x-mng" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeVideosInsertRequests.prototype, "videoXMng", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/x-ms-asf" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeVideosInsertRequests.prototype, "videoXMsAsf", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/x-ms-vob" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeVideosInsertRequests.prototype, "videoXMsVob", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/x-ms-wm" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeVideosInsertRequests.prototype, "videoXMsWm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/x-ms-wmv" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeVideosInsertRequests.prototype, "videoXMsWmv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/x-ms-wmx" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeVideosInsertRequests.prototype, "videoXMsWmx", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/x-ms-wvx" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeVideosInsertRequests.prototype, "videoXMsWvx", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/x-msvideo" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeVideosInsertRequests.prototype, "videoXMsvideo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/x-sgi-movie" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeVideosInsertRequests.prototype, "videoXSgiMovie", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/x-smv" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeVideosInsertRequests.prototype, "videoXSmv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/x-f4v" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeVideosInsertRequests.prototype, "videoXf4v", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=video/x-m4v" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeVideosInsertRequests.prototype, "videoXm4v", void 0);
    return YoutubeVideosInsertRequests;
}(SpeakeasyBase));
export { YoutubeVideosInsertRequests };
var YoutubeVideosInsertSecurityOption1 = /** @class */ (function (_super) {
    __extends(YoutubeVideosInsertSecurityOption1, _super);
    function YoutubeVideosInsertSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeVideosInsertSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeVideosInsertSecurityOption1.prototype, "oauth2c", void 0);
    return YoutubeVideosInsertSecurityOption1;
}(SpeakeasyBase));
export { YoutubeVideosInsertSecurityOption1 };
var YoutubeVideosInsertSecurityOption2 = /** @class */ (function (_super) {
    __extends(YoutubeVideosInsertSecurityOption2, _super);
    function YoutubeVideosInsertSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeVideosInsertSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeVideosInsertSecurityOption2.prototype, "oauth2c", void 0);
    return YoutubeVideosInsertSecurityOption2;
}(SpeakeasyBase));
export { YoutubeVideosInsertSecurityOption2 };
var YoutubeVideosInsertSecurityOption3 = /** @class */ (function (_super) {
    __extends(YoutubeVideosInsertSecurityOption3, _super);
    function YoutubeVideosInsertSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeVideosInsertSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeVideosInsertSecurityOption3.prototype, "oauth2c", void 0);
    return YoutubeVideosInsertSecurityOption3;
}(SpeakeasyBase));
export { YoutubeVideosInsertSecurityOption3 };
var YoutubeVideosInsertSecurityOption4 = /** @class */ (function (_super) {
    __extends(YoutubeVideosInsertSecurityOption4, _super);
    function YoutubeVideosInsertSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeVideosInsertSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeVideosInsertSecurityOption4.prototype, "oauth2c", void 0);
    return YoutubeVideosInsertSecurityOption4;
}(SpeakeasyBase));
export { YoutubeVideosInsertSecurityOption4 };
var YoutubeVideosInsertSecurity = /** @class */ (function (_super) {
    __extends(YoutubeVideosInsertSecurity, _super);
    function YoutubeVideosInsertSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeVideosInsertSecurityOption1)
    ], YoutubeVideosInsertSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeVideosInsertSecurityOption2)
    ], YoutubeVideosInsertSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeVideosInsertSecurityOption3)
    ], YoutubeVideosInsertSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeVideosInsertSecurityOption4)
    ], YoutubeVideosInsertSecurity.prototype, "option4", void 0);
    return YoutubeVideosInsertSecurity;
}(SpeakeasyBase));
export { YoutubeVideosInsertSecurity };
var YoutubeVideosInsertRequest = /** @class */ (function (_super) {
    __extends(YoutubeVideosInsertRequest, _super);
    function YoutubeVideosInsertRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", YoutubeVideosInsertQueryParams)
    ], YoutubeVideosInsertRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", YoutubeVideosInsertRequests)
    ], YoutubeVideosInsertRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", YoutubeVideosInsertSecurity)
    ], YoutubeVideosInsertRequest.prototype, "security", void 0);
    return YoutubeVideosInsertRequest;
}(SpeakeasyBase));
export { YoutubeVideosInsertRequest };
var YoutubeVideosInsertResponse = /** @class */ (function (_super) {
    __extends(YoutubeVideosInsertResponse, _super);
    function YoutubeVideosInsertResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], YoutubeVideosInsertResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], YoutubeVideosInsertResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Video)
    ], YoutubeVideosInsertResponse.prototype, "video", void 0);
    return YoutubeVideosInsertResponse;
}(SpeakeasyBase));
export { YoutubeVideosInsertResponse };
