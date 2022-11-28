import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UvIndexResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=from_time" })
  fromTime: string;

  @SpeakeasyMetadata({ data: "json, name=from_uv" })
  fromUv: number;

  @SpeakeasyMetadata({ data: "json, name=to_time" })
  toTime: string;

  @SpeakeasyMetadata({ data: "json, name=to_uv" })
  toUv: number;
}
