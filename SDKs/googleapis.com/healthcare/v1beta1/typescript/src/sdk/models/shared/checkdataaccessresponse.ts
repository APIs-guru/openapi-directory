import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConsentEvaluation } from "./consentevaluation";



// CheckDataAccessResponse
/** 
 * Checks if a particular data_id of a User data mapping in the given consent store is consented for a given use.
**/
export class CheckDataAccessResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=consentDetails", elemType: ConsentEvaluation })
  consentDetails?: Map<string, ConsentEvaluation>;

  @SpeakeasyMetadata({ data: "json, name=consented" })
  consented?: boolean;
}
