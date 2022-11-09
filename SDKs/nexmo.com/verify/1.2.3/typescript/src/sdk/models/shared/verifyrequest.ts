import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum VerifyRequestLgEnum {
    ArXa = "ar-xa"
,    CsCz = "cs-cz"
,    CyCy = "cy-cy"
,    CyGb = "cy-gb"
,    DaDk = "da-dk"
,    DeDe = "de-de"
,    ElGr = "el-gr"
,    EnAu = "en-au"
,    EnGb = "en-gb"
,    EnIn = "en-in"
,    EnUs = "en-us"
,    EsEs = "es-es"
,    EsMx = "es-mx"
,    EsUs = "es-us"
,    FiFi = "fi-fi"
,    FilPh = "fil-ph"
,    FrCa = "fr-ca"
,    FrFr = "fr-fr"
,    HiIn = "hi-in"
,    HuHu = "hu-hu"
,    IdId = "id-id"
,    IsIs = "is-is"
,    ItIt = "it-it"
,    JaJp = "ja-jp"
,    KoKr = "ko-kr"
,    NbNo = "nb-no"
,    NlNl = "nl-nl"
,    PlPl = "pl-pl"
,    PtBr = "pt-br"
,    PtPt = "pt-pt"
,    RoRo = "ro-ro"
,    RuRu = "ru-ru"
,    SvSe = "sv-se"
,    ThTh = "th-th"
,    TrTr = "tr-tr"
,    ViVn = "vi-vn"
,    YueCn = "yue-cn"
,    ZhCn = "zh-cn"
,    ZhTw = "zh-tw"
}


export class VerifyRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=api_key;" })
  apiKey: string;

  @Metadata({ data: "form, name=api_secret;" })
  apiSecret: string;

  @Metadata({ data: "form, name=brand;" })
  brand: string;

  @Metadata({ data: "form, name=code_length;" })
  codeLength?: number;

  @Metadata({ data: "form, name=country;" })
  country?: string;

  @Metadata({ data: "form, name=lg;" })
  lg?: VerifyRequestLgEnum;

  @Metadata({ data: "form, name=next_event_wait;" })
  nextEventWait?: number;

  @Metadata({ data: "form, name=number;" })
  number: string;

  @Metadata({ data: "form, name=pin_expiry;" })
  pinExpiry?: number;

  @Metadata({ data: "form, name=sender_id;" })
  senderId?: string;

  @Metadata({ data: "form, name=workflow_id;" })
  workflowId?: number;
}
