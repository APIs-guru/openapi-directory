import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Rate extends SpeakeasyBase {
  @Metadata({ data: "json, name=symbol" })
  symbol?: string;

  @Metadata({ data: "json, name=timestamp" })
  timestamp?: Date;

  @Metadata({ data: "json, name=value" })
  value?: number;
}
