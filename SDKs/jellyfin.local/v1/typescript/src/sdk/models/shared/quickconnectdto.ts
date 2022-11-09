import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// QuickConnectDto
/** 
 * The quick connect request body.
**/
export class QuickConnectDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=Token" })
  token: string;
}
