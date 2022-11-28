import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// HttpRouteCorsPolicy
/** 
 * The Specification for allowing client side cross-origin requests.
**/
export class HttpRouteCorsPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowCredentials" })
  allowCredentials?: boolean;

  @SpeakeasyMetadata({ data: "json, name=allowHeaders" })
  allowHeaders?: string[];

  @SpeakeasyMetadata({ data: "json, name=allowMethods" })
  allowMethods?: string[];

  @SpeakeasyMetadata({ data: "json, name=allowOriginRegexes" })
  allowOriginRegexes?: string[];

  @SpeakeasyMetadata({ data: "json, name=allowOrigins" })
  allowOrigins?: string[];

  @SpeakeasyMetadata({ data: "json, name=disabled" })
  disabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=exposeHeaders" })
  exposeHeaders?: string[];

  @SpeakeasyMetadata({ data: "json, name=maxAge" })
  maxAge?: string;
}
