import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class JsApp extends SpeakeasyBase {
  @Metadata({ data: "json, name=element" })
  element?: string;

  @Metadata({ data: "json, name=template" })
  template?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
