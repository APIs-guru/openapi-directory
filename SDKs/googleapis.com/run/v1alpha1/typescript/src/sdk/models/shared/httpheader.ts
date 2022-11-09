import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// HttpHeader
/** 
 * Not supported by Cloud Run HTTPHeader describes a custom header to be used in HTTP probes
**/
export class HttpHeader extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
