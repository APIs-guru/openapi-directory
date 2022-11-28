import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CorsSettings
/** 
 * The configuration for cors support
**/
export class CorsSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowCredentials" })
  allowCredentials: boolean;

  @SpeakeasyMetadata({ data: "json, name=allowHeaders" })
  allowHeaders: string[];

  @SpeakeasyMetadata({ data: "json, name=allowMethods" })
  allowMethods: string[];

  @SpeakeasyMetadata({ data: "json, name=allowOrigin" })
  allowOrigin: string;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled: boolean;

  @SpeakeasyMetadata({ data: "json, name=excludedPatterns" })
  excludedPatterns: string[];

  @SpeakeasyMetadata({ data: "json, name=exposeHeaders" })
  exposeHeaders: string[];

  @SpeakeasyMetadata({ data: "json, name=maxAge" })
  maxAge: number;
}
