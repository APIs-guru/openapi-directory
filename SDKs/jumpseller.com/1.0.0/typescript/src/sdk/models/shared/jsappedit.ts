import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JsApp } from "./jsapp";



export class JsAppEdit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=app" })
  app?: JsApp;
}
