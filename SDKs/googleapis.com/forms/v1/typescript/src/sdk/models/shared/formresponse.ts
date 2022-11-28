import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Answer } from "./answer";



// FormResponse
/** 
 * A form response.
**/
export class FormResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=answers", elemType: Answer })
  answers?: Map<string, Answer>;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=formId" })
  formId?: string;

  @SpeakeasyMetadata({ data: "json, name=lastSubmittedTime" })
  lastSubmittedTime?: string;

  @SpeakeasyMetadata({ data: "json, name=respondentEmail" })
  respondentEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=responseId" })
  responseId?: string;

  @SpeakeasyMetadata({ data: "json, name=totalScore" })
  totalScore?: number;
}
