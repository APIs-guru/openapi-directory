import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActionHookActionBody } from "./actionhookactionbody";
import { IFrameActionBody } from "./iframeactionbody";



export class TopLevelActions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=primary" })
  primary?: any;

  @SpeakeasyMetadata({ data: "json, name=secondary" })
  secondary: any[];

  @SpeakeasyMetadata({ data: "json, name=settings" })
  settings?: IFrameActionBody;
}
