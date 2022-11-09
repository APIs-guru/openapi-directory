import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class WarehouseCutoffTime extends SpeakeasyBase {
  @Metadata({ data: "json, name=hour" })
  hour?: number;

  @Metadata({ data: "json, name=minute" })
  minute?: number;
}
