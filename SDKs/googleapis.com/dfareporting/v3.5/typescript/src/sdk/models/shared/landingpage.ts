import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeepLink } from "./deeplink";



// LandingPage
/** 
 * Contains information about where a user's browser is taken after the user clicks an ad.
**/
export class LandingPage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=advertiserId" })
  advertiserId?: string;

  @SpeakeasyMetadata({ data: "json, name=archived" })
  archived?: boolean;

  @SpeakeasyMetadata({ data: "json, name=deepLinks", elemType: DeepLink })
  deepLinks?: DeepLink[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
