import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class YoutubeVideosInsertQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    autoLevels?: boolean;
    callback?: string;
    fields?: string;
    key?: string;
    notifySubscribers?: boolean;
    oauthToken?: string;
    onBehalfOfContentOwner?: string;
    onBehalfOfContentOwnerChannel?: string;
    part: string[];
    prettyPrint?: boolean;
    quotaUser?: string;
    stabilize?: boolean;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class YoutubeVideosInsertRequests extends SpeakeasyBase {
    applicationOctetStream: Uint8Array;
    video1dInterleavedParityfec: Uint8Array;
    video3gpp: Uint8Array;
    video3gpp2: Uint8Array;
    video3gppTt: Uint8Array;
    videoAv1: Uint8Array;
    videoBmpeg: Uint8Array;
    videoBt656: Uint8Array;
    videoCelb: Uint8Array;
    videoDv: Uint8Array;
    videoEncaprtp: Uint8Array;
    videoFfv1: Uint8Array;
    videoFlexfec: Uint8Array;
    videoH261: Uint8Array;
    videoH263: Uint8Array;
    videoH2631998: Uint8Array;
    videoH2632000: Uint8Array;
    videoH264: Uint8Array;
    videoH264Rcdo: Uint8Array;
    videoH264Svc: Uint8Array;
    videoH265: Uint8Array;
    videoIsoSegment: Uint8Array;
    videoJpeg: Uint8Array;
    videoJpeg2000: Uint8Array;
    videoJpm: Uint8Array;
    videoJxsv: Uint8Array;
    videoMj2: Uint8Array;
    videoMp1s: Uint8Array;
    videoMp2p: Uint8Array;
    videoMp2t: Uint8Array;
    videoMp4: Uint8Array;
    videoMp4vEs: Uint8Array;
    videoMpeg: Uint8Array;
    videoMpeg4Generic: Uint8Array;
    videoMpv: Uint8Array;
    videoNv: Uint8Array;
    videoOgg: Uint8Array;
    videoParityfec: Uint8Array;
    videoPointer: Uint8Array;
    videoQuicktime: Uint8Array;
    videoRaptorfec: Uint8Array;
    videoRaw: Uint8Array;
    videoRtpEncAescm128: Uint8Array;
    videoRtploopback: Uint8Array;
    videoRtx: Uint8Array;
    videoScip: Uint8Array;
    videoSmpte291: Uint8Array;
    videoSmpte292m: Uint8Array;
    videoUlpfec: Uint8Array;
    videoVc1: Uint8Array;
    videoVc2: Uint8Array;
    videoVndCctv: Uint8Array;
    videoVndDeceHd: Uint8Array;
    videoVndDeceMobile: Uint8Array;
    videoVndDeceMp4: Uint8Array;
    videoVndDecePd: Uint8Array;
    videoVndDeceSd: Uint8Array;
    videoVndDeceVideo: Uint8Array;
    videoVndDirectvMpeg: Uint8Array;
    videoVndDirectvMpegTts: Uint8Array;
    videoVndDlnaMpegTts: Uint8Array;
    videoVndDvbFile: Uint8Array;
    videoVndFvt: Uint8Array;
    videoVndHnsVideo: Uint8Array;
    videoVndIptvforum1dparityfec1010: Uint8Array;
    videoVndIptvforum1dparityfec2005: Uint8Array;
    videoVndIptvforum2dparityfec1010: Uint8Array;
    videoVndIptvforum2dparityfec2005: Uint8Array;
    videoVndIptvforumTtsavc: Uint8Array;
    videoVndIptvforumTtsmpeg2: Uint8Array;
    videoVndMotorolaVideo: Uint8Array;
    videoVndMotorolaVideop: Uint8Array;
    videoVndMpegurl: Uint8Array;
    videoVndMsPlayreadyMediaPyv: Uint8Array;
    videoVndNokiaInterleavedMultimedia: Uint8Array;
    videoVndNokiaMp4vr: Uint8Array;
    videoVndNokiaVideovoip: Uint8Array;
    videoVndObjectvideo: Uint8Array;
    videoVndRadgamettoolsBink: Uint8Array;
    videoVndRadgamettoolsSmacker: Uint8Array;
    videoVndSealedMpeg1: Uint8Array;
    videoVndSealedMpeg4: Uint8Array;
    videoVndSealedSwf: Uint8Array;
    videoVndSealedmediaSoftsealMov: Uint8Array;
    videoVndUvvuMp4: Uint8Array;
    videoVndVivo: Uint8Array;
    videoVndYoutubeYt: Uint8Array;
    videoVp8: Uint8Array;
    videoVp9: Uint8Array;
    videoWebm: Uint8Array;
    videoXFli: Uint8Array;
    videoXFlv: Uint8Array;
    videoXMatroska: Uint8Array;
    videoXMng: Uint8Array;
    videoXMsAsf: Uint8Array;
    videoXMsVob: Uint8Array;
    videoXMsWm: Uint8Array;
    videoXMsWmv: Uint8Array;
    videoXMsWmx: Uint8Array;
    videoXMsWvx: Uint8Array;
    videoXMsvideo: Uint8Array;
    videoXSgiMovie: Uint8Array;
    videoXSmv: Uint8Array;
    videoXf4v: Uint8Array;
    videoXm4v: Uint8Array;
}
export declare class YoutubeVideosInsertSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeVideosInsertSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeVideosInsertSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeVideosInsertSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeVideosInsertSecurity extends SpeakeasyBase {
    option1?: YoutubeVideosInsertSecurityOption1;
    option2?: YoutubeVideosInsertSecurityOption2;
    option3?: YoutubeVideosInsertSecurityOption3;
    option4?: YoutubeVideosInsertSecurityOption4;
}
export declare class YoutubeVideosInsertRequest extends SpeakeasyBase {
    queryParams: YoutubeVideosInsertQueryParams;
    request?: YoutubeVideosInsertRequests;
    security: YoutubeVideosInsertSecurity;
}
export declare class YoutubeVideosInsertResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    video?: shared.Video;
}
