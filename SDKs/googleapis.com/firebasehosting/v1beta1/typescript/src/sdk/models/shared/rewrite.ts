import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CloudRunRewrite } from "./cloudrunrewrite";


// Rewrite
/** 
 * A [`Rewrite`](https://firebase.google.com/docs/hosting/full-config#rewrites) specifies a URL pattern that, if matched to the request URL path, triggers Hosting to respond as if the service were given the specified destination URL.
**/
export class Rewrite extends SpeakeasyBase {
  @Metadata({ data: "json, name=dynamicLinks" })
  dynamicLinks?: boolean;

  @Metadata({ data: "json, name=function" })
  function?: string;

  @Metadata({ data: "json, name=functionRegion" })
  functionRegion?: string;

  @Metadata({ data: "json, name=glob" })
  glob?: string;

  @Metadata({ data: "json, name=path" })
  path?: string;

  @Metadata({ data: "json, name=regex" })
  regex?: string;

  @Metadata({ data: "json, name=run" })
  run?: CloudRunRewrite;
}
