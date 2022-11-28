import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TimeWindow extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=earliest" })
  earliest?: number;

  @SpeakeasyMetadata({ data: "json, name=latest" })
  latest?: number;
}
