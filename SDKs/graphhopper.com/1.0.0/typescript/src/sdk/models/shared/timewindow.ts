import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TimeWindow extends SpeakeasyBase {
  @Metadata({ data: "json, name=earliest" })
  earliest?: number;

  @Metadata({ data: "json, name=latest" })
  latest?: number;
}
