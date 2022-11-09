import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MobileApp } from "./mobileapp";


// DeepLink
/** 
 * Contains information about a landing page deep link.
**/
export class DeepLink extends SpeakeasyBase {
  @Metadata({ data: "json, name=appUrl" })
  appUrl?: string;

  @Metadata({ data: "json, name=fallbackUrl" })
  fallbackUrl?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=mobileApp" })
  mobileApp?: MobileApp;

  @Metadata({ data: "json, name=remarketingListIds" })
  remarketingListIds?: string[];
}
