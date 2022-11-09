import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Presentation } from "./presentation";
import { SearchEngineOptimization } from "./searchengineoptimization";
import { Shipping } from "./shipping";

export enum OnlinePropertiesStatusEnum {
    Active = "ACTIVE"
,    Hidden = "HIDDEN"
}


export class OnlineProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=presentation" })
  presentation?: Presentation;

  @Metadata({ data: "json, name=seo" })
  seo?: SearchEngineOptimization;

  @Metadata({ data: "json, name=shipping" })
  shipping?: Shipping;

  @Metadata({ data: "json, name=status" })
  status: OnlinePropertiesStatusEnum;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
