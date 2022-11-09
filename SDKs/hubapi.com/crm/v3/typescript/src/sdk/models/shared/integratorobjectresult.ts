import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ActionHookActionBody } from "./actionhookactionbody";
import { IFrameActionBody } from "./iframeactionbody";
import { ObjectToken } from "./objecttoken";


export class IntegratorObjectResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=actions" })
  actions: any[];

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=linkUrl" })
  linkUrl?: string;

  @Metadata({ data: "json, name=title" })
  title: string;

  @Metadata({ data: "json, name=tokens", elemType: shared.ObjectToken })
  tokens: ObjectToken[];
}
