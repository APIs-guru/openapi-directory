import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CloudRunRewrite } from "./cloudrunrewrite";



// Rewrite
/** 
 * A [`Rewrite`](https://firebase.google.com/docs/hosting/full-config#rewrites) specifies a URL pattern that, if matched to the request URL path, triggers Hosting to respond as if the service were given the specified destination URL.
**/
export class Rewrite extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dynamicLinks" })
  dynamicLinks?: boolean;

  @SpeakeasyMetadata({ data: "json, name=function" })
  function?: string;

  @SpeakeasyMetadata({ data: "json, name=functionRegion" })
  functionRegion?: string;

  @SpeakeasyMetadata({ data: "json, name=glob" })
  glob?: string;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=regex" })
  regex?: string;

  @SpeakeasyMetadata({ data: "json, name=run" })
  run?: CloudRunRewrite;
}
