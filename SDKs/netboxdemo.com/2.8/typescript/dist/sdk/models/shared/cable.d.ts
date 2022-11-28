import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CableLengthUnitLabelEnum {
    Meters = "Meters",
    Centimeters = "Centimeters",
    Feet = "Feet",
    Inches = "Inches"
}
export declare enum CableLengthUnitValueEnum {
    M = "m",
    Cm = "cm",
    Ft = "ft",
    In = "in"
}
export declare class CableLengthUnit extends SpeakeasyBase {
    label: CableLengthUnitLabelEnum;
    value: CableLengthUnitValueEnum;
}
export declare enum CableStatusLabelEnum {
    Connected = "Connected",
    Planned = "Planned",
    Decommissioning = "Decommissioning"
}
export declare enum CableStatusValueEnum {
    Connected = "connected",
    Planned = "planned",
    Decommissioning = "decommissioning"
}
export declare class CableStatus extends SpeakeasyBase {
    label: CableStatusLabelEnum;
    value: CableStatusValueEnum;
}
export declare enum CableTypeEnum {
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
export declare class Cable extends SpeakeasyBase {
    color?: string;
    id?: number;
    label?: string;
    length?: number;
    lengthUnit?: CableLengthUnit;
    status?: CableStatus;
    terminationA?: Map<string, string>;
    terminationAId: number;
    terminationAType: string;
    terminationB?: Map<string, string>;
    terminationBId: number;
    terminationBType: string;
    type?: CableTypeEnum;
}
