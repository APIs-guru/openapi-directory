import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum WritableRearPortTemplateTypeEnum {
    Eightp8c = "8p8c",
    OneHundredAndTenPunch = "110-punch",
    Bnc = "bnc",
    Mrj21 = "mrj21",
    Fc = "fc",
    Lc = "lc",
    LcApc = "lc-apc",
    Lsh = "lsh",
    LshApc = "lsh-apc",
    Mpo = "mpo",
    Mtrj = "mtrj",
    Sc = "sc",
    ScApc = "sc-apc",
    St = "st"
}


export class WritableRearPortTemplateInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=device_type" })
  deviceType: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=positions" })
  positions?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: WritableRearPortTemplateTypeEnum;
}
