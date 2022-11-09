import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ActionHookActionBody } from "./actionhookactionbody";
import { IFrameActionBody } from "./iframeactionbody";
import { ActionHookActionBody } from "./actionhookactionbody";
import { IFrameActionBody } from "./iframeactionbody";
import { IFrameActionBody } from "./iframeactionbody";


export class TopLevelActions extends SpeakeasyBase {
  @Metadata({ data: "json, name=primary" })
  primary?: any;

  @Metadata({ data: "json, name=secondary" })
  secondary: any[];

  @Metadata({ data: "json, name=settings" })
  settings?: IFrameActionBody;
}
