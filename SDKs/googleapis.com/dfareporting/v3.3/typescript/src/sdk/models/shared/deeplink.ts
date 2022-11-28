import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MobileApp } from "./mobileapp";



// DeepLink
/** 
 * Contains information about a landing page deep link.
**/
export class DeepLink extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appUrl" })
  appUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=fallbackUrl" })
  fallbackUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=mobileApp" })
  mobileApp?: MobileApp;

  @SpeakeasyMetadata({ data: "json, name=remarketingListIds" })
  remarketingListIds?: string[];
}
