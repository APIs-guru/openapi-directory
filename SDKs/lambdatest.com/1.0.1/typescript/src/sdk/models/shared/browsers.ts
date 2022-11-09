import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Browsers extends SpeakeasyBase {
  @Metadata({ data: "json, name=chrome" })
  chrome?: string[];

  @Metadata({ data: "json, name=firefox" })
  firefox?: string[];

  @Metadata({ data: "json, name=opera" })
  opera?: string[];
}
