import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Presentation } from "./presentation";
import { SearchEngineOptimization } from "./searchengineoptimization";
import { Shipping } from "./shipping";


export enum OnlinePropertiesStatusEnum {
    Active = "ACTIVE",
    Hidden = "HIDDEN"
}


export class OnlineProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=presentation" })
  presentation?: Presentation;

  @SpeakeasyMetadata({ data: "json, name=seo" })
  seo?: SearchEngineOptimization;

  @SpeakeasyMetadata({ data: "json, name=shipping" })
  shipping?: Shipping;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: OnlinePropertiesStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
