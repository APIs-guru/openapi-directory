import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OidcToken } from "./oidctoken";



// PushConfig
/** 
 * Configuration for a push delivery endpoint.
**/
export class PushConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=oidcToken" })
  oidcToken?: OidcToken;

  @SpeakeasyMetadata({ data: "json, name=pushEndpoint" })
  pushEndpoint?: string;
}
