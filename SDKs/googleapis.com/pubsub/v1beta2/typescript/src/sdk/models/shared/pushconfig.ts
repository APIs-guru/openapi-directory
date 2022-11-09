import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OidcToken } from "./oidctoken";


// PushConfig
/** 
 * Configuration for a push delivery endpoint.
**/
export class PushConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributes" })
  attributes?: Map<string, string>;

  @Metadata({ data: "json, name=oidcToken" })
  oidcToken?: OidcToken;

  @Metadata({ data: "json, name=pushEndpoint" })
  pushEndpoint?: string;
}
