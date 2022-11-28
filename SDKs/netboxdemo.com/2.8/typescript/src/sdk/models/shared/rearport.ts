import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NestedCable } from "./nestedcable";
import { NestedDevice } from "./nesteddevice";


export enum RearPortTypeLabelEnum {
    EightP8C = "8P8C",
    OneHundredAndTenPunch = "110 Punch",
    Bnc = "BNC",
    Mrj21 = "MRJ21",
    Fc = "FC",
    Lc = "LC",
    LcApc = "LC/APC",
    Lsh = "LSH",
    LshApc = "LSH/APC",
    Mpo = "MPO",
    Mtrj = "MTRJ",
    Sc = "SC",
    ScApc = "SC/APC",
    St = "ST"
}

export enum RearPortTypeValueEnum {
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


export class RearPortType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=label" })
  label: RearPortTypeLabelEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: RearPortTypeValueEnum;
}


export class RearPort extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cable" })
  cable?: NestedCable;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=device" })
  device: NestedDevice;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=positions" })
  positions?: number;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: RearPortType;
}
