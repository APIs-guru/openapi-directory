import { SpeakeasyBase } from "../../../internal/utils";
import { NestedCable } from "./nestedcable";
import { NestedDevice } from "./nesteddevice";
import { FrontPortRearPort } from "./frontportrearport";
export declare enum FrontPortTypeLabelEnum {
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
export declare enum FrontPortTypeValueEnum {
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
export declare class FrontPortType extends SpeakeasyBase {
    label: FrontPortTypeLabelEnum;
    value: FrontPortTypeValueEnum;
}
export declare class FrontPort extends SpeakeasyBase {
    cable?: NestedCable;
    description?: string;
    device: NestedDevice;
    id?: number;
    name: string;
    rearPort: FrontPortRearPort;
    rearPortPosition?: number;
    tags?: string[];
    type: FrontPortType;
}
