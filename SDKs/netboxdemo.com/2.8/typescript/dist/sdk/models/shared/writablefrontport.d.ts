import { SpeakeasyBase } from "../../../internal/utils";
import { NestedCableInput } from "./nestedcable";
export declare enum WritableFrontPortTypeEnum {
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
export declare class WritableFrontPortInput extends SpeakeasyBase {
    cable?: NestedCableInput;
    description?: string;
    device: number;
    name: string;
    rearPort: number;
    rearPortPosition?: number;
    tags?: string[];
    type: WritableFrontPortTypeEnum;
}
