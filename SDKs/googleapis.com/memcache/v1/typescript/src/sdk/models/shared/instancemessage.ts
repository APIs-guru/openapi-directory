import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum InstanceMessageCodeEnum {
    CodeUnspecified = "CODE_UNSPECIFIED"
,    ZoneDistributionUnbalanced = "ZONE_DISTRIBUTION_UNBALANCED"
}


export class InstanceMessage extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: InstanceMessageCodeEnum;

  @Metadata({ data: "json, name=message" })
  message?: string;
}
