import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NestedCable } from "./nestedcable";
import { NestedDevice } from "./nesteddevice";
import { FrontPortRearPort } from "./frontportrearport";

export enum FrontPortTypeLabelEnum {
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

export enum FrontPortTypeValueEnum {
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


export class FrontPortType extends SpeakeasyBase {
  @Metadata({ data: "json, name=label" })
  label: FrontPortTypeLabelEnum;

  @Metadata({ data: "json, name=value" })
  value: FrontPortTypeValueEnum;
}


export class FrontPort extends SpeakeasyBase {
  @Metadata({ data: "json, name=cable" })
  cable?: NestedCable;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=device" })
  device: NestedDevice;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=rear_port" })
  rearPort: FrontPortRearPort;

  @Metadata({ data: "json, name=rear_port_position" })
  rearPortPosition?: number;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];

  @Metadata({ data: "json, name=type" })
  type: FrontPortType;
}
