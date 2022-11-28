import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ThirdPartyOnlyConfig
/** 
 * Settings for advertisers that use third-party ad servers only.
**/
export class ThirdPartyOnlyConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pixelOrderIdReportingEnabled" })
  pixelOrderIdReportingEnabled?: boolean;
}
