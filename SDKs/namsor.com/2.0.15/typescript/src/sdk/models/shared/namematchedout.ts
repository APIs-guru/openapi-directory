import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NameMatchedOut
/** 
 * Classified matched names
**/
export class NameMatchedOut extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=matchStatus" })
  matchStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=score" })
  score?: number;

  @SpeakeasyMetadata({ data: "json, name=script" })
  script?: string;
}
