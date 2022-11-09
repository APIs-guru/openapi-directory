import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NestedDeviceType } from "./nesteddevicetype";
import { NestedRearPortTemplate } from "./nestedrearporttemplate";

export enum FrontPortTemplateTypeLabelEnum {
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

export enum FrontPortTemplateTypeValueEnum {
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


export class FrontPortTemplateType extends SpeakeasyBase {
  @Metadata({ data: "json, name=label" })
  label: FrontPortTemplateTypeLabelEnum;

  @Metadata({ data: "json, name=value" })
  value: FrontPortTemplateTypeValueEnum;
}


export class FrontPortTemplate extends SpeakeasyBase {
  @Metadata({ data: "json, name=device_type" })
  deviceType: NestedDeviceType;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=rear_port" })
  rearPort: NestedRearPortTemplate;

  @Metadata({ data: "json, name=rear_port_position" })
  rearPortPosition?: number;

  @Metadata({ data: "json, name=type" })
  type: FrontPortTemplateType;
}
