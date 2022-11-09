import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CorsSettings
/** 
 * The configuration for cors support
**/
export class CorsSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowCredentials" })
  allowCredentials: boolean;

  @Metadata({ data: "json, name=allowHeaders" })
  allowHeaders: string[];

  @Metadata({ data: "json, name=allowMethods" })
  allowMethods: string[];

  @Metadata({ data: "json, name=allowOrigin" })
  allowOrigin: string;

  @Metadata({ data: "json, name=enabled" })
  enabled: boolean;

  @Metadata({ data: "json, name=excludedPatterns" })
  excludedPatterns: string[];

  @Metadata({ data: "json, name=exposeHeaders" })
  exposeHeaders: string[];

  @Metadata({ data: "json, name=maxAge" })
  maxAge: number;
}
