import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Url extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authority" })
  authority?: string;

  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=defaultPort" })
  defaultPort?: number;

  @SpeakeasyMetadata({ data: "json, name=file" })
  file?: string;

  @SpeakeasyMetadata({ data: "json, name=host" })
  host?: string;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=port" })
  port?: number;

  @SpeakeasyMetadata({ data: "json, name=protocol" })
  protocol?: string;

  @SpeakeasyMetadata({ data: "json, name=query" })
  query?: string;

  @SpeakeasyMetadata({ data: "json, name=ref" })
  ref?: string;

  @SpeakeasyMetadata({ data: "json, name=userInfo" })
  userInfo?: string;
}
