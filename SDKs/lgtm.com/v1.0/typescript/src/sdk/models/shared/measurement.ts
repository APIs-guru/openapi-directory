import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Measurement extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: number;
}
