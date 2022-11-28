import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum InstanceMessageCodeEnum {
    CodeUnspecified = "CODE_UNSPECIFIED",
    ZoneDistributionUnbalanced = "ZONE_DISTRIBUTION_UNBALANCED"
}


export class InstanceMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: InstanceMessageCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}
