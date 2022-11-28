import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Interval extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=change" })
  change?: number;

  @SpeakeasyMetadata({ data: "json, name=changePercent" })
  changePercent?: number;

  @SpeakeasyMetadata({ data: "json, name=end" })
  end?: Date;

  @SpeakeasyMetadata({ data: "json, name=high" })
  high?: number;

  @SpeakeasyMetadata({ data: "json, name=last" })
  last?: number;

  @SpeakeasyMetadata({ data: "json, name=low" })
  low?: number;

  @SpeakeasyMetadata({ data: "json, name=open" })
  open?: number;

  @SpeakeasyMetadata({ data: "json, name=start" })
  start?: Date;
}
