import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Pipe extends SpeakeasyBase {
  @Metadata({ data: "json, name=mode" })
  mode?: number;

  @Metadata({ data: "json, name=path" })
  path?: string;
}
