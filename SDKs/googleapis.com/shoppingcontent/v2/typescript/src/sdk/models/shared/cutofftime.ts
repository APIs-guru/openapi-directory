import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CutoffTime extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hour" })
  hour?: number;

  @SpeakeasyMetadata({ data: "json, name=minute" })
  minute?: number;

  @SpeakeasyMetadata({ data: "json, name=timezone" })
  timezone?: string;
}
