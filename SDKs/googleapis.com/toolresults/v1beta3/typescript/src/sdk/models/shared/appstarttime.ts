import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Duration } from "./duration";



export class AppStartTime extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fullyDrawnTime" })
  fullyDrawnTime?: Duration;

  @SpeakeasyMetadata({ data: "json, name=initialDisplayTime" })
  initialDisplayTime?: Duration;
}
