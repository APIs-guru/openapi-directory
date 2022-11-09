import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Answer } from "./answer";


// FormResponse
/** 
 * A form response.
**/
export class FormResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=answers", elemType: shared.Answer })
  answers?: Map<string, Answer>;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=formId" })
  formId?: string;

  @Metadata({ data: "json, name=lastSubmittedTime" })
  lastSubmittedTime?: string;

  @Metadata({ data: "json, name=respondentEmail" })
  respondentEmail?: string;

  @Metadata({ data: "json, name=responseId" })
  responseId?: string;

  @Metadata({ data: "json, name=totalScore" })
  totalScore?: number;
}
