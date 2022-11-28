import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Version
/** 
 * Each Version is owned by a Channel. A Version only displays the Version number (e.g. 84.0.4147.38). A Version owns a collection of releases.
**/
export class Version extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
