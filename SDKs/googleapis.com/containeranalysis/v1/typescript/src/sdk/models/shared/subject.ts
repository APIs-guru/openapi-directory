import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Subject extends SpeakeasyBase {
  @Metadata({ data: "json, name=digest" })
  digest?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
