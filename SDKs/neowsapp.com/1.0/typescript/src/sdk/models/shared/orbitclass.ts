import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum OrbitClassOrbitClassTypeEnum {
    Ieo = "IEO"
,    Ate = "ATE"
,    Apo = "APO"
,    Amo = "AMO"
,    Mca = "MCA"
,    Imb = "IMB"
,    Mba = "MBA"
,    Omb = "OMB"
,    Tjn = "TJN"
,    Cen = "CEN"
,    Tno = "TNO"
,    Paa = "PAA"
,    Hya = "HYA"
,    Hyp = "HYP"
,    Par = "PAR"
,    Com = "COM"
,    Jfc = "JFC"
,    Htc = "HTC"
,    Etc = "ETC"
,    Ctc = "CTC"
,    JFc = "JFc"
}


export class OrbitClass extends SpeakeasyBase {
  @Metadata({ data: "json, name=orbit_class_description" })
  orbitClassDescription?: string;

  @Metadata({ data: "json, name=orbit_class_range" })
  orbitClassRange?: string;

  @Metadata({ data: "json, name=orbit_class_type" })
  orbitClassType?: OrbitClassOrbitClassTypeEnum;
}
