import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum VerifyRequestLgEnum {
    ArXa = "ar-xa",
    CsCz = "cs-cz",
    CyCy = "cy-cy",
    CyGb = "cy-gb",
    DaDk = "da-dk",
    DeDe = "de-de",
    ElGr = "el-gr",
    EnAu = "en-au",
    EnGb = "en-gb",
    EnIn = "en-in",
    EnUs = "en-us",
    EsEs = "es-es",
    EsMx = "es-mx",
    EsUs = "es-us",
    FiFi = "fi-fi",
    FilPh = "fil-ph",
    FrCa = "fr-ca",
    FrFr = "fr-fr",
    HiIn = "hi-in",
    HuHu = "hu-hu",
    IdId = "id-id",
    IsIs = "is-is",
    ItIt = "it-it",
    JaJp = "ja-jp",
    KoKr = "ko-kr",
    NbNo = "nb-no",
    NlNl = "nl-nl",
    PlPl = "pl-pl",
    PtBr = "pt-br",
    PtPt = "pt-pt",
    RoRo = "ro-ro",
    RuRu = "ru-ru",
    SvSe = "sv-se",
    ThTh = "th-th",
    TrTr = "tr-tr",
    ViVn = "vi-vn",
    YueCn = "yue-cn",
    ZhCn = "zh-cn",
    ZhTw = "zh-tw"
}


export class VerifyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=api_key;" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "form, name=api_secret;" })
  apiSecret: string;

  @SpeakeasyMetadata({ data: "form, name=brand;" })
  brand: string;

  @SpeakeasyMetadata({ data: "form, name=code_length;" })
  codeLength?: number;

  @SpeakeasyMetadata({ data: "form, name=country;" })
  country?: string;

  @SpeakeasyMetadata({ data: "form, name=lg;" })
  lg?: VerifyRequestLgEnum;

  @SpeakeasyMetadata({ data: "form, name=next_event_wait;" })
  nextEventWait?: number;

  @SpeakeasyMetadata({ data: "form, name=number;" })
  number: string;

  @SpeakeasyMetadata({ data: "form, name=pin_expiry;" })
  pinExpiry?: number;

  @SpeakeasyMetadata({ data: "form, name=sender_id;" })
  senderId?: string;

  @SpeakeasyMetadata({ data: "form, name=workflow_id;" })
  workflowId?: number;
}
