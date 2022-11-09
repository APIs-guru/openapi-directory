import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AccessDeniedPageSettings
/** 
 * Custom content configuration for access denied page. IAP allows customers to define a custom URI to use as the error page when access is denied to users. If IAP prevents access to this page, the default IAP error page will be displayed instead.
**/
export class AccessDeniedPageSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessDeniedPageUri" })
  accessDeniedPageUri?: string;

  @Metadata({ data: "json, name=generateTroubleshootingUri" })
  generateTroubleshootingUri?: boolean;

  @Metadata({ data: "json, name=remediationTokenGenerationEnabled" })
  remediationTokenGenerationEnabled?: boolean;
}
