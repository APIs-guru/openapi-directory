import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Url extends SpeakeasyBase {
  @Metadata({ data: "json, name=authority" })
  authority?: string;

  @Metadata({ data: "json, name=content" })
  content?: Map<string, any>;

  @Metadata({ data: "json, name=defaultPort" })
  defaultPort?: number;

  @Metadata({ data: "json, name=file" })
  file?: string;

  @Metadata({ data: "json, name=host" })
  host?: string;

  @Metadata({ data: "json, name=path" })
  path?: string;

  @Metadata({ data: "json, name=port" })
  port?: number;

  @Metadata({ data: "json, name=protocol" })
  protocol?: string;

  @Metadata({ data: "json, name=query" })
  query?: string;

  @Metadata({ data: "json, name=ref" })
  ref?: string;

  @Metadata({ data: "json, name=userInfo" })
  userInfo?: string;
}
