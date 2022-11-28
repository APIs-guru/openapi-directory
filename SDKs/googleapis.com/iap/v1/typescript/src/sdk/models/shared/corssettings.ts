import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CorsSettings
/** 
 * Allows customers to configure HTTP request paths that'll allow HTTP OPTIONS call to bypass authentication and authorization.
**/
export class CorsSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowHttpOptions" })
  allowHttpOptions?: boolean;
}
