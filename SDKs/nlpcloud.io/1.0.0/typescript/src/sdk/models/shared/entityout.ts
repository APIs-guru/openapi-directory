import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EntityOut extends SpeakeasyBase {
  @Metadata({ data: "json, name=end" })
  end: number;

  @Metadata({ data: "json, name=start" })
  start: number;

  @Metadata({ data: "json, name=text" })
  text: string;

  @Metadata({ data: "json, name=type" })
  type: string;
}
