import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MasterProperties
/** 
 * The properties of Page that are only relevant for pages with page_type MASTER.
**/
export class MasterProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;
}
