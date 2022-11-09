import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { JsApp } from "./jsapp";


export class JsAppEdit extends SpeakeasyBase {
  @Metadata({ data: "json, name=app" })
  app?: JsApp;
}
