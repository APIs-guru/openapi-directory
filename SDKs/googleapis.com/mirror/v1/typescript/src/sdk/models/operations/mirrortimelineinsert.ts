import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class MirrorTimelineInsertQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" })
  userIp?: string;
}


export class MirrorTimelineInsertRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=audio/1d-interleaved-parityfec" })
  audio1dInterleavedParityfec: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/32kadpcm" })
  audio32kadpcm: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/3gpp" })
  audio3gpp: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/3gpp2" })
  audio3gpp2: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/aac" })
  audioAac: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/ac3" })
  audioAc3: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/adpcm" })
  audioAdpcm: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/amr" })
  audioAmr: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/amr-wb" })
  audioAmrWb: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/amr-wb+" })
  audioAmrWbPlus: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/aptx" })
  audioAptx: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/asc" })
  audioAsc: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/atrac3" })
  audioAtrac3: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/atrac-advanced-lossless" })
  audioAtracAdvancedLossless: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/atrac-x" })
  audioAtracX: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/basic" })
  audioBasic: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/bv16" })
  audioBv16: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/bv32" })
  audioBv32: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/clearmode" })
  audioClearmode: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/cn" })
  audioCn: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/dat12" })
  audioDat12: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/dls" })
  audioDls: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/dsr-es201108" })
  audioDsrEs201108: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/dsr-es202050" })
  audioDsrEs202050: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/dsr-es202211" })
  audioDsrEs202211: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/dsr-es202212" })
  audioDsrEs202212: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/dv" })
  audioDv: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/dvi4" })
  audioDvi4: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/eac3" })
  audioEac3: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/encaprtp" })
  audioEncaprtp: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/evrc" })
  audioEvrc: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/evrc0" })
  audioEvrc0: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/evrc1" })
  audioEvrc1: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/evrc-qcp" })
  audioEvrcQcp: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/evrcb" })
  audioEvrcb: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/evrcb0" })
  audioEvrcb0: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/evrcb1" })
  audioEvrcb1: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/evrcnw" })
  audioEvrcnw: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/evrcnw0" })
  audioEvrcnw0: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/evrcnw1" })
  audioEvrcnw1: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/evrcwb" })
  audioEvrcwb: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/evrcwb0" })
  audioEvrcwb0: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/evrcwb1" })
  audioEvrcwb1: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/evs" })
  audioEvs: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/fwdred" })
  audioFwdred: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/g711-0" })
  audioG7110: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/g719" })
  audioG719: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/g722" })
  audioG722: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/g7221" })
  audioG7221: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/g723" })
  audioG723: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/g726-16" })
  audioG72616: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/g726-24" })
  audioG72624: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/g726-32" })
  audioG72632: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/g726-40" })
  audioG72640: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/g728" })
  audioG728: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/g729" })
  audioG729: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/g7291" })
  audioG7291: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/g729d" })
  audioG729d: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/g729e" })
  audioG729e: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/gsm" })
  audioGsm: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/gsm-efr" })
  audioGsmEfr: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/gsm-hr-08" })
  audioGsmHr08: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/ip-mr_v2.5" })
  audioIpMrV25: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/ilbc" })
  audioIlbc: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/isac" })
  audioIsac: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/l16" })
  audioL16: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/l20" })
  audioL20: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/l24" })
  audioL24: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/l8" })
  audioL8: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/lpc" })
  audioLpc: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/melp" })
  audioMelp: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/melp1200" })
  audioMelp1200: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/melp2400" })
  audioMelp2400: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/melp600" })
  audioMelp600: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/midi" })
  audioMidi: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/mobile-xmf" })
  audioMobileXmf: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/mp3" })
  audioMp3: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/mp4" })
  audioMp4: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/mp4a-latm" })
  audioMp4aLatm: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/mpa" })
  audioMpa: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/mpa-robust" })
  audioMpaRobust: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/mpeg" })
  audioMpeg: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/mpeg4-generic" })
  audioMpeg4Generic: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/musepack" })
  audioMusepack: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/ogg" })
  audioOgg: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/opus" })
  audioOpus: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/parityfec" })
  audioParityfec: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/pcma" })
  audioPcma: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/pcma-wb" })
  audioPcmaWb: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/pcmu" })
  audioPcmu: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/pcmu-wb" })
  audioPcmuWb: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/prs.sid" })
  audioPrsSid: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/qcelp" })
  audioQcelp: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/raptorfec" })
  audioRaptorfec: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/red" })
  audioRed: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/rtp-enc-aescm128" })
  audioRtpEncAescm128: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/rtp-midi" })
  audioRtpMidi: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/rtploopback" })
  audioRtploopback: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/rtx" })
  audioRtx: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/s3m" })
  audioS3m: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/silk" })
  audioSilk: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/smv" })
  audioSmv: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/smv0" })
  audioSmv0: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/smv-qcp" })
  audioSmvQcp: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/sp-midi" })
  audioSpMidi: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/speex" })
  audioSpeex: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/t140c" })
  audioT140c: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/t38" })
  audioT38: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/telephone-event" })
  audioTelephoneEvent: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/tetra_acelp" })
  audioTetraAcelp: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/tone" })
  audioTone: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/uemclip" })
  audioUemclip: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/ulpfec" })
  audioUlpfec: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/usac" })
  audioUsac: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/vdvi" })
  audioVdvi: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/vmr-wb" })
  audioVmrWb: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/vnd.3gpp.iufp" })
  audioVnd3gppIufp: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/vnd.4sb" })
  audioVnd4sb: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/vnd.audiokoz" })
  audioVndAudiokoz: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/vnd.celp" })
  audioVndCelp: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/vnd.cisco.nse" })
  audioVndCiscoNse: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/vnd.cmles.radio-events" })
  audioVndCmlesRadioEvents: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/vnd.cns.anp1" })
  audioVndCnsAnp1: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/vnd.cns.inf1" })
  audioVndCnsInf1: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/vnd.dece.audio" })
  audioVndDeceAudio: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/vnd.digital-winds" })
  audioVndDigitalWinds: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/vnd.dlna.adts" })
  audioVndDlnaAdts: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/vnd.dolby.heaac.1" })
  audioVndDolbyHeaac1: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/vnd.dolby.heaac.2" })
  audioVndDolbyHeaac2: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/vnd.dolby.mlp" })
  audioVndDolbyMlp: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/vnd.dolby.mps" })
  audioVndDolbyMps: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/vnd.dolby.pl2" })
  audioVndDolbyPl2: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/vnd.dolby.pl2x" })
  audioVndDolbyPl2x: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/vnd.dolby.pl2z" })
  audioVndDolbyPl2z: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/vnd.dolby.pulse.1" })
  audioVndDolbyPulse1: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/vnd.dra" })
  audioVndDra: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/vnd.dts" })
  audioVndDts: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/vnd.dts.hd" })
  audioVndDtsHd: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/vnd.dts.uhd" })
  audioVndDtsUhd: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/vnd.dvb.file" })
  audioVndDvbFile: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/vnd.everad.plj" })
  audioVndEveradPlj: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/vnd.hns.audio" })
  audioVndHnsAudio: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/vnd.lucent.voice" })
  audioVndLucentVoice: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/vnd.ms-playready.media.pya" })
  audioVndMsPlayreadyMediaPya: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/vnd.nokia.mobile-xmf" })
  audioVndNokiaMobileXmf: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/vnd.nortel.vbk" })
  audioVndNortelVbk: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/vnd.nuera.ecelp4800" })
  audioVndNueraEcelp4800: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/vnd.nuera.ecelp7470" })
  audioVndNueraEcelp7470: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/vnd.nuera.ecelp9600" })
  audioVndNueraEcelp9600: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/vnd.octel.sbc" })
  audioVndOctelSbc: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/vnd.presonus.multitrack" })
  audioVndPresonusMultitrack: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/vnd.qcelp" })
  audioVndQcelp: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/vnd.rhetorex.32kadpcm" })
  audioVndRhetorex32kadpcm: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/vnd.rip" })
  audioVndRip: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/vnd.rn-realaudio" })
  audioVndRnRealaudio: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/vnd.sealedmedia.softseal.mpeg" })
  audioVndSealedmediaSoftsealMpeg: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/vnd.vmx.cvsd" })
  audioVndVmxCvsd: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/vnd.wave" })
  audioVndWave: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/vorbis" })
  audioVorbis: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/vorbis-config" })
  audioVorbisConfig: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/wav" })
  audioWav: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/wave" })
  audioWave: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/webm" })
  audioWebm: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/x-aac" })
  audioXAac: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/x-aiff" })
  audioXAiff: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/x-caf" })
  audioXCaf: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/x-flac" })
  audioXFlac: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/x-matroska" })
  audioXMatroska: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/x-mpegurl" })
  audioXMpegurl: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/x-ms-wax" })
  audioXMsWax: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/x-ms-wma" })
  audioXMsWma: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/x-pn-realaudio" })
  audioXPnRealaudio: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/x-pn-realaudio-plugin" })
  audioXPnRealaudioPlugin: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/x-realaudio" })
  audioXRealaudio: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/x-tta" })
  audioXTta: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/x-wav" })
  audioXWav: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/xm" })
  audioXm: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=audio/x-m4a" })
  audioXm4a: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=image/aces" })
  imageAces: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=image/apng" })
  imageApng: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=image/avci" })
  imageAvci: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=image/avcs" })
  imageAvcs: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=image/bmp" })
  imageBmp: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=image/cgm" })
  imageCgm: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=image/dicom-rle" })
  imageDicomRle: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=image/emf" })
  imageEmf: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=image/fits" })
  imageFits: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=image/g3fax" })
  imageG3fax: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=image/gif" })
  imageGif: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=image/heic" })
  imageHeic: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=image/heic-sequence" })
  imageHeicSequence: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=image/heif" })
  imageHeif: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=image/heif-sequence" })
  imageHeifSequence: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=image/ief" })
  imageIef: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=image/jls" })
  imageJls: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=image/jp2" })
  imageJp2: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=image/jpeg" })
  imageJpeg: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=image/jpm" })
  imageJpm: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=image/jpx" })
  imageJpx: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=image/ktx" })
  imageKtx: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=image/naplps" })
  imageNaplps: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=image/pjpeg" })
  imagePjpeg: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=image/png" })
  imagePng: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=image/prs.btif" })
  imagePrsBtif: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=image/prs.pti" })
  imagePrsPti: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=image/pwg-raster" })
  imagePwgRaster: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=image/sgi" })
  imageSgi: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=image/svg+xml" })
  imageSvgPlusXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=image/t38" })
  imageT38: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=image/tiff" })
  imageTiff: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=image/tiff-fx" })
  imageTiffFx: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=image/vnd.adobe.photoshop" })
  imageVndAdobePhotoshop: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=image/vnd.airzip.accelerator.azv" })
  imageVndAirzipAcceleratorAzv: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=image/vnd.cns.inf2" })
  imageVndCnsInf2: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=image/vnd.dece.graphic" })
  imageVndDeceGraphic: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=image/vnd.djvu" })
  imageVndDjvu: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=image/vnd.dvb.subtitle" })
  imageVndDvbSubtitle: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=image/vnd.dwg" })
  imageVndDwg: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=image/vnd.dxf" })
  imageVndDxf: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=image/vnd.fastbidsheet" })
  imageVndFastbidsheet: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=image/vnd.fpx" })
  imageVndFpx: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=image/vnd.fst" })
  imageVndFst: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=image/vnd.fujixerox.edmics-mmr" })
  imageVndFujixeroxEdmicsMmr: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=image/vnd.fujixerox.edmics-rlc" })
  imageVndFujixeroxEdmicsRlc: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=image/vnd.globalgraphics.pgb" })
  imageVndGlobalgraphicsPgb: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=image/vnd.microsoft.icon" })
  imageVndMicrosoftIcon: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=image/vnd.mix" })
  imageVndMix: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=image/vnd.mozilla.apng" })
  imageVndMozillaApng: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=image/vnd.ms-modi" })
  imageVndMsModi: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=image/vnd.ms-photo" })
  imageVndMsPhoto: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=image/vnd.net-fpx" })
  imageVndNetFpx: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=image/vnd.radiance" })
  imageVndRadiance: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=image/vnd.sealed.png" })
  imageVndSealedPng: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=image/vnd.sealedmedia.softseal.gif" })
  imageVndSealedmediaSoftsealGif: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=image/vnd.sealedmedia.softseal.jpg" })
  imageVndSealedmediaSoftsealJpg: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=image/vnd.svf" })
  imageVndSvf: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=image/vnd.tencent.tap" })
  imageVndTencentTap: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=image/vnd.valve.source.texture" })
  imageVndValveSourceTexture: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=image/vnd.wap.wbmp" })
  imageVndWapWbmp: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=image/vnd.xiff" })
  imageVndXiff: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=image/vnd.zbrush.pcx" })
  imageVndZbrushPcx: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=image/webp" })
  imageWebp: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=image/wmf" })
  imageWmf: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=image/x-3ds" })
  imageX3ds: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=image/x-cmu-raster" })
  imageXCmuRaster: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=image/x-cmx" })
  imageXCmx: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=image/x-freehand" })
  imageXFreehand: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=image/x-icon" })
  imageXIcon: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=image/x-jng" })
  imageXJng: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=image/x-mrsid-image" })
  imageXMrsidImage: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=image/x-ms-bmp" })
  imageXMsBmp: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=image/x-pcx" })
  imageXPcx: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=image/x-pict" })
  imageXPict: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=image/x-portable-anymap" })
  imageXPortableAnymap: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=image/x-portable-bitmap" })
  imageXPortableBitmap: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=image/x-portable-graymap" })
  imageXPortableGraymap: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=image/x-portable-pixmap" })
  imageXPortablePixmap: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=image/x-rgb" })
  imageXRgb: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=image/x-tga" })
  imageXTga: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=image/x-xbitmap" })
  imageXXbitmap: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=image/x-xcf" })
  imageXXcf: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=image/x-xpixmap" })
  imageXXpixmap: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=image/x-xwindowdump" })
  imageXXwindowdump: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/1d-interleaved-parityfec" })
  video1dInterleavedParityfec: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/3gpp" })
  video3gpp: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/3gpp2" })
  video3gpp2: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=video/3gpp-tt" })
  video3gppTt: Uint8Array;

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

  @SpeakeasyMetadata({ data: "request, media_type=video/vp8" })
  videoVp8: Uint8Array;

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


export class MirrorTimelineInsertSecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class MirrorTimelineInsertSecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class MirrorTimelineInsertSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: MirrorTimelineInsertSecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: MirrorTimelineInsertSecurityOption2;
}


export class MirrorTimelineInsertRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: MirrorTimelineInsertQueryParams;

  @SpeakeasyMetadata()
  request?: MirrorTimelineInsertRequests;

  @SpeakeasyMetadata()
  security: MirrorTimelineInsertSecurity;
}


export class MirrorTimelineInsertResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
