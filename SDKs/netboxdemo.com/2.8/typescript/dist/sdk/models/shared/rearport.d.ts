import { SpeakeasyBase } from "../../../internal/utils";
import { NestedCable } from "./nestedcable";
import { NestedDevice } from "./nesteddevice";
export declare enum RearPortTypeLabelEnum {
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
export declare enum RearPortTypeValueEnum {
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
export declare class RearPortType extends SpeakeasyBase {
    label: RearPortTypeLabelEnum;
    value: RearPortTypeValueEnum;
}
export declare class RearPort extends SpeakeasyBase {
    cable?: NestedCable;
    description?: string;
    device: NestedDevice;
    id?: number;
    name: string;
    positions?: number;
    tags?: string[];
    type: RearPortType;
}
