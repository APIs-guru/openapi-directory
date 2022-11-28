import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRunV2HttpHeader
/** 
 * HTTPHeader describes a custom header to be used in HTTP probes
**/
export class GoogleCloudRunV2HttpHeader extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
