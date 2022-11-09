import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Redirect
/** 
 * A [`Redirect`](https://firebase.google.com/docs/hosting/full-config#redirects) specifies a URL pattern that, if matched to the request URL path, triggers Hosting to respond with a redirect to the specified destination path.
**/
export class Redirect extends SpeakeasyBase {
  @Metadata({ data: "json, name=glob" })
  glob?: string;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=regex" })
  regex?: string;

  @Metadata({ data: "json, name=statusCode" })
  statusCode?: number;
}
