import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Reference
/** 
 * Additional Links
**/
export class Reference extends SpeakeasyBase {
  @Metadata({ data: "json, name=source" })
  source?: string;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
