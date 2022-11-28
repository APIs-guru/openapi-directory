import { SpeakeasyBase } from "../../../internal/utils";
export declare enum OrbitClassOrbitClassTypeEnum {
    Ieo = "IEO",
    Ate = "ATE",
    Apo = "APO",
    Amo = "AMO",
    Mca = "MCA",
    Imb = "IMB",
    Mba = "MBA",
    Omb = "OMB",
    Tjn = "TJN",
    Cen = "CEN",
    Tno = "TNO",
    Paa = "PAA",
    Hya = "HYA",
    Hyp = "HYP",
    Par = "PAR",
    Com = "COM",
    Jfc = "JFC",
    Htc = "HTC",
    Etc = "ETC",
    Ctc = "CTC",
    JFc = "JFc"
}
export declare class OrbitClass extends SpeakeasyBase {
    orbitClassDescription?: string;
    orbitClassRange?: string;
    orbitClassType?: OrbitClassOrbitClassTypeEnum;
}
