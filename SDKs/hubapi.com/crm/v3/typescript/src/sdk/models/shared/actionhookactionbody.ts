import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ActionConfirmationBody } from "./actionconfirmationbody";

export enum ActionHookActionBodyHttpMethodEnum {
    Connect = "CONNECT"
,    Delete = "DELETE"
,    Get = "GET"
,    Head = "HEAD"
,    Options = "OPTIONS"
,    Patch = "PATCH"
,    Post = "POST"
,    Put = "PUT"
,    Trace = "TRACE"
}

export enum ActionHookActionBodyTypeEnum {
    ActionHook = "ACTION_HOOK"
}


export class ActionHookActionBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=confirmation" })
  confirmation?: ActionConfirmationBody;

  @Metadata({ data: "json, name=httpMethod" })
  httpMethod: ActionHookActionBodyHttpMethodEnum;

  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=propertyNamesIncluded" })
  propertyNamesIncluded: string[];

  @Metadata({ data: "json, name=type" })
  type: ActionHookActionBodyTypeEnum;

  @Metadata({ data: "json, name=url" })
  url: string;
}
