import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class LinerPerforation extends SpeakeasyBase {
  @Metadata({ data: "json, name=end" })
  end: string;

  @Metadata({ data: "json, name=start" })
  start: string;
}
