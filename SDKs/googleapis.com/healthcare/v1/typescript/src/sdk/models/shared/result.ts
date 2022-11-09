import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ConsentEvaluation } from "./consentevaluation";


// Result
/** 
 * The consent evaluation result for a single `data_id`.
**/
export class Result extends SpeakeasyBase {
  @Metadata({ data: "json, name=consentDetails", elemType: shared.ConsentEvaluation })
  consentDetails?: Map<string, ConsentEvaluation>;

  @Metadata({ data: "json, name=consented" })
  consented?: boolean;

  @Metadata({ data: "json, name=dataId" })
  dataId?: string;
}
