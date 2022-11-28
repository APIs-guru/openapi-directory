import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Redirect
/** 
 * A [`Redirect`](https://firebase.google.com/docs/hosting/full-config#redirects) specifies a URL pattern that, if matched to the request URL path, triggers Hosting to respond with a redirect to the specified destination path.
**/
export class Redirect extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=glob" })
  glob?: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=regex" })
  regex?: string;

  @SpeakeasyMetadata({ data: "json, name=statusCode" })
  statusCode?: number;
}
