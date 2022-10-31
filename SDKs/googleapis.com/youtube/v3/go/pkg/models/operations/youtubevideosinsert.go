package operations

import (
	"openapi/pkg/models/shared"
)

type YoutubeVideosInsertQueryParams struct {
	DollarXgafv                   *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken                   *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt                           *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	AutoLevels                    *bool             `queryParam:"style=form,explode=true,name=autoLevels"`
	Callback                      *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields                        *string           `queryParam:"style=form,explode=true,name=fields"`
	Key                           *string           `queryParam:"style=form,explode=true,name=key"`
	NotifySubscribers             *bool             `queryParam:"style=form,explode=true,name=notifySubscribers"`
	OauthToken                    *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	OnBehalfOfContentOwner        *string           `queryParam:"style=form,explode=true,name=onBehalfOfContentOwner"`
	OnBehalfOfContentOwnerChannel *string           `queryParam:"style=form,explode=true,name=onBehalfOfContentOwnerChannel"`
	Part                          []string          `queryParam:"style=form,explode=true,name=part"`
	PrettyPrint                   *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser                     *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	Stabilize                     *bool             `queryParam:"style=form,explode=true,name=stabilize"`
	UploadType                    *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol                *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type YoutubeVideosInsertRequests struct {
	ApplicationOctetStream             []byte `request:"mediaType=application/octet-stream"`
	Video1dInterleavedParityfec        []byte `request:"mediaType=video/1d-interleaved-parityfec"`
	Video3gpp                          []byte `request:"mediaType=video/3gpp"`
	Video3gpp2                         []byte `request:"mediaType=video/3gpp2"`
	Video3gppTt                        []byte `request:"mediaType=video/3gpp-tt"`
	VideoAv1                           []byte `request:"mediaType=video/av1"`
	VideoBmpeg                         []byte `request:"mediaType=video/bmpeg"`
	VideoBt656                         []byte `request:"mediaType=video/bt656"`
	VideoCelb                          []byte `request:"mediaType=video/celb"`
	VideoDv                            []byte `request:"mediaType=video/dv"`
	VideoEncaprtp                      []byte `request:"mediaType=video/encaprtp"`
	VideoFfv1                          []byte `request:"mediaType=video/ffv1"`
	VideoFlexfec                       []byte `request:"mediaType=video/flexfec"`
	VideoH261                          []byte `request:"mediaType=video/h261"`
	VideoH263                          []byte `request:"mediaType=video/h263"`
	VideoH2631998                      []byte `request:"mediaType=video/h263-1998"`
	VideoH2632000                      []byte `request:"mediaType=video/h263-2000"`
	VideoH264                          []byte `request:"mediaType=video/h264"`
	VideoH264Rcdo                      []byte `request:"mediaType=video/h264-rcdo"`
	VideoH264Svc                       []byte `request:"mediaType=video/h264-svc"`
	VideoH265                          []byte `request:"mediaType=video/h265"`
	VideoIsoSegment                    []byte `request:"mediaType=video/iso.segment"`
	VideoJpeg                          []byte `request:"mediaType=video/jpeg"`
	VideoJpeg2000                      []byte `request:"mediaType=video/jpeg2000"`
	VideoJpm                           []byte `request:"mediaType=video/jpm"`
	VideoJxsv                          []byte `request:"mediaType=video/jxsv"`
	VideoMj2                           []byte `request:"mediaType=video/mj2"`
	VideoMp1s                          []byte `request:"mediaType=video/mp1s"`
	VideoMp2p                          []byte `request:"mediaType=video/mp2p"`
	VideoMp2t                          []byte `request:"mediaType=video/mp2t"`
	VideoMp4                           []byte `request:"mediaType=video/mp4"`
	VideoMp4vEs                        []byte `request:"mediaType=video/mp4v-es"`
	VideoMpeg                          []byte `request:"mediaType=video/mpeg"`
	VideoMpeg4Generic                  []byte `request:"mediaType=video/mpeg4-generic"`
	VideoMpv                           []byte `request:"mediaType=video/mpv"`
	VideoNv                            []byte `request:"mediaType=video/nv"`
	VideoOgg                           []byte `request:"mediaType=video/ogg"`
	VideoParityfec                     []byte `request:"mediaType=video/parityfec"`
	VideoPointer                       []byte `request:"mediaType=video/pointer"`
	VideoQuicktime                     []byte `request:"mediaType=video/quicktime"`
	VideoRaptorfec                     []byte `request:"mediaType=video/raptorfec"`
	VideoRaw                           []byte `request:"mediaType=video/raw"`
	VideoRtpEncAescm128                []byte `request:"mediaType=video/rtp-enc-aescm128"`
	VideoRtploopback                   []byte `request:"mediaType=video/rtploopback"`
	VideoRtx                           []byte `request:"mediaType=video/rtx"`
	VideoScip                          []byte `request:"mediaType=video/scip"`
	VideoSmpte291                      []byte `request:"mediaType=video/smpte291"`
	VideoSmpte292m                     []byte `request:"mediaType=video/smpte292m"`
	VideoUlpfec                        []byte `request:"mediaType=video/ulpfec"`
	VideoVc1                           []byte `request:"mediaType=video/vc1"`
	VideoVc2                           []byte `request:"mediaType=video/vc2"`
	VideoVndCctv                       []byte `request:"mediaType=video/vnd.cctv"`
	VideoVndDeceHd                     []byte `request:"mediaType=video/vnd.dece.hd"`
	VideoVndDeceMobile                 []byte `request:"mediaType=video/vnd.dece.mobile"`
	VideoVndDeceMp4                    []byte `request:"mediaType=video/vnd.dece.mp4"`
	VideoVndDecePd                     []byte `request:"mediaType=video/vnd.dece.pd"`
	VideoVndDeceSd                     []byte `request:"mediaType=video/vnd.dece.sd"`
	VideoVndDeceVideo                  []byte `request:"mediaType=video/vnd.dece.video"`
	VideoVndDirectvMpeg                []byte `request:"mediaType=video/vnd.directv.mpeg"`
	VideoVndDirectvMpegTts             []byte `request:"mediaType=video/vnd.directv.mpeg-tts"`
	VideoVndDlnaMpegTts                []byte `request:"mediaType=video/vnd.dlna.mpeg-tts"`
	VideoVndDvbFile                    []byte `request:"mediaType=video/vnd.dvb.file"`
	VideoVndFvt                        []byte `request:"mediaType=video/vnd.fvt"`
	VideoVndHnsVideo                   []byte `request:"mediaType=video/vnd.hns.video"`
	VideoVndIptvforum1dparityfec1010   []byte `request:"mediaType=video/vnd.iptvforum.1dparityfec-1010"`
	VideoVndIptvforum1dparityfec2005   []byte `request:"mediaType=video/vnd.iptvforum.1dparityfec-2005"`
	VideoVndIptvforum2dparityfec1010   []byte `request:"mediaType=video/vnd.iptvforum.2dparityfec-1010"`
	VideoVndIptvforum2dparityfec2005   []byte `request:"mediaType=video/vnd.iptvforum.2dparityfec-2005"`
	VideoVndIptvforumTtsavc            []byte `request:"mediaType=video/vnd.iptvforum.ttsavc"`
	VideoVndIptvforumTtsmpeg2          []byte `request:"mediaType=video/vnd.iptvforum.ttsmpeg2"`
	VideoVndMotorolaVideo              []byte `request:"mediaType=video/vnd.motorola.video"`
	VideoVndMotorolaVideop             []byte `request:"mediaType=video/vnd.motorola.videop"`
	VideoVndMpegurl                    []byte `request:"mediaType=video/vnd.mpegurl"`
	VideoVndMsPlayreadyMediaPyv        []byte `request:"mediaType=video/vnd.ms-playready.media.pyv"`
	VideoVndNokiaInterleavedMultimedia []byte `request:"mediaType=video/vnd.nokia.interleaved-multimedia"`
	VideoVndNokiaMp4vr                 []byte `request:"mediaType=video/vnd.nokia.mp4vr"`
	VideoVndNokiaVideovoip             []byte `request:"mediaType=video/vnd.nokia.videovoip"`
	VideoVndObjectvideo                []byte `request:"mediaType=video/vnd.objectvideo"`
	VideoVndRadgamettoolsBink          []byte `request:"mediaType=video/vnd.radgamettools.bink"`
	VideoVndRadgamettoolsSmacker       []byte `request:"mediaType=video/vnd.radgamettools.smacker"`
	VideoVndSealedMpeg1                []byte `request:"mediaType=video/vnd.sealed.mpeg1"`
	VideoVndSealedMpeg4                []byte `request:"mediaType=video/vnd.sealed.mpeg4"`
	VideoVndSealedSwf                  []byte `request:"mediaType=video/vnd.sealed.swf"`
	VideoVndSealedmediaSoftsealMov     []byte `request:"mediaType=video/vnd.sealedmedia.softseal.mov"`
	VideoVndUvvuMp4                    []byte `request:"mediaType=video/vnd.uvvu.mp4"`
	VideoVndVivo                       []byte `request:"mediaType=video/vnd.vivo"`
	VideoVndYoutubeYt                  []byte `request:"mediaType=video/vnd.youtube.yt"`
	VideoVp8                           []byte `request:"mediaType=video/vp8"`
	VideoVp9                           []byte `request:"mediaType=video/vp9"`
	VideoWebm                          []byte `request:"mediaType=video/webm"`
	VideoXFli                          []byte `request:"mediaType=video/x-fli"`
	VideoXFlv                          []byte `request:"mediaType=video/x-flv"`
	VideoXMatroska                     []byte `request:"mediaType=video/x-matroska"`
	VideoXMng                          []byte `request:"mediaType=video/x-mng"`
	VideoXMsAsf                        []byte `request:"mediaType=video/x-ms-asf"`
	VideoXMsVob                        []byte `request:"mediaType=video/x-ms-vob"`
	VideoXMsWm                         []byte `request:"mediaType=video/x-ms-wm"`
	VideoXMsWmv                        []byte `request:"mediaType=video/x-ms-wmv"`
	VideoXMsWmx                        []byte `request:"mediaType=video/x-ms-wmx"`
	VideoXMsWvx                        []byte `request:"mediaType=video/x-ms-wvx"`
	VideoXMsvideo                      []byte `request:"mediaType=video/x-msvideo"`
	VideoXSgiMovie                     []byte `request:"mediaType=video/x-sgi-movie"`
	VideoXSmv                          []byte `request:"mediaType=video/x-smv"`
	VideoXf4v                          []byte `request:"mediaType=video/x-f4v"`
	VideoXm4v                          []byte `request:"mediaType=video/x-m4v"`
}

type YoutubeVideosInsertSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type YoutubeVideosInsertSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type YoutubeVideosInsertSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type YoutubeVideosInsertSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type YoutubeVideosInsertSecurity struct {
	Option1 *YoutubeVideosInsertSecurityOption1 `security:"option"`
	Option2 *YoutubeVideosInsertSecurityOption2 `security:"option"`
	Option3 *YoutubeVideosInsertSecurityOption3 `security:"option"`
	Option4 *YoutubeVideosInsertSecurityOption4 `security:"option"`
}

type YoutubeVideosInsertRequest struct {
	QueryParams YoutubeVideosInsertQueryParams
	Request     *YoutubeVideosInsertRequests
	Security    YoutubeVideosInsertSecurity
}

type YoutubeVideosInsertResponse struct {
	ContentType string
	StatusCode  int64
	Video       *shared.Video
}
