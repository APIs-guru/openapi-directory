import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MasterProperties
/** 
 * The properties of Page that are only relevant for pages with page_type MASTER.
**/
export class MasterProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;
}
