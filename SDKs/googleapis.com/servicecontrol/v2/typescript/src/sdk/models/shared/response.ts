import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Response
/** 
 * This message defines attributes for a typical network response. It generally models semantics of an HTTP response.
**/
export class Response extends SpeakeasyBase {
  @Metadata({ data: "json, name=backendLatency" })
  backendLatency?: string;

  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=headers" })
  headers?: Map<string, string>;

  @Metadata({ data: "json, name=size" })
  size?: string;

  @Metadata({ data: "json, name=time" })
  time?: string;
}
