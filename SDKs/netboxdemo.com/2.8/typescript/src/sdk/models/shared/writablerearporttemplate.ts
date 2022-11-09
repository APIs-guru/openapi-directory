import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum WritableRearPortTemplateTypeEnum {
    Eightp8c = "8p8c"
,    OneHundredAndTenPunch = "110-punch"
,    Bnc = "bnc"
,    Mrj21 = "mrj21"
,    Fc = "fc"
,    Lc = "lc"
,    LcApc = "lc-apc"
,    Lsh = "lsh"
,    LshApc = "lsh-apc"
,    Mpo = "mpo"
,    Mtrj = "mtrj"
,    Sc = "sc"
,    ScApc = "sc-apc"
,    St = "st"
}


export class WritableRearPortTemplate extends SpeakeasyBase {
  @Metadata({ data: "json, name=device_type" })
  deviceType: number;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=positions" })
  positions?: number;

  @Metadata({ data: "json, name=type" })
  type: WritableRearPortTemplateTypeEnum;
}
