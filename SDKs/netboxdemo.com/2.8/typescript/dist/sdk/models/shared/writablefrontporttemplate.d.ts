import { SpeakeasyBase } from "../../../internal/utils";
export declare enum WritableFrontPortTemplateTypeEnum {
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
export declare class WritableFrontPortTemplateInput extends SpeakeasyBase {
    deviceType: number;
    name: string;
    rearPort: number;
    rearPortPosition?: number;
    type: WritableFrontPortTemplateTypeEnum;
}
