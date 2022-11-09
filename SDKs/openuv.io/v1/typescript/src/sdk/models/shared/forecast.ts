import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Forecast extends SpeakeasyBase {
  @Metadata({ data: "json, name=uv" })
  uv: number;

  @Metadata({ data: "json, name=uv_time" })
  uvTime: string;
}
