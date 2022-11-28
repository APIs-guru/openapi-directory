import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PathSubstitution
/** 
 * Defines the MediaBrowser.Model.Configuration.PathSubstitution.
**/
export class PathSubstitution extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=From" })
  from?: string;

  @SpeakeasyMetadata({ data: "json, name=To" })
  to?: string;
}
