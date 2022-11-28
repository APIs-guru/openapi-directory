import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Response
/** 
 * This message defines attributes for a typical network response. It generally models semantics of an HTTP response.
**/
export class Response extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=backendLatency" })
  backendLatency?: string;

  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=headers" })
  headers?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: string;

  @SpeakeasyMetadata({ data: "json, name=time" })
  time?: string;
}
