import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UnitReactionsFeedback } from "./unitreactionsfeedback";



export class UnitReactionsAnalyticsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=feedback" })
  feedback?: UnitReactionsFeedback;

  @SpeakeasyMetadata({ data: "json, name=pageId" })
  pageId?: boolean;
}
