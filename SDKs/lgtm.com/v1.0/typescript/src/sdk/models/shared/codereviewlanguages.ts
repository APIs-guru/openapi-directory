import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CodereviewAlerts } from "./codereviewalerts";

export enum CodereviewLanguagesStatusEnum {
    Pending = "pending"
,    Failure = "failure"
,    Success = "success"
}


export class CodereviewLanguages extends SpeakeasyBase {
  @Metadata({ data: "json, name=alerts", elemType: shared.CodereviewAlerts })
  alerts?: CodereviewAlerts[];

  @Metadata({ data: "json, name=fixed" })
  fixed?: number;

  @Metadata({ data: "json, name=language" })
  language?: string;

  @Metadata({ data: "json, name=new" })
  new?: number;

  @Metadata({ data: "json, name=status" })
  status?: CodereviewLanguagesStatusEnum;

  @Metadata({ data: "json, name=status-message" })
  statusMessage?: string;
}
