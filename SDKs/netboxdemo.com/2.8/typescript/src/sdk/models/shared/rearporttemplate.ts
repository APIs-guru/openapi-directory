import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NestedDeviceType } from "./nesteddevicetype";

export enum RearPortTemplateTypeLabelEnum {
    EightP8C = "8P8C"
,    OneHundredAndTenPunch = "110 Punch"
,    Bnc = "BNC"
,    Mrj21 = "MRJ21"
,    Fc = "FC"
,    Lc = "LC"
,    LcApc = "LC/APC"
,    Lsh = "LSH"
,    LshApc = "LSH/APC"
,    Mpo = "MPO"
,    Mtrj = "MTRJ"
,    Sc = "SC"
,    ScApc = "SC/APC"
,    St = "ST"
}

export enum RearPortTemplateTypeValueEnum {
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


export class RearPortTemplateType extends SpeakeasyBase {
  @Metadata({ data: "json, name=label" })
  label: RearPortTemplateTypeLabelEnum;

  @Metadata({ data: "json, name=value" })
  value: RearPortTemplateTypeValueEnum;
}


export class RearPortTemplate extends SpeakeasyBase {
  @Metadata({ data: "json, name=device_type" })
  deviceType: NestedDeviceType;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=positions" })
  positions?: number;

  @Metadata({ data: "json, name=type" })
  type: RearPortTemplateType;
}
