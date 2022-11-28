import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class YoutubeVideosInsertQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=autoLevels" })
  autoLevels?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=notifySubscribers" })
  notifySubscribers?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=onBehalfOfContentOwner" })
  onBehalfOfContentOwner?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=onBehalfOfContentOwnerChannel" })
  onBehalfOfContentOwnerChannel?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=part" })
  part: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=stabilize" })
  stabilize?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class YoutubeVideosInsertRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/octet-stream" })
  applicationOctetStream: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/1d-interleaved-parityfec" })
  video1dInterleavedParityfec: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/3gpp" })
  video3gpp: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/3gpp2" })
  video3gpp2: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/3gpp-tt" })
  video3gppTt: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/av1" })
  videoAv1: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/bmpeg" })
  videoBmpeg: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/bt656" })
  videoBt656: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/celb" })
  videoCelb: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/dv" })
  videoDv: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/encaprtp" })
  videoEncaprtp: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/ffv1" })
  videoFfv1: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/flexfec" })
  videoFlexfec: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/h261" })
  videoH261: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/h263" })
  videoH263: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/h263-1998" })
  videoH2631998: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/h263-2000" })
  videoH2632000: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/h264" })
  videoH264: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/h264-rcdo" })
  videoH264Rcdo: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/h264-svc" })
  videoH264Svc: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/h265" })
  videoH265: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/iso.segment" })
  videoIsoSegment: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/jpeg" })
  videoJpeg: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/jpeg2000" })
  videoJpeg2000: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/jpm" })
  videoJpm: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/jxsv" })
  videoJxsv: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/mj2" })
  videoMj2: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/mp1s" })
  videoMp1s: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/mp2p" })
  videoMp2p: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/mp2t" })
  videoMp2t: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/mp4" })
  videoMp4: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/mp4v-es" })
  videoMp4vEs: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/mpeg" })
  videoMpeg: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/mpeg4-generic" })
  videoMpeg4Generic: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/mpv" })
  videoMpv: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/nv" })
  videoNv: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/ogg" })
  videoOgg: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/parityfec" })
  videoParityfec: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/pointer" })
  videoPointer: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/quicktime" })
  videoQuicktime: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/raptorfec" })
  videoRaptorfec: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/raw" })
  videoRaw: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/rtp-enc-aescm128" })
  videoRtpEncAescm128: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/rtploopback" })
  videoRtploopback: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/rtx" })
  videoRtx: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/scip" })
  videoScip: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/smpte291" })
  videoSmpte291: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/smpte292m" })
  videoSmpte292m: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/ulpfec" })
  videoUlpfec: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/vc1" })
  videoVc1: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/vc2" })
  videoVc2: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/vnd.cctv" })
  videoVndCctv: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/vnd.dece.hd" })
  videoVndDeceHd: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/vnd.dece.mobile" })
  videoVndDeceMobile: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/vnd.dece.mp4" })
  videoVndDeceMp4: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/vnd.dece.pd" })
  videoVndDecePd: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/vnd.dece.sd" })
  videoVndDeceSd: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/vnd.dece.video" })
  videoVndDeceVideo: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/vnd.directv.mpeg" })
  videoVndDirectvMpeg: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/vnd.directv.mpeg-tts" })
  videoVndDirectvMpegTts: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/vnd.dlna.mpeg-tts" })
  videoVndDlnaMpegTts: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/vnd.dvb.file" })
  videoVndDvbFile: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/vnd.fvt" })
  videoVndFvt: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/vnd.hns.video" })
  videoVndHnsVideo: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/vnd.iptvforum.1dparityfec-1010" })
  videoVndIptvforum1dparityfec1010: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/vnd.iptvforum.1dparityfec-2005" })
  videoVndIptvforum1dparityfec2005: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/vnd.iptvforum.2dparityfec-1010" })
  videoVndIptvforum2dparityfec1010: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/vnd.iptvforum.2dparityfec-2005" })
  videoVndIptvforum2dparityfec2005: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/vnd.iptvforum.ttsavc" })
  videoVndIptvforumTtsavc: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/vnd.iptvforum.ttsmpeg2" })
  videoVndIptvforumTtsmpeg2: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/vnd.motorola.video" })
  videoVndMotorolaVideo: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/vnd.motorola.videop" })
  videoVndMotorolaVideop: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/vnd.mpegurl" })
  videoVndMpegurl: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/vnd.ms-playready.media.pyv" })
  videoVndMsPlayreadyMediaPyv: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/vnd.nokia.interleaved-multimedia" })
  videoVndNokiaInterleavedMultimedia: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/vnd.nokia.mp4vr" })
  videoVndNokiaMp4vr: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/vnd.nokia.videovoip" })
  videoVndNokiaVideovoip: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/vnd.objectvideo" })
  videoVndObjectvideo: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/vnd.radgamettools.bink" })
  videoVndRadgamettoolsBink: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/vnd.radgamettools.smacker" })
  videoVndRadgamettoolsSmacker: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/vnd.sealed.mpeg1" })
  videoVndSealedMpeg1: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/vnd.sealed.mpeg4" })
  videoVndSealedMpeg4: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/vnd.sealed.swf" })
  videoVndSealedSwf: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/vnd.sealedmedia.softseal.mov" })
  videoVndSealedmediaSoftsealMov: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/vnd.uvvu.mp4" })
  videoVndUvvuMp4: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/vnd.vivo" })
  videoVndVivo: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/vnd.youtube.yt" })
  videoVndYoutubeYt: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/vp8" })
  videoVp8: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/vp9" })
  videoVp9: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/webm" })
  videoWebm: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/x-fli" })
  videoXFli: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/x-flv" })
  videoXFlv: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/x-matroska" })
  videoXMatroska: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/x-mng" })
  videoXMng: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/x-ms-asf" })
  videoXMsAsf: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/x-ms-vob" })
  videoXMsVob: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/x-ms-wm" })
  videoXMsWm: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/x-ms-wmv" })
  videoXMsWmv: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/x-ms-wmx" })
  videoXMsWmx: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/x-ms-wvx" })
  videoXMsWvx: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/x-msvideo" })
  videoXMsvideo: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/x-sgi-movie" })
  videoXSgiMovie: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/x-smv" })
  videoXSmv: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/x-f4v" })
  videoXf4v: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/x-m4v" })
  videoXm4v: Uint8Array;
}


export class YoutubeVideosInsertSecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class YoutubeVideosInsertSecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class YoutubeVideosInsertSecurityOption3 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class YoutubeVideosInsertSecurityOption4 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class YoutubeVideosInsertSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: YoutubeVideosInsertSecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: YoutubeVideosInsertSecurityOption2;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option3?: YoutubeVideosInsertSecurityOption3;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option4?: YoutubeVideosInsertSecurityOption4;
}


export class YoutubeVideosInsertRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: YoutubeVideosInsertQueryParams;

  @SpeakeasyMetadata()
  request?: YoutubeVideosInsertRequests;

  @SpeakeasyMetadata()
  security: YoutubeVideosInsertSecurity;
}


export class YoutubeVideosInsertResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  video?: shared.Video;
}
