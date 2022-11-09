import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Measurement extends SpeakeasyBase {
  @Metadata({ data: "json, name=timestamp" })
  timestamp?: Date;

  @Metadata({ data: "json, name=value" })
  value?: number;
}
