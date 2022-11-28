import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SiteVerificationWebResourceResourceSite
/** 
 * The address and type of a site that is verified or will be verified.
**/
export class SiteVerificationWebResourceResourceSite extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=identifier" })
  identifier?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class SiteVerificationWebResourceResource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=owners" })
  owners?: string[];

  @SpeakeasyMetadata({ data: "json, name=site" })
  site?: SiteVerificationWebResourceResourceSite;
}
