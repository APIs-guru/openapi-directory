import { SpeakeasyBase } from "../../../internal/utils";
export declare enum WritableCableLengthUnitEnum {
    M = "m",
    Cm = "cm",
    Ft = "ft",
    In = "in"
}
export declare enum WritableCableStatusEnum {
    Connected = "connected",
    Planned = "planned",
    Decommissioning = "decommissioning"
}
export declare enum WritableCableTypeEnum {
    Cat3 = "cat3",
    Cat5 = "cat5",
    Cat5e = "cat5e",
    Cat6 = "cat6",
    Cat6a = "cat6a",
    Cat7 = "cat7",
    DacActive = "dac-active",
    DacPassive = "dac-passive",
    Mrj21Trunk = "mrj21-trunk",
    Coaxial = "coaxial",
    Mmf = "mmf",
    MmfOm1 = "mmf-om1",
    MmfOm2 = "mmf-om2",
    MmfOm3 = "mmf-om3",
    MmfOm4 = "mmf-om4",
    Smf = "smf",
    SmfOs1 = "smf-os1",
    SmfOs2 = "smf-os2",
    Aoc = "aoc",
    Power = "power"
}
export declare class WritableCableInput extends SpeakeasyBase {
    color?: string;
    label?: string;
    length?: number;
    lengthUnit?: WritableCableLengthUnitEnum;
    status?: WritableCableStatusEnum;
    terminationAId: number;
    terminationAType: string;
    terminationBId: number;
    terminationBType: string;
    type?: WritableCableTypeEnum;
}
