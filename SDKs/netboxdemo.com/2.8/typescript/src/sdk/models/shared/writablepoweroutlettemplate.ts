import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum WritablePowerOutletTemplateFeedLegEnum {
    A = "A"
,    B = "B"
,    C = "C"
}

export enum WritablePowerOutletTemplateTypeEnum {
    Iec60320C5 = "iec-60320-c5"
,    Iec60320C7 = "iec-60320-c7"
,    Iec60320C13 = "iec-60320-c13"
,    Iec60320C15 = "iec-60320-c15"
,    Iec60320C19 = "iec-60320-c19"
,    Iec60309PNE4h = "iec-60309-p-n-e-4h"
,    Iec60309PNE6h = "iec-60309-p-n-e-6h"
,    Iec60309PNE9h = "iec-60309-p-n-e-9h"
,    Iec603092pE4h = "iec-60309-2p-e-4h"
,    Iec603092pE6h = "iec-60309-2p-e-6h"
,    Iec603092pE9h = "iec-60309-2p-e-9h"
,    Iec603093pE4h = "iec-60309-3p-e-4h"
,    Iec603093pE6h = "iec-60309-3p-e-6h"
,    Iec603093pE9h = "iec-60309-3p-e-9h"
,    Iec603093pNE4h = "iec-60309-3p-n-e-4h"
,    Iec603093pNE6h = "iec-60309-3p-n-e-6h"
,    Iec603093pNE9h = "iec-60309-3p-n-e-9h"
,    Nema115r = "nema-1-15r"
,    Nema515r = "nema-5-15r"
,    Nema520r = "nema-5-20r"
,    Nema530r = "nema-5-30r"
,    Nema550r = "nema-5-50r"
,    Nema615r = "nema-6-15r"
,    Nema620r = "nema-6-20r"
,    Nema630r = "nema-6-30r"
,    Nema650r = "nema-6-50r"
,    Nema1030r = "nema-10-30r"
,    Nema1050r = "nema-10-50r"
,    Nema1420r = "nema-14-20r"
,    Nema1430r = "nema-14-30r"
,    Nema1450r = "nema-14-50r"
,    Nema1460r = "nema-14-60r"
,    NemaL115r = "nema-l1-15r"
,    NemaL515r = "nema-l5-15r"
,    NemaL520r = "nema-l5-20r"
,    NemaL530r = "nema-l5-30r"
,    NemaL550r = "nema-l5-50r"
,    NemaL615r = "nema-l6-15r"
,    NemaL620r = "nema-l6-20r"
,    NemaL630r = "nema-l6-30r"
,    NemaL650r = "nema-l6-50r"
,    NemaL1030r = "nema-l10-30r"
,    NemaL1420r = "nema-l14-20r"
,    NemaL1430r = "nema-l14-30r"
,    NemaL1450r = "nema-l14-50r"
,    NemaL1460r = "nema-l14-60r"
,    NemaL2120r = "nema-l21-20r"
,    NemaL2130r = "nema-l21-30r"
,    Cs6360C = "CS6360C"
,    Cs6364C = "CS6364C"
,    Cs8164C = "CS8164C"
,    Cs8264C = "CS8264C"
,    Cs8364C = "CS8364C"
,    Cs8464C = "CS8464C"
,    ItaE = "ita-e"
,    ItaF = "ita-f"
,    ItaG = "ita-g"
,    ItaH = "ita-h"
,    ItaI = "ita-i"
,    ItaJ = "ita-j"
,    ItaK = "ita-k"
,    ItaL = "ita-l"
,    ItaM = "ita-m"
,    ItaN = "ita-n"
,    ItaO = "ita-o"
,    HdotCx = "hdot-cx"
}


export class WritablePowerOutletTemplate extends SpeakeasyBase {
  @Metadata({ data: "json, name=device_type" })
  deviceType: number;

  @Metadata({ data: "json, name=feed_leg" })
  feedLeg?: WritablePowerOutletTemplateFeedLegEnum;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=power_port" })
  powerPort?: number;

  @Metadata({ data: "json, name=type" })
  type?: WritablePowerOutletTemplateTypeEnum;
}
