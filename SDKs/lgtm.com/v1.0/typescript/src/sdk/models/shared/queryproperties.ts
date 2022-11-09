import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class QueryProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=severity" })
  severity?: string;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];
}
