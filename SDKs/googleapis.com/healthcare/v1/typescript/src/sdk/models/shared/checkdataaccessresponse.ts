import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ConsentEvaluation } from "./consentevaluation";


// CheckDataAccessResponse
/** 
 * Checks if a particular data_id of a User data mapping in the given consent store is consented for a given use.
**/
export class CheckDataAccessResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=consentDetails", elemType: shared.ConsentEvaluation })
  consentDetails?: Map<string, ConsentEvaluation>;

  @Metadata({ data: "json, name=consented" })
  consented?: boolean;
}
