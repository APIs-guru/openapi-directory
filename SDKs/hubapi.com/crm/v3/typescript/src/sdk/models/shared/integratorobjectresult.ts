import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActionHookActionBody } from "./actionhookactionbody";
import { IFrameActionBody } from "./iframeactionbody";
import { ObjectToken } from "./objecttoken";



export class IntegratorObjectResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actions" })
  actions: any[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=linkUrl" })
  linkUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;

  @SpeakeasyMetadata({ data: "json, name=tokens", elemType: ObjectToken })
  tokens: ObjectToken[];
}
