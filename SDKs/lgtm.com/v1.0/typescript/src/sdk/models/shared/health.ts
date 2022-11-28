import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum HealthStatusEnum {
    Unknown = "UNKNOWN",
    Up = "UP",
    Down = "DOWN"
}


export class Health extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=details", elemType: Health })
  details?: Map<string, Health>;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: HealthStatusEnum;
}
