import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SafeHtmlProto } from "./safehtmlproto";
import { RegionProto } from "./regionproto";
import { SafeHtmlProto } from "./safehtmlproto";

export enum SuggestionProtoPriorityEnum {
    UnknownPriority = "unknownPriority"
,    Error = "error"
,    Warning = "warning"
,    Info = "info"
}


export class SuggestionProto extends SpeakeasyBase {
  @Metadata({ data: "json, name=helpUrl" })
  helpUrl?: string;

  @Metadata({ data: "json, name=longMessage" })
  longMessage?: SafeHtmlProto;

  @Metadata({ data: "json, name=priority" })
  priority?: SuggestionProtoPriorityEnum;

  @Metadata({ data: "json, name=pseudoResourceId" })
  pseudoResourceId?: string;

  @Metadata({ data: "json, name=region" })
  region?: RegionProto;

  @Metadata({ data: "json, name=resourceName" })
  resourceName?: string;

  @Metadata({ data: "json, name=screenId" })
  screenId?: string;

  @Metadata({ data: "json, name=secondaryPriority" })
  secondaryPriority?: number;

  @Metadata({ data: "json, name=shortMessage" })
  shortMessage?: SafeHtmlProto;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
