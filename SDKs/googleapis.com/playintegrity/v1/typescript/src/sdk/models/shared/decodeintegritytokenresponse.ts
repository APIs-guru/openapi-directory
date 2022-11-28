import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TokenPayloadExternal } from "./tokenpayloadexternal";



// DecodeIntegrityTokenResponse
/** 
 * Response containing the decoded integrity payload.
**/
export class DecodeIntegrityTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=tokenPayloadExternal" })
  tokenPayloadExternal?: TokenPayloadExternal;
}
