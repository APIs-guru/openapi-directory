import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UvIndexResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=from_time" })
  fromTime: string;

  @Metadata({ data: "json, name=from_uv" })
  fromUv: number;

  @Metadata({ data: "json, name=to_time" })
  toTime: string;

  @Metadata({ data: "json, name=to_uv" })
  toUv: number;
}
