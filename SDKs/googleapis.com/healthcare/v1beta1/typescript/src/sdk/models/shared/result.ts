import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConsentEvaluation } from "./consentevaluation";



// Result
/** 
 * The consent evaluation result for a single `data_id`.
**/
export class Result extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=consentDetails", elemType: ConsentEvaluation })
  consentDetails?: Map<string, ConsentEvaluation>;

  @SpeakeasyMetadata({ data: "json, name=consented" })
  consented?: boolean;

  @SpeakeasyMetadata({ data: "json, name=dataId" })
  dataId?: string;
}
