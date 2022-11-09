import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ThirdPartyAuthenticationToken
/** 
 * Third Party Authentication Token
**/
export class ThirdPartyAuthenticationToken extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
