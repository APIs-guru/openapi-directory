import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// QuickConnectDto
/** 
 * The quick connect request body.
**/
export class QuickConnectDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Token" })
  token: string;
}
