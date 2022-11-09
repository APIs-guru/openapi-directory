import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Header
/** 
 * A [`Header`](https://firebase.google.com/docs/hosting/full-config#headers) specifies a URL pattern that, if matched to the request URL path, triggers Hosting to apply the specified custom response headers.
**/
export class Header extends SpeakeasyBase {
  @Metadata({ data: "json, name=glob" })
  glob?: string;

  @Metadata({ data: "json, name=headers" })
  headers?: Map<string, string>;

  @Metadata({ data: "json, name=regex" })
  regex?: string;
}
