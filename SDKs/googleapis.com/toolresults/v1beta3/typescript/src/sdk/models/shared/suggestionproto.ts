import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SafeHtmlProto } from "./safehtmlproto";
import { RegionProto } from "./regionproto";


export enum SuggestionProtoPriorityEnum {
    UnknownPriority = "unknownPriority",
    Error = "error",
    Warning = "warning",
    Info = "info"
}


export class SuggestionProto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=helpUrl" })
  helpUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=longMessage" })
  longMessage?: SafeHtmlProto;

  @SpeakeasyMetadata({ data: "json, name=priority" })
  priority?: SuggestionProtoPriorityEnum;

  @SpeakeasyMetadata({ data: "json, name=pseudoResourceId" })
  pseudoResourceId?: string;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: RegionProto;

  @SpeakeasyMetadata({ data: "json, name=resourceName" })
  resourceName?: string;

  @SpeakeasyMetadata({ data: "json, name=screenId" })
  screenId?: string;

  @SpeakeasyMetadata({ data: "json, name=secondaryPriority" })
  secondaryPriority?: number;

  @SpeakeasyMetadata({ data: "json, name=shortMessage" })
  shortMessage?: SafeHtmlProto;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
