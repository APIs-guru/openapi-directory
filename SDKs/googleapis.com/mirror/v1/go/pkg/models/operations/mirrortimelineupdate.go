package operations

import (
"openapi/pkg/models/shared")

type MirrorTimelineUpdatePathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type MirrorTimelineUpdateQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type MirrorTimelineUpdateRequests struct {
    Audio1dInterleavedParityfec []byte `request:"mediaType=audio/1d-interleaved-parityfec"`
    Audio32kadpcm []byte `request:"mediaType=audio/32kadpcm"`
    Audio3gpp []byte `request:"mediaType=audio/3gpp"`
    Audio3gpp2 []byte `request:"mediaType=audio/3gpp2"`
    AudioAac []byte `request:"mediaType=audio/aac"`
    AudioAc3 []byte `request:"mediaType=audio/ac3"`
    AudioAdpcm []byte `request:"mediaType=audio/adpcm"`
    AudioAmr []byte `request:"mediaType=audio/amr"`
    AudioAmrWb []byte `request:"mediaType=audio/amr-wb"`
    AudioAmrWbPlus []byte `request:"mediaType=audio/amr-wb+"`
    AudioAptx []byte `request:"mediaType=audio/aptx"`
    AudioAsc []byte `request:"mediaType=audio/asc"`
    AudioAtrac3 []byte `request:"mediaType=audio/atrac3"`
    AudioAtracAdvancedLossless []byte `request:"mediaType=audio/atrac-advanced-lossless"`
    AudioAtracX []byte `request:"mediaType=audio/atrac-x"`
    AudioBasic []byte `request:"mediaType=audio/basic"`
    AudioBv16 []byte `request:"mediaType=audio/bv16"`
    AudioBv32 []byte `request:"mediaType=audio/bv32"`
    AudioClearmode []byte `request:"mediaType=audio/clearmode"`
    AudioCn []byte `request:"mediaType=audio/cn"`
    AudioDat12 []byte `request:"mediaType=audio/dat12"`
    AudioDls []byte `request:"mediaType=audio/dls"`
    AudioDsrEs201108 []byte `request:"mediaType=audio/dsr-es201108"`
    AudioDsrEs202050 []byte `request:"mediaType=audio/dsr-es202050"`
    AudioDsrEs202211 []byte `request:"mediaType=audio/dsr-es202211"`
    AudioDsrEs202212 []byte `request:"mediaType=audio/dsr-es202212"`
    AudioDv []byte `request:"mediaType=audio/dv"`
    AudioDvi4 []byte `request:"mediaType=audio/dvi4"`
    AudioEac3 []byte `request:"mediaType=audio/eac3"`
    AudioEncaprtp []byte `request:"mediaType=audio/encaprtp"`
    AudioEvrc []byte `request:"mediaType=audio/evrc"`
    AudioEvrc0 []byte `request:"mediaType=audio/evrc0"`
    AudioEvrc1 []byte `request:"mediaType=audio/evrc1"`
    AudioEvrcQcp []byte `request:"mediaType=audio/evrc-qcp"`
    AudioEvrcb []byte `request:"mediaType=audio/evrcb"`
    AudioEvrcb0 []byte `request:"mediaType=audio/evrcb0"`
    AudioEvrcb1 []byte `request:"mediaType=audio/evrcb1"`
    AudioEvrcnw []byte `request:"mediaType=audio/evrcnw"`
    AudioEvrcnw0 []byte `request:"mediaType=audio/evrcnw0"`
    AudioEvrcnw1 []byte `request:"mediaType=audio/evrcnw1"`
    AudioEvrcwb []byte `request:"mediaType=audio/evrcwb"`
    AudioEvrcwb0 []byte `request:"mediaType=audio/evrcwb0"`
    AudioEvrcwb1 []byte `request:"mediaType=audio/evrcwb1"`
    AudioEvs []byte `request:"mediaType=audio/evs"`
    AudioFwdred []byte `request:"mediaType=audio/fwdred"`
    AudioG7110 []byte `request:"mediaType=audio/g711-0"`
    AudioG719 []byte `request:"mediaType=audio/g719"`
    AudioG722 []byte `request:"mediaType=audio/g722"`
    AudioG7221 []byte `request:"mediaType=audio/g7221"`
    AudioG723 []byte `request:"mediaType=audio/g723"`
    AudioG72616 []byte `request:"mediaType=audio/g726-16"`
    AudioG72624 []byte `request:"mediaType=audio/g726-24"`
    AudioG72632 []byte `request:"mediaType=audio/g726-32"`
    AudioG72640 []byte `request:"mediaType=audio/g726-40"`
    AudioG728 []byte `request:"mediaType=audio/g728"`
    AudioG729 []byte `request:"mediaType=audio/g729"`
    AudioG7291 []byte `request:"mediaType=audio/g7291"`
    AudioG729d []byte `request:"mediaType=audio/g729d"`
    AudioG729e []byte `request:"mediaType=audio/g729e"`
    AudioGsm []byte `request:"mediaType=audio/gsm"`
    AudioGsmEfr []byte `request:"mediaType=audio/gsm-efr"`
    AudioGsmHr08 []byte `request:"mediaType=audio/gsm-hr-08"`
    AudioIPMrV25 []byte `request:"mediaType=audio/ip-mr_v2.5"`
    AudioIlbc []byte `request:"mediaType=audio/ilbc"`
    AudioIsac []byte `request:"mediaType=audio/isac"`
    AudioL16 []byte `request:"mediaType=audio/l16"`
    AudioL20 []byte `request:"mediaType=audio/l20"`
    AudioL24 []byte `request:"mediaType=audio/l24"`
    AudioL8 []byte `request:"mediaType=audio/l8"`
    AudioLpc []byte `request:"mediaType=audio/lpc"`
    AudioMelp []byte `request:"mediaType=audio/melp"`
    AudioMelp1200 []byte `request:"mediaType=audio/melp1200"`
    AudioMelp2400 []byte `request:"mediaType=audio/melp2400"`
    AudioMelp600 []byte `request:"mediaType=audio/melp600"`
    AudioMidi []byte `request:"mediaType=audio/midi"`
    AudioMobileXmf []byte `request:"mediaType=audio/mobile-xmf"`
    AudioMp3 []byte `request:"mediaType=audio/mp3"`
    AudioMp4 []byte `request:"mediaType=audio/mp4"`
    AudioMp4aLatm []byte `request:"mediaType=audio/mp4a-latm"`
    AudioMpa []byte `request:"mediaType=audio/mpa"`
    AudioMpaRobust []byte `request:"mediaType=audio/mpa-robust"`
    AudioMpeg []byte `request:"mediaType=audio/mpeg"`
    AudioMpeg4Generic []byte `request:"mediaType=audio/mpeg4-generic"`
    AudioMusepack []byte `request:"mediaType=audio/musepack"`
    AudioOgg []byte `request:"mediaType=audio/ogg"`
    AudioOpus []byte `request:"mediaType=audio/opus"`
    AudioParityfec []byte `request:"mediaType=audio/parityfec"`
    AudioPcma []byte `request:"mediaType=audio/pcma"`
    AudioPcmaWb []byte `request:"mediaType=audio/pcma-wb"`
    AudioPcmu []byte `request:"mediaType=audio/pcmu"`
    AudioPcmuWb []byte `request:"mediaType=audio/pcmu-wb"`
    AudioPrsSid []byte `request:"mediaType=audio/prs.sid"`
    AudioQcelp []byte `request:"mediaType=audio/qcelp"`
    AudioRaptorfec []byte `request:"mediaType=audio/raptorfec"`
    AudioRed []byte `request:"mediaType=audio/red"`
    AudioRtpEncAescm128 []byte `request:"mediaType=audio/rtp-enc-aescm128"`
    AudioRtpMidi []byte `request:"mediaType=audio/rtp-midi"`
    AudioRtploopback []byte `request:"mediaType=audio/rtploopback"`
    AudioRtx []byte `request:"mediaType=audio/rtx"`
    AudioS3m []byte `request:"mediaType=audio/s3m"`
    AudioSilk []byte `request:"mediaType=audio/silk"`
    AudioSmv []byte `request:"mediaType=audio/smv"`
    AudioSmv0 []byte `request:"mediaType=audio/smv0"`
    AudioSmvQcp []byte `request:"mediaType=audio/smv-qcp"`
    AudioSpMidi []byte `request:"mediaType=audio/sp-midi"`
    AudioSpeex []byte `request:"mediaType=audio/speex"`
    AudioT140c []byte `request:"mediaType=audio/t140c"`
    AudioT38 []byte `request:"mediaType=audio/t38"`
    AudioTelephoneEvent []byte `request:"mediaType=audio/telephone-event"`
    AudioTetraAcelp []byte `request:"mediaType=audio/tetra_acelp"`
    AudioTone []byte `request:"mediaType=audio/tone"`
    AudioUemclip []byte `request:"mediaType=audio/uemclip"`
    AudioUlpfec []byte `request:"mediaType=audio/ulpfec"`
    AudioUsac []byte `request:"mediaType=audio/usac"`
    AudioVdvi []byte `request:"mediaType=audio/vdvi"`
    AudioVmrWb []byte `request:"mediaType=audio/vmr-wb"`
    AudioVnd3gppIufp []byte `request:"mediaType=audio/vnd.3gpp.iufp"`
    AudioVnd4sb []byte `request:"mediaType=audio/vnd.4sb"`
    AudioVndAudiokoz []byte `request:"mediaType=audio/vnd.audiokoz"`
    AudioVndCelp []byte `request:"mediaType=audio/vnd.celp"`
    AudioVndCiscoNse []byte `request:"mediaType=audio/vnd.cisco.nse"`
    AudioVndCmlesRadioEvents []byte `request:"mediaType=audio/vnd.cmles.radio-events"`
    AudioVndCnsAnp1 []byte `request:"mediaType=audio/vnd.cns.anp1"`
    AudioVndCnsInf1 []byte `request:"mediaType=audio/vnd.cns.inf1"`
    AudioVndDeceAudio []byte `request:"mediaType=audio/vnd.dece.audio"`
    AudioVndDigitalWinds []byte `request:"mediaType=audio/vnd.digital-winds"`
    AudioVndDlnaAdts []byte `request:"mediaType=audio/vnd.dlna.adts"`
    AudioVndDolbyHeaac1 []byte `request:"mediaType=audio/vnd.dolby.heaac.1"`
    AudioVndDolbyHeaac2 []byte `request:"mediaType=audio/vnd.dolby.heaac.2"`
    AudioVndDolbyMlp []byte `request:"mediaType=audio/vnd.dolby.mlp"`
    AudioVndDolbyMps []byte `request:"mediaType=audio/vnd.dolby.mps"`
    AudioVndDolbyPl2 []byte `request:"mediaType=audio/vnd.dolby.pl2"`
    AudioVndDolbyPl2x []byte `request:"mediaType=audio/vnd.dolby.pl2x"`
    AudioVndDolbyPl2z []byte `request:"mediaType=audio/vnd.dolby.pl2z"`
    AudioVndDolbyPulse1 []byte `request:"mediaType=audio/vnd.dolby.pulse.1"`
    AudioVndDra []byte `request:"mediaType=audio/vnd.dra"`
    AudioVndDts []byte `request:"mediaType=audio/vnd.dts"`
    AudioVndDtsHd []byte `request:"mediaType=audio/vnd.dts.hd"`
    AudioVndDtsUhd []byte `request:"mediaType=audio/vnd.dts.uhd"`
    AudioVndDvbFile []byte `request:"mediaType=audio/vnd.dvb.file"`
    AudioVndEveradPlj []byte `request:"mediaType=audio/vnd.everad.plj"`
    AudioVndHnsAudio []byte `request:"mediaType=audio/vnd.hns.audio"`
    AudioVndLucentVoice []byte `request:"mediaType=audio/vnd.lucent.voice"`
    AudioVndMsPlayreadyMediaPya []byte `request:"mediaType=audio/vnd.ms-playready.media.pya"`
    AudioVndNokiaMobileXmf []byte `request:"mediaType=audio/vnd.nokia.mobile-xmf"`
    AudioVndNortelVbk []byte `request:"mediaType=audio/vnd.nortel.vbk"`
    AudioVndNueraEcelp4800 []byte `request:"mediaType=audio/vnd.nuera.ecelp4800"`
    AudioVndNueraEcelp7470 []byte `request:"mediaType=audio/vnd.nuera.ecelp7470"`
    AudioVndNueraEcelp9600 []byte `request:"mediaType=audio/vnd.nuera.ecelp9600"`
    AudioVndOctelSbc []byte `request:"mediaType=audio/vnd.octel.sbc"`
    AudioVndPresonusMultitrack []byte `request:"mediaType=audio/vnd.presonus.multitrack"`
    AudioVndQcelp []byte `request:"mediaType=audio/vnd.qcelp"`
    AudioVndRhetorex32kadpcm []byte `request:"mediaType=audio/vnd.rhetorex.32kadpcm"`
    AudioVndRip []byte `request:"mediaType=audio/vnd.rip"`
    AudioVndRnRealaudio []byte `request:"mediaType=audio/vnd.rn-realaudio"`
    AudioVndSealedmediaSoftsealMpeg []byte `request:"mediaType=audio/vnd.sealedmedia.softseal.mpeg"`
    AudioVndVmxCvsd []byte `request:"mediaType=audio/vnd.vmx.cvsd"`
    AudioVndWave []byte `request:"mediaType=audio/vnd.wave"`
    AudioVorbis []byte `request:"mediaType=audio/vorbis"`
    AudioVorbisConfig []byte `request:"mediaType=audio/vorbis-config"`
    AudioWav []byte `request:"mediaType=audio/wav"`
    AudioWave []byte `request:"mediaType=audio/wave"`
    AudioWebm []byte `request:"mediaType=audio/webm"`
    AudioXAac []byte `request:"mediaType=audio/x-aac"`
    AudioXAiff []byte `request:"mediaType=audio/x-aiff"`
    AudioXCaf []byte `request:"mediaType=audio/x-caf"`
    AudioXFlac []byte `request:"mediaType=audio/x-flac"`
    AudioXMatroska []byte `request:"mediaType=audio/x-matroska"`
    AudioXMpegurl []byte `request:"mediaType=audio/x-mpegurl"`
    AudioXMsWax []byte `request:"mediaType=audio/x-ms-wax"`
    AudioXMsWma []byte `request:"mediaType=audio/x-ms-wma"`
    AudioXPnRealaudio []byte `request:"mediaType=audio/x-pn-realaudio"`
    AudioXPnRealaudioPlugin []byte `request:"mediaType=audio/x-pn-realaudio-plugin"`
    AudioXRealaudio []byte `request:"mediaType=audio/x-realaudio"`
    AudioXTta []byte `request:"mediaType=audio/x-tta"`
    AudioXWav []byte `request:"mediaType=audio/x-wav"`
    AudioXm []byte `request:"mediaType=audio/xm"`
    AudioXm4a []byte `request:"mediaType=audio/x-m4a"`
    ImageAces []byte `request:"mediaType=image/aces"`
    ImageApng []byte `request:"mediaType=image/apng"`
    ImageAvci []byte `request:"mediaType=image/avci"`
    ImageAvcs []byte `request:"mediaType=image/avcs"`
    ImageBmp []byte `request:"mediaType=image/bmp"`
    ImageCgm []byte `request:"mediaType=image/cgm"`
    ImageDicomRle []byte `request:"mediaType=image/dicom-rle"`
    ImageEmf []byte `request:"mediaType=image/emf"`
    ImageFits []byte `request:"mediaType=image/fits"`
    ImageG3fax []byte `request:"mediaType=image/g3fax"`
    ImageGif []byte `request:"mediaType=image/gif"`
    ImageHeic []byte `request:"mediaType=image/heic"`
    ImageHeicSequence []byte `request:"mediaType=image/heic-sequence"`
    ImageHeif []byte `request:"mediaType=image/heif"`
    ImageHeifSequence []byte `request:"mediaType=image/heif-sequence"`
    ImageIef []byte `request:"mediaType=image/ief"`
    ImageJls []byte `request:"mediaType=image/jls"`
    ImageJp2 []byte `request:"mediaType=image/jp2"`
    ImageJpeg []byte `request:"mediaType=image/jpeg"`
    ImageJpm []byte `request:"mediaType=image/jpm"`
    ImageJpx []byte `request:"mediaType=image/jpx"`
    ImageKtx []byte `request:"mediaType=image/ktx"`
    ImageNaplps []byte `request:"mediaType=image/naplps"`
    ImagePjpeg []byte `request:"mediaType=image/pjpeg"`
    ImagePng []byte `request:"mediaType=image/png"`
    ImagePrsBtif []byte `request:"mediaType=image/prs.btif"`
    ImagePrsPti []byte `request:"mediaType=image/prs.pti"`
    ImagePwgRaster []byte `request:"mediaType=image/pwg-raster"`
    ImageSgi []byte `request:"mediaType=image/sgi"`
    ImageSvgPlusXML []byte `request:"mediaType=image/svg+xml"`
    ImageT38 []byte `request:"mediaType=image/t38"`
    ImageTiff []byte `request:"mediaType=image/tiff"`
    ImageTiffFx []byte `request:"mediaType=image/tiff-fx"`
    ImageVndAdobePhotoshop []byte `request:"mediaType=image/vnd.adobe.photoshop"`
    ImageVndAirzipAcceleratorAzv []byte `request:"mediaType=image/vnd.airzip.accelerator.azv"`
    ImageVndCnsInf2 []byte `request:"mediaType=image/vnd.cns.inf2"`
    ImageVndDeceGraphic []byte `request:"mediaType=image/vnd.dece.graphic"`
    ImageVndDjvu []byte `request:"mediaType=image/vnd.djvu"`
    ImageVndDvbSubtitle []byte `request:"mediaType=image/vnd.dvb.subtitle"`
    ImageVndDwg []byte `request:"mediaType=image/vnd.dwg"`
    ImageVndDxf []byte `request:"mediaType=image/vnd.dxf"`
    ImageVndFastbidsheet []byte `request:"mediaType=image/vnd.fastbidsheet"`
    ImageVndFpx []byte `request:"mediaType=image/vnd.fpx"`
    ImageVndFst []byte `request:"mediaType=image/vnd.fst"`
    ImageVndFujixeroxEdmicsMmr []byte `request:"mediaType=image/vnd.fujixerox.edmics-mmr"`
    ImageVndFujixeroxEdmicsRlc []byte `request:"mediaType=image/vnd.fujixerox.edmics-rlc"`
    ImageVndGlobalgraphicsPgb []byte `request:"mediaType=image/vnd.globalgraphics.pgb"`
    ImageVndMicrosoftIcon []byte `request:"mediaType=image/vnd.microsoft.icon"`
    ImageVndMix []byte `request:"mediaType=image/vnd.mix"`
    ImageVndMozillaApng []byte `request:"mediaType=image/vnd.mozilla.apng"`
    ImageVndMsModi []byte `request:"mediaType=image/vnd.ms-modi"`
    ImageVndMsPhoto []byte `request:"mediaType=image/vnd.ms-photo"`
    ImageVndNetFpx []byte `request:"mediaType=image/vnd.net-fpx"`
    ImageVndRadiance []byte `request:"mediaType=image/vnd.radiance"`
    ImageVndSealedPng []byte `request:"mediaType=image/vnd.sealed.png"`
    ImageVndSealedmediaSoftsealGif []byte `request:"mediaType=image/vnd.sealedmedia.softseal.gif"`
    ImageVndSealedmediaSoftsealJpg []byte `request:"mediaType=image/vnd.sealedmedia.softseal.jpg"`
    ImageVndSvf []byte `request:"mediaType=image/vnd.svf"`
    ImageVndTencentTap []byte `request:"mediaType=image/vnd.tencent.tap"`
    ImageVndValveSourceTexture []byte `request:"mediaType=image/vnd.valve.source.texture"`
    ImageVndWapWbmp []byte `request:"mediaType=image/vnd.wap.wbmp"`
    ImageVndXiff []byte `request:"mediaType=image/vnd.xiff"`
    ImageVndZbrushPcx []byte `request:"mediaType=image/vnd.zbrush.pcx"`
    ImageWebp []byte `request:"mediaType=image/webp"`
    ImageWmf []byte `request:"mediaType=image/wmf"`
    ImageX3ds []byte `request:"mediaType=image/x-3ds"`
    ImageXCmuRaster []byte `request:"mediaType=image/x-cmu-raster"`
    ImageXCmx []byte `request:"mediaType=image/x-cmx"`
    ImageXFreehand []byte `request:"mediaType=image/x-freehand"`
    ImageXIcon []byte `request:"mediaType=image/x-icon"`
    ImageXJng []byte `request:"mediaType=image/x-jng"`
    ImageXMrsidImage []byte `request:"mediaType=image/x-mrsid-image"`
    ImageXMsBmp []byte `request:"mediaType=image/x-ms-bmp"`
    ImageXPcx []byte `request:"mediaType=image/x-pcx"`
    ImageXPict []byte `request:"mediaType=image/x-pict"`
    ImageXPortableAnymap []byte `request:"mediaType=image/x-portable-anymap"`
    ImageXPortableBitmap []byte `request:"mediaType=image/x-portable-bitmap"`
    ImageXPortableGraymap []byte `request:"mediaType=image/x-portable-graymap"`
    ImageXPortablePixmap []byte `request:"mediaType=image/x-portable-pixmap"`
    ImageXRgb []byte `request:"mediaType=image/x-rgb"`
    ImageXTga []byte `request:"mediaType=image/x-tga"`
    ImageXXbitmap []byte `request:"mediaType=image/x-xbitmap"`
    ImageXXcf []byte `request:"mediaType=image/x-xcf"`
    ImageXXpixmap []byte `request:"mediaType=image/x-xpixmap"`
    ImageXXwindowdump []byte `request:"mediaType=image/x-xwindowdump"`
    Video1dInterleavedParityfec []byte `request:"mediaType=video/1d-interleaved-parityfec"`
    Video3gpp []byte `request:"mediaType=video/3gpp"`
    Video3gpp2 []byte `request:"mediaType=video/3gpp2"`
    Video3gppTt []byte `request:"mediaType=video/3gpp-tt"`
    VideoBmpeg []byte `request:"mediaType=video/bmpeg"`
    VideoBt656 []byte `request:"mediaType=video/bt656"`
    VideoCelb []byte `request:"mediaType=video/celb"`
    VideoDv []byte `request:"mediaType=video/dv"`
    VideoEncaprtp []byte `request:"mediaType=video/encaprtp"`
    VideoH261 []byte `request:"mediaType=video/h261"`
    VideoH263 []byte `request:"mediaType=video/h263"`
    VideoH2631998 []byte `request:"mediaType=video/h263-1998"`
    VideoH2632000 []byte `request:"mediaType=video/h263-2000"`
    VideoH264 []byte `request:"mediaType=video/h264"`
    VideoH264Rcdo []byte `request:"mediaType=video/h264-rcdo"`
    VideoH264Svc []byte `request:"mediaType=video/h264-svc"`
    VideoH265 []byte `request:"mediaType=video/h265"`
    VideoIsoSegment []byte `request:"mediaType=video/iso.segment"`
    VideoJpeg []byte `request:"mediaType=video/jpeg"`
    VideoJpeg2000 []byte `request:"mediaType=video/jpeg2000"`
    VideoJpm []byte `request:"mediaType=video/jpm"`
    VideoMj2 []byte `request:"mediaType=video/mj2"`
    VideoMp1s []byte `request:"mediaType=video/mp1s"`
    VideoMp2p []byte `request:"mediaType=video/mp2p"`
    VideoMp2t []byte `request:"mediaType=video/mp2t"`
    VideoMp4 []byte `request:"mediaType=video/mp4"`
    VideoMp4vEs []byte `request:"mediaType=video/mp4v-es"`
    VideoMpeg []byte `request:"mediaType=video/mpeg"`
    VideoMpeg4Generic []byte `request:"mediaType=video/mpeg4-generic"`
    VideoMpv []byte `request:"mediaType=video/mpv"`
    VideoNv []byte `request:"mediaType=video/nv"`
    VideoOgg []byte `request:"mediaType=video/ogg"`
    VideoParityfec []byte `request:"mediaType=video/parityfec"`
    VideoPointer []byte `request:"mediaType=video/pointer"`
    VideoQuicktime []byte `request:"mediaType=video/quicktime"`
    VideoRaptorfec []byte `request:"mediaType=video/raptorfec"`
    VideoRaw []byte `request:"mediaType=video/raw"`
    VideoRtpEncAescm128 []byte `request:"mediaType=video/rtp-enc-aescm128"`
    VideoRtploopback []byte `request:"mediaType=video/rtploopback"`
    VideoRtx []byte `request:"mediaType=video/rtx"`
    VideoSmpte291 []byte `request:"mediaType=video/smpte291"`
    VideoSmpte292m []byte `request:"mediaType=video/smpte292m"`
    VideoUlpfec []byte `request:"mediaType=video/ulpfec"`
    VideoVc1 []byte `request:"mediaType=video/vc1"`
    VideoVc2 []byte `request:"mediaType=video/vc2"`
    VideoVndCctv []byte `request:"mediaType=video/vnd.cctv"`
    VideoVndDeceHd []byte `request:"mediaType=video/vnd.dece.hd"`
    VideoVndDeceMobile []byte `request:"mediaType=video/vnd.dece.mobile"`
    VideoVndDeceMp4 []byte `request:"mediaType=video/vnd.dece.mp4"`
    VideoVndDecePd []byte `request:"mediaType=video/vnd.dece.pd"`
    VideoVndDeceSd []byte `request:"mediaType=video/vnd.dece.sd"`
    VideoVndDeceVideo []byte `request:"mediaType=video/vnd.dece.video"`
    VideoVndDirectvMpeg []byte `request:"mediaType=video/vnd.directv.mpeg"`
    VideoVndDirectvMpegTts []byte `request:"mediaType=video/vnd.directv.mpeg-tts"`
    VideoVndDlnaMpegTts []byte `request:"mediaType=video/vnd.dlna.mpeg-tts"`
    VideoVndDvbFile []byte `request:"mediaType=video/vnd.dvb.file"`
    VideoVndFvt []byte `request:"mediaType=video/vnd.fvt"`
    VideoVndHnsVideo []byte `request:"mediaType=video/vnd.hns.video"`
    VideoVndIptvforum1dparityfec1010 []byte `request:"mediaType=video/vnd.iptvforum.1dparityfec-1010"`
    VideoVndIptvforum1dparityfec2005 []byte `request:"mediaType=video/vnd.iptvforum.1dparityfec-2005"`
    VideoVndIptvforum2dparityfec1010 []byte `request:"mediaType=video/vnd.iptvforum.2dparityfec-1010"`
    VideoVndIptvforum2dparityfec2005 []byte `request:"mediaType=video/vnd.iptvforum.2dparityfec-2005"`
    VideoVndIptvforumTtsavc []byte `request:"mediaType=video/vnd.iptvforum.ttsavc"`
    VideoVndIptvforumTtsmpeg2 []byte `request:"mediaType=video/vnd.iptvforum.ttsmpeg2"`
    VideoVndMotorolaVideo []byte `request:"mediaType=video/vnd.motorola.video"`
    VideoVndMotorolaVideop []byte `request:"mediaType=video/vnd.motorola.videop"`
    VideoVndMpegurl []byte `request:"mediaType=video/vnd.mpegurl"`
    VideoVndMsPlayreadyMediaPyv []byte `request:"mediaType=video/vnd.ms-playready.media.pyv"`
    VideoVndNokiaInterleavedMultimedia []byte `request:"mediaType=video/vnd.nokia.interleaved-multimedia"`
    VideoVndNokiaMp4vr []byte `request:"mediaType=video/vnd.nokia.mp4vr"`
    VideoVndNokiaVideovoip []byte `request:"mediaType=video/vnd.nokia.videovoip"`
    VideoVndObjectvideo []byte `request:"mediaType=video/vnd.objectvideo"`
    VideoVndRadgamettoolsBink []byte `request:"mediaType=video/vnd.radgamettools.bink"`
    VideoVndRadgamettoolsSmacker []byte `request:"mediaType=video/vnd.radgamettools.smacker"`
    VideoVndSealedMpeg1 []byte `request:"mediaType=video/vnd.sealed.mpeg1"`
    VideoVndSealedMpeg4 []byte `request:"mediaType=video/vnd.sealed.mpeg4"`
    VideoVndSealedSwf []byte `request:"mediaType=video/vnd.sealed.swf"`
    VideoVndSealedmediaSoftsealMov []byte `request:"mediaType=video/vnd.sealedmedia.softseal.mov"`
    VideoVndUvvuMp4 []byte `request:"mediaType=video/vnd.uvvu.mp4"`
    VideoVndVivo []byte `request:"mediaType=video/vnd.vivo"`
    VideoVp8 []byte `request:"mediaType=video/vp8"`
    VideoWebm []byte `request:"mediaType=video/webm"`
    VideoXFli []byte `request:"mediaType=video/x-fli"`
    VideoXFlv []byte `request:"mediaType=video/x-flv"`
    VideoXMatroska []byte `request:"mediaType=video/x-matroska"`
    VideoXMng []byte `request:"mediaType=video/x-mng"`
    VideoXMsAsf []byte `request:"mediaType=video/x-ms-asf"`
    VideoXMsVob []byte `request:"mediaType=video/x-ms-vob"`
    VideoXMsWm []byte `request:"mediaType=video/x-ms-wm"`
    VideoXMsWmv []byte `request:"mediaType=video/x-ms-wmv"`
    VideoXMsWmx []byte `request:"mediaType=video/x-ms-wmx"`
    VideoXMsWvx []byte `request:"mediaType=video/x-ms-wvx"`
    VideoXMsvideo []byte `request:"mediaType=video/x-msvideo"`
    VideoXSgiMovie []byte `request:"mediaType=video/x-sgi-movie"`
    VideoXSmv []byte `request:"mediaType=video/x-smv"`
    VideoXf4v []byte `request:"mediaType=video/x-f4v"`
    VideoXm4v []byte `request:"mediaType=video/x-m4v"`
    
}

type MirrorTimelineUpdateSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type MirrorTimelineUpdateSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type MirrorTimelineUpdateSecurity struct {
    Option1 *MirrorTimelineUpdateSecurityOption1 `security:"option"`
    Option2 *MirrorTimelineUpdateSecurityOption2 `security:"option"`
    
}

type MirrorTimelineUpdateRequest struct {
    PathParams MirrorTimelineUpdatePathParams 
    QueryParams MirrorTimelineUpdateQueryParams 
    Request *MirrorTimelineUpdateRequests 
    Security MirrorTimelineUpdateSecurity 
    
}

type MirrorTimelineUpdateResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

