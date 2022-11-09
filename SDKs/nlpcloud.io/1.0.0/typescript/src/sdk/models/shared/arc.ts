import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Arc extends SpeakeasyBase {
  @Metadata({ data: "json, name=dir" })
  dir: string;

  @Metadata({ data: "json, name=end" })
  end: number;

  @Metadata({ data: "json, name=label" })
  label: string;

  @Metadata({ data: "json, name=start" })
  start: number;

  @Metadata({ data: "json, name=text" })
  text: string;
}
