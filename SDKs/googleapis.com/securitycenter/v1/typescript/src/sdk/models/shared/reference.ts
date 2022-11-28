import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Reference
/** 
 * Additional Links
**/
export class Reference extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
