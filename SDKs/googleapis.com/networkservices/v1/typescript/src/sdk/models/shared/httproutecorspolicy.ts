import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// HttpRouteCorsPolicy
/** 
 * The Specification for allowing client side cross-origin requests.
**/
export class HttpRouteCorsPolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowCredentials" })
  allowCredentials?: boolean;

  @Metadata({ data: "json, name=allowHeaders" })
  allowHeaders?: string[];

  @Metadata({ data: "json, name=allowMethods" })
  allowMethods?: string[];

  @Metadata({ data: "json, name=allowOriginRegexes" })
  allowOriginRegexes?: string[];

  @Metadata({ data: "json, name=allowOrigins" })
  allowOrigins?: string[];

  @Metadata({ data: "json, name=disabled" })
  disabled?: boolean;

  @Metadata({ data: "json, name=exposeHeaders" })
  exposeHeaders?: string[];

  @Metadata({ data: "json, name=maxAge" })
  maxAge?: string;
}
