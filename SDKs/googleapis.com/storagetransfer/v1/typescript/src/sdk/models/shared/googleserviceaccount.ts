import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleServiceAccount
/** 
 * Google service account
**/
export class GoogleServiceAccount extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountEmail" })
  accountEmail?: string;

  @Metadata({ data: "json, name=subjectId" })
  subjectId?: string;
}
