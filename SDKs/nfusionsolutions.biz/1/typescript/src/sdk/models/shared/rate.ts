import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Rate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=symbol" })
  symbol?: string;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: number;
}
