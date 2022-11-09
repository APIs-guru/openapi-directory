import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IosAppInfo
/** 
 * iOS app information
**/
export class IosAppInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;
}
