import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// WmxSite
/** 
 * Contains permission level information about a Search Console site. For more information, see  Permissions in Search Console.
**/
export class WmxSite extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=permissionLevel" })
  permissionLevel?: string;

  @SpeakeasyMetadata({ data: "json, name=siteUrl" })
  siteUrl?: string;
}
