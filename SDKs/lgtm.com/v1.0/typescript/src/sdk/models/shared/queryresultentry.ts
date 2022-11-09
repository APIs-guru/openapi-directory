import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class QueryResultEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=file" })
  file?: string;

  @Metadata({ data: "json, name=line" })
  line?: number;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
