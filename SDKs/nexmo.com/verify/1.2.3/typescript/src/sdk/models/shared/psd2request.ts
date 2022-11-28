import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum Psd2RequestLgEnum {
    EnGb = "en-gb",
    BgBg = "bg-bg",
    CsCz = "cs-cz",
    DaDk = "da-dk",
    DeDe = "de-de",
    EeEt = "ee-et",
    ElGr = "el-gr",
    EsEs = "es-es",
    FiFi = "fi-fi",
    FrFr = "fr-fr",
    GaIe = "ga-ie",
    HuHu = "hu-hu",
    ItIt = "it-it",
    LvLv = "lv-lv",
    LtLt = "lt-lt",
    MtMt = "mt-mt",
    NlNl = "nl-nl",
    PlPl = "pl-pl",
    SkSk = "sk-sk",
    SlSi = "sl-si",
    SvSe = "sv-se"
}


export class Psd2Request extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=amount;" })
  amount: number;

  @SpeakeasyMetadata({ data: "form, name=api_key;" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "form, name=api_secret;" })
  apiSecret: string;

  @SpeakeasyMetadata({ data: "form, name=code_length;" })
  codeLength?: number;

  @SpeakeasyMetadata({ data: "form, name=country;" })
  country?: string;

  @SpeakeasyMetadata({ data: "form, name=lg;" })
  lg?: Psd2RequestLgEnum;

  @SpeakeasyMetadata({ data: "form, name=next_event_wait;" })
  nextEventWait?: number;

  @SpeakeasyMetadata({ data: "form, name=number;" })
  number: string;

  @SpeakeasyMetadata({ data: "form, name=payee;" })
  payee: string;

  @SpeakeasyMetadata({ data: "form, name=pin_expiry;" })
  pinExpiry?: number;

  @SpeakeasyMetadata({ data: "form, name=workflow_id;" })
  workflowId?: number;
}
