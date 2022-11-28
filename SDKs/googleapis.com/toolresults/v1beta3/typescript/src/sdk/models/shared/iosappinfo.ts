import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IosAppInfo
/** 
 * iOS app information
**/
export class IosAppInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
