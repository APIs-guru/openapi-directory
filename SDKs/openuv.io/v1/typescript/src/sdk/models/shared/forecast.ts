import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Forecast extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=uv" })
  uv: number;

  @SpeakeasyMetadata({ data: "json, name=uv_time" })
  uvTime: string;
}
