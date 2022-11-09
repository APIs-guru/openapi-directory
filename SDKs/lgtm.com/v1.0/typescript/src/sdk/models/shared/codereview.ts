import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CodereviewLanguages } from "./codereviewlanguages";

export enum CodeReviewStatusEnum {
    Pending = "pending"
,    Failure = "failure"
,    Success = "success"
}


export class CodeReview extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=languages", elemType: shared.CodereviewLanguages })
  languages?: CodereviewLanguages[];

  @Metadata({ data: "json, name=results-url" })
  resultsUrl?: string;

  @Metadata({ data: "json, name=status" })
  status?: CodeReviewStatusEnum;

  @Metadata({ data: "json, name=status-message" })
  statusMessage?: string;
}
