import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Auth } from "./auth";


// Request
/** 
 * This message defines attributes for an HTTP request. If the actual request is not an HTTP request, the runtime system should try to map the actual request to an equivalent HTTP request.
**/
export class Request extends SpeakeasyBase {
  @Metadata({ data: "json, name=auth" })
  auth?: Auth;

  @Metadata({ data: "json, name=headers" })
  headers?: Map<string, string>;

  @Metadata({ data: "json, name=host" })
  host?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=method" })
  method?: string;

  @Metadata({ data: "json, name=path" })
  path?: string;

  @Metadata({ data: "json, name=protocol" })
  protocol?: string;

  @Metadata({ data: "json, name=query" })
  query?: string;

  @Metadata({ data: "json, name=reason" })
  reason?: string;

  @Metadata({ data: "json, name=scheme" })
  scheme?: string;

  @Metadata({ data: "json, name=size" })
  size?: string;

  @Metadata({ data: "json, name=time" })
  time?: string;
}
