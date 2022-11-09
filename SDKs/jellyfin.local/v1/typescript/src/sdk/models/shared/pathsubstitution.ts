import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PathSubstitution
/** 
 * Defines the MediaBrowser.Model.Configuration.PathSubstitution.
**/
export class PathSubstitution extends SpeakeasyBase {
  @Metadata({ data: "json, name=From" })
  from?: string;

  @Metadata({ data: "json, name=To" })
  to?: string;
}
