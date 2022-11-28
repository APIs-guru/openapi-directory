import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// HttpHeader
/** 
 * HTTPHeader describes a custom header to be used in HTTP probes
**/
export class HttpHeader extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
