import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TokenPayloadExternal } from "./tokenpayloadexternal";


// DecodeIntegrityTokenResponse
/** 
 * Response containing the decoded integrity payload.
**/
export class DecodeIntegrityTokenResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=tokenPayloadExternal" })
  tokenPayloadExternal?: TokenPayloadExternal;
}
