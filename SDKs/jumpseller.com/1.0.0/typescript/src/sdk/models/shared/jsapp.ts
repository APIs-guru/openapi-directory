import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class JsApp extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=element" })
  element?: string;

  @SpeakeasyMetadata({ data: "json, name=template" })
  template?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
