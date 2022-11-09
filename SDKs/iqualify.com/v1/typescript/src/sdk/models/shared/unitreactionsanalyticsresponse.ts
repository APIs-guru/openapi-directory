import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UnitReactionsFeedback } from "./unitreactionsfeedback";


export class UnitReactionsAnalyticsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=feedback" })
  feedback?: UnitReactionsFeedback;

  @Metadata({ data: "json, name=pageId" })
  pageId?: boolean;
}
