import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SignedData
/** 
 * The wrapper message of any data and its signature.
**/
export class SignedData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: string;

  @SpeakeasyMetadata({ data: "json, name=signature" })
  signature?: string;
}
