import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodereviewLanguages } from "./codereviewlanguages";


export enum CodeReviewStatusEnum {
    Pending = "pending",
    Failure = "failure",
    Success = "success"
}


export class CodeReview extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=languages", elemType: CodereviewLanguages })
  languages?: CodereviewLanguages[];

  @SpeakeasyMetadata({ data: "json, name=results-url" })
  resultsUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: CodeReviewStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=status-message" })
  statusMessage?: string;
}
