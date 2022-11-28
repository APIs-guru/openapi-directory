import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RelVelocity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kilometers_per_hour" })
  kilometersPerHour?: string;

  @SpeakeasyMetadata({ data: "json, name=miles_per_hour" })
  milesPerHour?: string;
}
