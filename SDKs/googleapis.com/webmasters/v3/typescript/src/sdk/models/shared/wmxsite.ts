import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// WmxSite
/** 
 * Contains permission level information about a Search Console site. For more information, see  Permissions in Search Console.
**/
export class WmxSite extends SpeakeasyBase {
  @Metadata({ data: "json, name=permissionLevel" })
  permissionLevel?: string;

  @Metadata({ data: "json, name=siteUrl" })
  siteUrl?: string;
}
