import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TimeWindowBreak extends SpeakeasyBase {
  @Metadata({ data: "json, name=duration" })
  duration: number;

  @Metadata({ data: "json, name=earliest" })
  earliest: number;

  @Metadata({ data: "json, name=latest" })
  latest: number;
}
