from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class YoutubeVideosInsertQueryParams:
    part: List[str] = field(metadata={'query_param': { 'field_name': 'part', 'style': 'form', 'explode': True }})
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    auto_levels: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'autoLevels', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    notify_subscribers: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'notifySubscribers', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    on_behalf_of_content_owner: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'onBehalfOfContentOwner', 'style': 'form', 'explode': True }})
    on_behalf_of_content_owner_channel: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'onBehalfOfContentOwnerChannel', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    stabilize: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'stabilize', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class YoutubeVideosInsertRequests:
    application_octet_stream: bytes = field(metadata={'request': { 'media_type': 'application/octet-stream' }})
    video1d_interleaved_parityfec: bytes = field(metadata={'request': { 'media_type': 'video/1d-interleaved-parityfec' }})
    video3gpp: bytes = field(metadata={'request': { 'media_type': 'video/3gpp' }})
    video3gpp2: bytes = field(metadata={'request': { 'media_type': 'video/3gpp2' }})
    video3gpp_tt: bytes = field(metadata={'request': { 'media_type': 'video/3gpp-tt' }})
    video_av1: bytes = field(metadata={'request': { 'media_type': 'video/av1' }})
    video_bmpeg: bytes = field(metadata={'request': { 'media_type': 'video/bmpeg' }})
    video_bt656: bytes = field(metadata={'request': { 'media_type': 'video/bt656' }})
    video_celb: bytes = field(metadata={'request': { 'media_type': 'video/celb' }})
    video_dv: bytes = field(metadata={'request': { 'media_type': 'video/dv' }})
    video_encaprtp: bytes = field(metadata={'request': { 'media_type': 'video/encaprtp' }})
    video_ffv1: bytes = field(metadata={'request': { 'media_type': 'video/ffv1' }})
    video_flexfec: bytes = field(metadata={'request': { 'media_type': 'video/flexfec' }})
    video_h261: bytes = field(metadata={'request': { 'media_type': 'video/h261' }})
    video_h263: bytes = field(metadata={'request': { 'media_type': 'video/h263' }})
    video_h2631998: bytes = field(metadata={'request': { 'media_type': 'video/h263-1998' }})
    video_h2632000: bytes = field(metadata={'request': { 'media_type': 'video/h263-2000' }})
    video_h264: bytes = field(metadata={'request': { 'media_type': 'video/h264' }})
    video_h264_rcdo: bytes = field(metadata={'request': { 'media_type': 'video/h264-rcdo' }})
    video_h264_svc: bytes = field(metadata={'request': { 'media_type': 'video/h264-svc' }})
    video_h265: bytes = field(metadata={'request': { 'media_type': 'video/h265' }})
    video_iso_segment: bytes = field(metadata={'request': { 'media_type': 'video/iso.segment' }})
    video_jpeg: bytes = field(metadata={'request': { 'media_type': 'video/jpeg' }})
    video_jpeg2000: bytes = field(metadata={'request': { 'media_type': 'video/jpeg2000' }})
    video_jpm: bytes = field(metadata={'request': { 'media_type': 'video/jpm' }})
    video_jxsv: bytes = field(metadata={'request': { 'media_type': 'video/jxsv' }})
    video_mj2: bytes = field(metadata={'request': { 'media_type': 'video/mj2' }})
    video_mp1s: bytes = field(metadata={'request': { 'media_type': 'video/mp1s' }})
    video_mp2p: bytes = field(metadata={'request': { 'media_type': 'video/mp2p' }})
    video_mp2t: bytes = field(metadata={'request': { 'media_type': 'video/mp2t' }})
    video_mp4: bytes = field(metadata={'request': { 'media_type': 'video/mp4' }})
    video_mp4v_es: bytes = field(metadata={'request': { 'media_type': 'video/mp4v-es' }})
    video_mpeg: bytes = field(metadata={'request': { 'media_type': 'video/mpeg' }})
    video_mpeg4_generic: bytes = field(metadata={'request': { 'media_type': 'video/mpeg4-generic' }})
    video_mpv: bytes = field(metadata={'request': { 'media_type': 'video/mpv' }})
    video_nv: bytes = field(metadata={'request': { 'media_type': 'video/nv' }})
    video_ogg: bytes = field(metadata={'request': { 'media_type': 'video/ogg' }})
    video_parityfec: bytes = field(metadata={'request': { 'media_type': 'video/parityfec' }})
    video_pointer: bytes = field(metadata={'request': { 'media_type': 'video/pointer' }})
    video_quicktime: bytes = field(metadata={'request': { 'media_type': 'video/quicktime' }})
    video_raptorfec: bytes = field(metadata={'request': { 'media_type': 'video/raptorfec' }})
    video_raw: bytes = field(metadata={'request': { 'media_type': 'video/raw' }})
    video_rtp_enc_aescm128: bytes = field(metadata={'request': { 'media_type': 'video/rtp-enc-aescm128' }})
    video_rtploopback: bytes = field(metadata={'request': { 'media_type': 'video/rtploopback' }})
    video_rtx: bytes = field(metadata={'request': { 'media_type': 'video/rtx' }})
    video_scip: bytes = field(metadata={'request': { 'media_type': 'video/scip' }})
    video_smpte291: bytes = field(metadata={'request': { 'media_type': 'video/smpte291' }})
    video_smpte292m: bytes = field(metadata={'request': { 'media_type': 'video/smpte292m' }})
    video_ulpfec: bytes = field(metadata={'request': { 'media_type': 'video/ulpfec' }})
    video_vc1: bytes = field(metadata={'request': { 'media_type': 'video/vc1' }})
    video_vc2: bytes = field(metadata={'request': { 'media_type': 'video/vc2' }})
    video_vnd_cctv: bytes = field(metadata={'request': { 'media_type': 'video/vnd.cctv' }})
    video_vnd_dece_hd: bytes = field(metadata={'request': { 'media_type': 'video/vnd.dece.hd' }})
    video_vnd_dece_mobile: bytes = field(metadata={'request': { 'media_type': 'video/vnd.dece.mobile' }})
    video_vnd_dece_mp4: bytes = field(metadata={'request': { 'media_type': 'video/vnd.dece.mp4' }})
    video_vnd_dece_pd: bytes = field(metadata={'request': { 'media_type': 'video/vnd.dece.pd' }})
    video_vnd_dece_sd: bytes = field(metadata={'request': { 'media_type': 'video/vnd.dece.sd' }})
    video_vnd_dece_video: bytes = field(metadata={'request': { 'media_type': 'video/vnd.dece.video' }})
    video_vnd_directv_mpeg: bytes = field(metadata={'request': { 'media_type': 'video/vnd.directv.mpeg' }})
    video_vnd_directv_mpeg_tts: bytes = field(metadata={'request': { 'media_type': 'video/vnd.directv.mpeg-tts' }})
    video_vnd_dlna_mpeg_tts: bytes = field(metadata={'request': { 'media_type': 'video/vnd.dlna.mpeg-tts' }})
    video_vnd_dvb_file: bytes = field(metadata={'request': { 'media_type': 'video/vnd.dvb.file' }})
    video_vnd_fvt: bytes = field(metadata={'request': { 'media_type': 'video/vnd.fvt' }})
    video_vnd_hns_video: bytes = field(metadata={'request': { 'media_type': 'video/vnd.hns.video' }})
    video_vnd_iptvforum1dparityfec1010: bytes = field(metadata={'request': { 'media_type': 'video/vnd.iptvforum.1dparityfec-1010' }})
    video_vnd_iptvforum1dparityfec2005: bytes = field(metadata={'request': { 'media_type': 'video/vnd.iptvforum.1dparityfec-2005' }})
    video_vnd_iptvforum2dparityfec1010: bytes = field(metadata={'request': { 'media_type': 'video/vnd.iptvforum.2dparityfec-1010' }})
    video_vnd_iptvforum2dparityfec2005: bytes = field(metadata={'request': { 'media_type': 'video/vnd.iptvforum.2dparityfec-2005' }})
    video_vnd_iptvforum_ttsavc: bytes = field(metadata={'request': { 'media_type': 'video/vnd.iptvforum.ttsavc' }})
    video_vnd_iptvforum_ttsmpeg2: bytes = field(metadata={'request': { 'media_type': 'video/vnd.iptvforum.ttsmpeg2' }})
    video_vnd_motorola_video: bytes = field(metadata={'request': { 'media_type': 'video/vnd.motorola.video' }})
    video_vnd_motorola_videop: bytes = field(metadata={'request': { 'media_type': 'video/vnd.motorola.videop' }})
    video_vnd_mpegurl: bytes = field(metadata={'request': { 'media_type': 'video/vnd.mpegurl' }})
    video_vnd_ms_playready_media_pyv: bytes = field(metadata={'request': { 'media_type': 'video/vnd.ms-playready.media.pyv' }})
    video_vnd_nokia_interleaved_multimedia: bytes = field(metadata={'request': { 'media_type': 'video/vnd.nokia.interleaved-multimedia' }})
    video_vnd_nokia_mp4vr: bytes = field(metadata={'request': { 'media_type': 'video/vnd.nokia.mp4vr' }})
    video_vnd_nokia_videovoip: bytes = field(metadata={'request': { 'media_type': 'video/vnd.nokia.videovoip' }})
    video_vnd_objectvideo: bytes = field(metadata={'request': { 'media_type': 'video/vnd.objectvideo' }})
    video_vnd_radgamettools_bink: bytes = field(metadata={'request': { 'media_type': 'video/vnd.radgamettools.bink' }})
    video_vnd_radgamettools_smacker: bytes = field(metadata={'request': { 'media_type': 'video/vnd.radgamettools.smacker' }})
    video_vnd_sealed_mpeg1: bytes = field(metadata={'request': { 'media_type': 'video/vnd.sealed.mpeg1' }})
    video_vnd_sealed_mpeg4: bytes = field(metadata={'request': { 'media_type': 'video/vnd.sealed.mpeg4' }})
    video_vnd_sealed_swf: bytes = field(metadata={'request': { 'media_type': 'video/vnd.sealed.swf' }})
    video_vnd_sealedmedia_softseal_mov: bytes = field(metadata={'request': { 'media_type': 'video/vnd.sealedmedia.softseal.mov' }})
    video_vnd_uvvu_mp4: bytes = field(metadata={'request': { 'media_type': 'video/vnd.uvvu.mp4' }})
    video_vnd_vivo: bytes = field(metadata={'request': { 'media_type': 'video/vnd.vivo' }})
    video_vnd_youtube_yt: bytes = field(metadata={'request': { 'media_type': 'video/vnd.youtube.yt' }})
    video_vp8: bytes = field(metadata={'request': { 'media_type': 'video/vp8' }})
    video_vp9: bytes = field(metadata={'request': { 'media_type': 'video/vp9' }})
    video_webm: bytes = field(metadata={'request': { 'media_type': 'video/webm' }})
    video_x_fli: bytes = field(metadata={'request': { 'media_type': 'video/x-fli' }})
    video_x_flv: bytes = field(metadata={'request': { 'media_type': 'video/x-flv' }})
    video_x_matroska: bytes = field(metadata={'request': { 'media_type': 'video/x-matroska' }})
    video_x_mng: bytes = field(metadata={'request': { 'media_type': 'video/x-mng' }})
    video_x_ms_asf: bytes = field(metadata={'request': { 'media_type': 'video/x-ms-asf' }})
    video_x_ms_vob: bytes = field(metadata={'request': { 'media_type': 'video/x-ms-vob' }})
    video_x_ms_wm: bytes = field(metadata={'request': { 'media_type': 'video/x-ms-wm' }})
    video_x_ms_wmv: bytes = field(metadata={'request': { 'media_type': 'video/x-ms-wmv' }})
    video_x_ms_wmx: bytes = field(metadata={'request': { 'media_type': 'video/x-ms-wmx' }})
    video_x_ms_wvx: bytes = field(metadata={'request': { 'media_type': 'video/x-ms-wvx' }})
    video_x_msvideo: bytes = field(metadata={'request': { 'media_type': 'video/x-msvideo' }})
    video_x_sgi_movie: bytes = field(metadata={'request': { 'media_type': 'video/x-sgi-movie' }})
    video_x_smv: bytes = field(metadata={'request': { 'media_type': 'video/x-smv' }})
    video_xf4v: bytes = field(metadata={'request': { 'media_type': 'video/x-f4v' }})
    video_xm4v: bytes = field(metadata={'request': { 'media_type': 'video/x-m4v' }})
    

@dataclass
class YoutubeVideosInsertSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class YoutubeVideosInsertSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class YoutubeVideosInsertSecurityOption3:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class YoutubeVideosInsertSecurityOption4:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class YoutubeVideosInsertSecurity:
    option1: Optional[YoutubeVideosInsertSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[YoutubeVideosInsertSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[YoutubeVideosInsertSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    option4: Optional[YoutubeVideosInsertSecurityOption4] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class YoutubeVideosInsertRequest:
    query_params: YoutubeVideosInsertQueryParams = field()
    security: YoutubeVideosInsertSecurity = field()
    request: Optional[YoutubeVideosInsertRequests] = field(default=None)
    

@dataclass
class YoutubeVideosInsertResponse:
    content_type: str = field()
    status_code: int = field()
    video: Optional[shared.Video] = field(default=None)
    
