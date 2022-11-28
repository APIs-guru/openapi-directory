import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class WarehouseCutoffTime extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hour" })
  hour?: number;

  @SpeakeasyMetadata({ data: "json, name=minute" })
  minute?: number;
}
