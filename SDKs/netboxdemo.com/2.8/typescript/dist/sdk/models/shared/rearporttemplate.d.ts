import { SpeakeasyBase } from "../../../internal/utils";
import { NestedDeviceType } from "./nesteddevicetype";
export declare enum RearPortTemplateTypeLabelEnum {
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
export declare enum RearPortTemplateTypeValueEnum {
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
export declare class RearPortTemplateType extends SpeakeasyBase {
    label: RearPortTemplateTypeLabelEnum;
    value: RearPortTemplateTypeValueEnum;
}
export declare class RearPortTemplate extends SpeakeasyBase {
    deviceType: NestedDeviceType;
    id?: number;
    name: string;
    positions?: number;
    type: RearPortTemplateType;
}
