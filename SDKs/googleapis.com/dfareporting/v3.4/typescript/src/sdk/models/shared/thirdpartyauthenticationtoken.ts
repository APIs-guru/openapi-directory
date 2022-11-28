import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ThirdPartyAuthenticationToken
/** 
 * Third Party Authentication Token
**/
export class ThirdPartyAuthenticationToken extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
