import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// NameMatchedOut
/** 
 * Classified matched names
**/
export class NameMatchedOut extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=matchStatus" })
  matchStatus?: string;

  @Metadata({ data: "json, name=score" })
  score?: number;

  @Metadata({ data: "json, name=script" })
  script?: string;
}
