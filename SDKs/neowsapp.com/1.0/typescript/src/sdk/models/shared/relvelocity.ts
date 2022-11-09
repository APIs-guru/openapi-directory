import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RelVelocity extends SpeakeasyBase {
  @Metadata({ data: "json, name=kilometers_per_hour" })
  kilometersPerHour?: string;

  @Metadata({ data: "json, name=miles_per_hour" })
  milesPerHour?: string;
}
