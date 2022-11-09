import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SiteVerificationWebResourceGettokenRequestSite
/** 
 * The site for which a verification token will be generated.
**/
export class SiteVerificationWebResourceGettokenRequestSite extends SpeakeasyBase {
  @Metadata({ data: "json, name=identifier" })
  identifier?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class SiteVerificationWebResourceGettokenRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=site" })
  site?: SiteVerificationWebResourceGettokenRequestSite;

  @Metadata({ data: "json, name=verificationMethod" })
  verificationMethod?: string;
}
