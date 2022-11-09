import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Interval extends SpeakeasyBase {
  @Metadata({ data: "json, name=change" })
  change?: number;

  @Metadata({ data: "json, name=changePercent" })
  changePercent?: number;

  @Metadata({ data: "json, name=end" })
  end?: Date;

  @Metadata({ data: "json, name=high" })
  high?: number;

  @Metadata({ data: "json, name=last" })
  last?: number;

  @Metadata({ data: "json, name=low" })
  low?: number;

  @Metadata({ data: "json, name=open" })
  open?: number;

  @Metadata({ data: "json, name=start" })
  start?: Date;
}
