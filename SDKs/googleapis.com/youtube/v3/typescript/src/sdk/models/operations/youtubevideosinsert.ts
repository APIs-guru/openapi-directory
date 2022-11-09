import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class YoutubeVideosInsertQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=autoLevels" })
  autoLevels?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=notifySubscribers" })
  notifySubscribers?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=onBehalfOfContentOwner" })
  onBehalfOfContentOwner?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=onBehalfOfContentOwnerChannel" })
  onBehalfOfContentOwnerChannel?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=part" })
  part: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=stabilize" })
  stabilize?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class YoutubeVideosInsertRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/octet-stream" })
  applicationOctetStream: Uint8Array;

  @Metadata({ data: "request, media_type=video/1d-interleaved-parityfec" })
  video1dInterleavedParityfec: Uint8Array;

  @Metadata({ data: "request, media_type=video/3gpp" })
  video3gpp: Uint8Array;

  @Metadata({ data: "request, media_type=video/3gpp2" })
  video3gpp2: Uint8Array;

  @Metadata({ data: "request, media_type=video/3gpp-tt" })
  video3gppTt: Uint8Array;

  @Metadata({ data: "request, media_type=video/av1" })
  videoAv1: Uint8Array;

  @Metadata({ data: "request, media_type=video/bmpeg" })
  videoBmpeg: Uint8Array;

  @Metadata({ data: "request, media_type=video/bt656" })
  videoBt656: Uint8Array;

  @Metadata({ data: "request, media_type=video/celb" })
  videoCelb: Uint8Array;

  @Metadata({ data: "request, media_type=video/dv" })
  videoDv: Uint8Array;

  @Metadata({ data: "request, media_type=video/encaprtp" })
  videoEncaprtp: Uint8Array;

  @Metadata({ data: "request, media_type=video/ffv1" })
  videoFfv1: Uint8Array;

  @Metadata({ data: "request, media_type=video/flexfec" })
  videoFlexfec: Uint8Array;

  @Metadata({ data: "request, media_type=video/h261" })
  videoH261: Uint8Array;

  @Metadata({ data: "request, media_type=video/h263" })
  videoH263: Uint8Array;

  @Metadata({ data: "request, media_type=video/h263-1998" })
  videoH2631998: Uint8Array;

  @Metadata({ data: "request, media_type=video/h263-2000" })
  videoH2632000: Uint8Array;

  @Metadata({ data: "request, media_type=video/h264" })
  videoH264: Uint8Array;

  @Metadata({ data: "request, media_type=video/h264-rcdo" })
  videoH264Rcdo: Uint8Array;

  @Metadata({ data: "request, media_type=video/h264-svc" })
  videoH264Svc: Uint8Array;

  @Metadata({ data: "request, media_type=video/h265" })
  videoH265: Uint8Array;

  @Metadata({ data: "request, media_type=video/iso.segment" })
  videoIsoSegment: Uint8Array;

  @Metadata({ data: "request, media_type=video/jpeg" })
  videoJpeg: Uint8Array;

  @Metadata({ data: "request, media_type=video/jpeg2000" })
  videoJpeg2000: Uint8Array;

  @Metadata({ data: "request, media_type=video/jpm" })
  videoJpm: Uint8Array;

  @Metadata({ data: "request, media_type=video/jxsv" })
  videoJxsv: Uint8Array;

  @Metadata({ data: "request, media_type=video/mj2" })
  videoMj2: Uint8Array;

  @Metadata({ data: "request, media_type=video/mp1s" })
  videoMp1s: Uint8Array;

  @Metadata({ data: "request, media_type=video/mp2p" })
  videoMp2p: Uint8Array;

  @Metadata({ data: "request, media_type=video/mp2t" })
  videoMp2t: Uint8Array;

  @Metadata({ data: "request, media_type=video/mp4" })
  videoMp4: Uint8Array;

  @Metadata({ data: "request, media_type=video/mp4v-es" })
  videoMp4vEs: Uint8Array;

  @Metadata({ data: "request, media_type=video/mpeg" })
  videoMpeg: Uint8Array;

  @Metadata({ data: "request, media_type=video/mpeg4-generic" })
  videoMpeg4Generic: Uint8Array;

  @Metadata({ data: "request, media_type=video/mpv" })
  videoMpv: Uint8Array;

  @Metadata({ data: "request, media_type=video/nv" })
  videoNv: Uint8Array;

  @Metadata({ data: "request, media_type=video/ogg" })
  videoOgg: Uint8Array;

  @Metadata({ data: "request, media_type=video/parityfec" })
  videoParityfec: Uint8Array;

  @Metadata({ data: "request, media_type=video/pointer" })
  videoPointer: Uint8Array;

  @Metadata({ data: "request, media_type=video/quicktime" })
  videoQuicktime: Uint8Array;

  @Metadata({ data: "request, media_type=video/raptorfec" })
  videoRaptorfec: Uint8Array;

  @Metadata({ data: "request, media_type=video/raw" })
  videoRaw: Uint8Array;

  @Metadata({ data: "request, media_type=video/rtp-enc-aescm128" })
  videoRtpEncAescm128: Uint8Array;

  @Metadata({ data: "request, media_type=video/rtploopback" })
  videoRtploopback: Uint8Array;

  @Metadata({ data: "request, media_type=video/rtx" })
  videoRtx: Uint8Array;

  @Metadata({ data: "request, media_type=video/scip" })
  videoScip: Uint8Array;

  @Metadata({ data: "request, media_type=video/smpte291" })
  videoSmpte291: Uint8Array;

  @Metadata({ data: "request, media_type=video/smpte292m" })
  videoSmpte292m: Uint8Array;

  @Metadata({ data: "request, media_type=video/ulpfec" })
  videoUlpfec: Uint8Array;

  @Metadata({ data: "request, media_type=video/vc1" })
  videoVc1: Uint8Array;

  @Metadata({ data: "request, media_type=video/vc2" })
  videoVc2: Uint8Array;

  @Metadata({ data: "request, media_type=video/vnd.cctv" })
  videoVndCctv: Uint8Array;

  @Metadata({ data: "request, media_type=video/vnd.dece.hd" })
  videoVndDeceHd: Uint8Array;

  @Metadata({ data: "request, media_type=video/vnd.dece.mobile" })
  videoVndDeceMobile: Uint8Array;

  @Metadata({ data: "request, media_type=video/vnd.dece.mp4" })
  videoVndDeceMp4: Uint8Array;

  @Metadata({ data: "request, media_type=video/vnd.dece.pd" })
  videoVndDecePd: Uint8Array;

  @Metadata({ data: "request, media_type=video/vnd.dece.sd" })
  videoVndDeceSd: Uint8Array;

  @Metadata({ data: "request, media_type=video/vnd.dece.video" })
  videoVndDeceVideo: Uint8Array;

  @Metadata({ data: "request, media_type=video/vnd.directv.mpeg" })
  videoVndDirectvMpeg: Uint8Array;

  @Metadata({ data: "request, media_type=video/vnd.directv.mpeg-tts" })
  videoVndDirectvMpegTts: Uint8Array;

  @Metadata({ data: "request, media_type=video/vnd.dlna.mpeg-tts" })
  videoVndDlnaMpegTts: Uint8Array;

  @Metadata({ data: "request, media_type=video/vnd.dvb.file" })
  videoVndDvbFile: Uint8Array;

  @Metadata({ data: "request, media_type=video/vnd.fvt" })
  videoVndFvt: Uint8Array;

  @Metadata({ data: "request, media_type=video/vnd.hns.video" })
  videoVndHnsVideo: Uint8Array;

  @Metadata({ data: "request, media_type=video/vnd.iptvforum.1dparityfec-1010" })
  videoVndIptvforum1dparityfec1010: Uint8Array;

  @Metadata({ data: "request, media_type=video/vnd.iptvforum.1dparityfec-2005" })
  videoVndIptvforum1dparityfec2005: Uint8Array;

  @Metadata({ data: "request, media_type=video/vnd.iptvforum.2dparityfec-1010" })
  videoVndIptvforum2dparityfec1010: Uint8Array;

  @Metadata({ data: "request, media_type=video/vnd.iptvforum.2dparityfec-2005" })
  videoVndIptvforum2dparityfec2005: Uint8Array;

  @Metadata({ data: "request, media_type=video/vnd.iptvforum.ttsavc" })
  videoVndIptvforumTtsavc: Uint8Array;

  @Metadata({ data: "request, media_type=video/vnd.iptvforum.ttsmpeg2" })
  videoVndIptvforumTtsmpeg2: Uint8Array;

  @Metadata({ data: "request, media_type=video/vnd.motorola.video" })
  videoVndMotorolaVideo: Uint8Array;

  @Metadata({ data: "request, media_type=video/vnd.motorola.videop" })
  videoVndMotorolaVideop: Uint8Array;

  @Metadata({ data: "request, media_type=video/vnd.mpegurl" })
  videoVndMpegurl: Uint8Array;

  @Metadata({ data: "request, media_type=video/vnd.ms-playready.media.pyv" })
  videoVndMsPlayreadyMediaPyv: Uint8Array;

  @Metadata({ data: "request, media_type=video/vnd.nokia.interleaved-multimedia" })
  videoVndNokiaInterleavedMultimedia: Uint8Array;

  @Metadata({ data: "request, media_type=video/vnd.nokia.mp4vr" })
  videoVndNokiaMp4vr: Uint8Array;

  @Metadata({ data: "request, media_type=video/vnd.nokia.videovoip" })
  videoVndNokiaVideovoip: Uint8Array;

  @Metadata({ data: "request, media_type=video/vnd.objectvideo" })
  videoVndObjectvideo: Uint8Array;

  @Metadata({ data: "request, media_type=video/vnd.radgamettools.bink" })
  videoVndRadgamettoolsBink: Uint8Array;

  @Metadata({ data: "request, media_type=video/vnd.radgamettools.smacker" })
  videoVndRadgamettoolsSmacker: Uint8Array;

  @Metadata({ data: "request, media_type=video/vnd.sealed.mpeg1" })
  videoVndSealedMpeg1: Uint8Array;

  @Metadata({ data: "request, media_type=video/vnd.sealed.mpeg4" })
  videoVndSealedMpeg4: Uint8Array;

  @Metadata({ data: "request, media_type=video/vnd.sealed.swf" })
  videoVndSealedSwf: Uint8Array;

  @Metadata({ data: "request, media_type=video/vnd.sealedmedia.softseal.mov" })
  videoVndSealedmediaSoftsealMov: Uint8Array;

  @Metadata({ data: "request, media_type=video/vnd.uvvu.mp4" })
  videoVndUvvuMp4: Uint8Array;

  @Metadata({ data: "request, media_type=video/vnd.vivo" })
  videoVndVivo: Uint8Array;

  @Metadata({ data: "request, media_type=video/vnd.youtube.yt" })
  videoVndYoutubeYt: Uint8Array;

  @Metadata({ data: "request, media_type=video/vp8" })
  videoVp8: Uint8Array;

  @Metadata({ data: "request, media_type=video/vp9" })
  videoVp9: Uint8Array;

  @Metadata({ data: "request, media_type=video/webm" })
  videoWebm: Uint8Array;

  @Metadata({ data: "request, media_type=video/x-fli" })
  videoXFli: Uint8Array;

  @Metadata({ data: "request, media_type=video/x-flv" })
  videoXFlv: Uint8Array;

  @Metadata({ data: "request, media_type=video/x-matroska" })
  videoXMatroska: Uint8Array;

  @Metadata({ data: "request, media_type=video/x-mng" })
  videoXMng: Uint8Array;

  @Metadata({ data: "request, media_type=video/x-ms-asf" })
  videoXMsAsf: Uint8Array;

  @Metadata({ data: "request, media_type=video/x-ms-vob" })
  videoXMsVob: Uint8Array;

  @Metadata({ data: "request, media_type=video/x-ms-wm" })
  videoXMsWm: Uint8Array;

  @Metadata({ data: "request, media_type=video/x-ms-wmv" })
  videoXMsWmv: Uint8Array;

  @Metadata({ data: "request, media_type=video/x-ms-wmx" })
  videoXMsWmx: Uint8Array;

  @Metadata({ data: "request, media_type=video/x-ms-wvx" })
  videoXMsWvx: Uint8Array;

  @Metadata({ data: "request, media_type=video/x-msvideo" })
  videoXMsvideo: Uint8Array;

  @Metadata({ data: "request, media_type=video/x-sgi-movie" })
  videoXSgiMovie: Uint8Array;

  @Metadata({ data: "request, media_type=video/x-smv" })
  videoXSmv: Uint8Array;

  @Metadata({ data: "request, media_type=video/x-f4v" })
  videoXf4v: Uint8Array;

  @Metadata({ data: "request, media_type=video/x-m4v" })
  videoXm4v: Uint8Array;
}


export class YoutubeVideosInsertSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class YoutubeVideosInsertSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class YoutubeVideosInsertSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class YoutubeVideosInsertSecurityOption4 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class YoutubeVideosInsertSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: YoutubeVideosInsertSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: YoutubeVideosInsertSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: YoutubeVideosInsertSecurityOption3;

  @Metadata({ data: "security, option=true" })
  option4?: YoutubeVideosInsertSecurityOption4;
}


export class YoutubeVideosInsertRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: YoutubeVideosInsertQueryParams;

  @Metadata()
  request?: YoutubeVideosInsertRequests;

  @Metadata()
  security: YoutubeVideosInsertSecurity;
}


export class YoutubeVideosInsertResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  video?: shared.Video;
}
