import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum WritableCableLengthUnitEnum {
    M = "m"
,    Cm = "cm"
,    Ft = "ft"
,    In = "in"
}

export enum WritableCableStatusEnum {
    Connected = "connected"
,    Planned = "planned"
,    Decommissioning = "decommissioning"
}

export enum WritableCableTypeEnum {
    Cat3 = "cat3"
,    Cat5 = "cat5"
,    Cat5e = "cat5e"
,    Cat6 = "cat6"
,    Cat6a = "cat6a"
,    Cat7 = "cat7"
,    DacActive = "dac-active"
,    DacPassive = "dac-passive"
,    Mrj21Trunk = "mrj21-trunk"
,    Coaxial = "coaxial"
,    Mmf = "mmf"
,    MmfOm1 = "mmf-om1"
,    MmfOm2 = "mmf-om2"
,    MmfOm3 = "mmf-om3"
,    MmfOm4 = "mmf-om4"
,    Smf = "smf"
,    SmfOs1 = "smf-os1"
,    SmfOs2 = "smf-os2"
,    Aoc = "aoc"
,    Power = "power"
}


export class WritableCable extends SpeakeasyBase {
  @Metadata({ data: "json, name=color" })
  color?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=length" })
  length?: number;

  @Metadata({ data: "json, name=length_unit" })
  lengthUnit?: WritableCableLengthUnitEnum;

  @Metadata({ data: "json, name=status" })
  status?: WritableCableStatusEnum;

  @Metadata({ data: "json, name=termination_a" })
  terminationA?: Map<string, string>;

  @Metadata({ data: "json, name=termination_a_id" })
  terminationAId: number;

  @Metadata({ data: "json, name=termination_a_type" })
  terminationAType: string;

  @Metadata({ data: "json, name=termination_b" })
  terminationB?: Map<string, string>;

  @Metadata({ data: "json, name=termination_b_id" })
  terminationBId: number;

  @Metadata({ data: "json, name=termination_b_type" })
  terminationBType: string;

  @Metadata({ data: "json, name=type" })
  type?: WritableCableTypeEnum;
}
