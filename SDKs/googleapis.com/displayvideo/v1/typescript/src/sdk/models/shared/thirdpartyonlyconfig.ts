import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ThirdPartyOnlyConfig
/** 
 * Settings for advertisers that use third-party ad servers only.
**/
export class ThirdPartyOnlyConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=pixelOrderIdReportingEnabled" })
  pixelOrderIdReportingEnabled?: boolean;
}
