import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SiteVerificationWebResourceResourceSite
/** 
 * The address and type of a site that is verified or will be verified.
**/
export class SiteVerificationWebResourceResourceSite extends SpeakeasyBase {
  @Metadata({ data: "json, name=identifier" })
  identifier?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class SiteVerificationWebResourceResource extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=owners" })
  owners?: string[];

  @Metadata({ data: "json, name=site" })
  site?: SiteVerificationWebResourceResourceSite;
}
