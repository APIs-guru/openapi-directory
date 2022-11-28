import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActionConfirmationBody } from "./actionconfirmationbody";


export enum ActionHookActionBodyHttpMethodEnum {
    Connect = "CONNECT",
    Delete = "DELETE",
    Get = "GET",
    Head = "HEAD",
    Options = "OPTIONS",
    Patch = "PATCH",
    Post = "POST",
    Put = "PUT",
    Trace = "TRACE"
}

export enum ActionHookActionBodyTypeEnum {
    ActionHook = "ACTION_HOOK"
}


export class ActionHookActionBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=confirmation" })
  confirmation?: ActionConfirmationBody;

  @SpeakeasyMetadata({ data: "json, name=httpMethod" })
  httpMethod: ActionHookActionBodyHttpMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=propertyNamesIncluded" })
  propertyNamesIncluded: string[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: ActionHookActionBodyTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}
