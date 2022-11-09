import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum Psd2RequestLgEnum {
    EnGb = "en-gb"
,    BgBg = "bg-bg"
,    CsCz = "cs-cz"
,    DaDk = "da-dk"
,    DeDe = "de-de"
,    EeEt = "ee-et"
,    ElGr = "el-gr"
,    EsEs = "es-es"
,    FiFi = "fi-fi"
,    FrFr = "fr-fr"
,    GaIe = "ga-ie"
,    HuHu = "hu-hu"
,    ItIt = "it-it"
,    LvLv = "lv-lv"
,    LtLt = "lt-lt"
,    MtMt = "mt-mt"
,    NlNl = "nl-nl"
,    PlPl = "pl-pl"
,    SkSk = "sk-sk"
,    SlSi = "sl-si"
,    SvSe = "sv-se"
}


export class Psd2Request extends SpeakeasyBase {
  @Metadata({ data: "form, name=amount;" })
  amount: number;

  @Metadata({ data: "form, name=api_key;" })
  apiKey: string;

  @Metadata({ data: "form, name=api_secret;" })
  apiSecret: string;

  @Metadata({ data: "form, name=code_length;" })
  codeLength?: number;

  @Metadata({ data: "form, name=country;" })
  country?: string;

  @Metadata({ data: "form, name=lg;" })
  lg?: Psd2RequestLgEnum;

  @Metadata({ data: "form, name=next_event_wait;" })
  nextEventWait?: number;

  @Metadata({ data: "form, name=number;" })
  number: string;

  @Metadata({ data: "form, name=payee;" })
  payee: string;

  @Metadata({ data: "form, name=pin_expiry;" })
  pinExpiry?: number;

  @Metadata({ data: "form, name=workflow_id;" })
  workflowId?: number;
}
