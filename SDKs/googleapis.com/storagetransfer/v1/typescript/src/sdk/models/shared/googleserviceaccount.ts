import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleServiceAccount
/** 
 * Google service account
**/
export class GoogleServiceAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountEmail" })
  accountEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=subjectId" })
  subjectId?: string;
}
