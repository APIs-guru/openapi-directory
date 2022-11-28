import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodereviewAlerts } from "./codereviewalerts";


export enum CodereviewLanguagesStatusEnum {
    Pending = "pending",
    Failure = "failure",
    Success = "success"
}


export class CodereviewLanguages extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alerts", elemType: CodereviewAlerts })
  alerts?: CodereviewAlerts[];

  @SpeakeasyMetadata({ data: "json, name=fixed" })
  fixed?: number;

  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "json, name=new" })
  new?: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: CodereviewLanguagesStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=status-message" })
  statusMessage?: string;
}
