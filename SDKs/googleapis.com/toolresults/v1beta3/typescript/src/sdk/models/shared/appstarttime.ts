import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Duration } from "./duration";
import { Duration } from "./duration";


export class AppStartTime extends SpeakeasyBase {
  @Metadata({ data: "json, name=fullyDrawnTime" })
  fullyDrawnTime?: Duration;

  @Metadata({ data: "json, name=initialDisplayTime" })
  initialDisplayTime?: Duration;
}
