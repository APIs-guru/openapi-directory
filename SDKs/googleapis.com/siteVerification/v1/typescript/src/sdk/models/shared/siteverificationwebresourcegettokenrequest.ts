import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SiteVerificationWebResourceGettokenRequestSite
/** 
 * The site for which a verification token will be generated.
**/
export class SiteVerificationWebResourceGettokenRequestSite extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=identifier" })
  identifier?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class SiteVerificationWebResourceGettokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=site" })
  site?: SiteVerificationWebResourceGettokenRequestSite;

  @SpeakeasyMetadata({ data: "json, name=verificationMethod" })
  verificationMethod?: string;
}
