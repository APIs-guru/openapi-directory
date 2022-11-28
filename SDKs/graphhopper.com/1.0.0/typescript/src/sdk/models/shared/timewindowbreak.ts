import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TimeWindowBreak extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration: number;

  @SpeakeasyMetadata({ data: "json, name=earliest" })
  earliest: number;

  @SpeakeasyMetadata({ data: "json, name=latest" })
  latest: number;
}
