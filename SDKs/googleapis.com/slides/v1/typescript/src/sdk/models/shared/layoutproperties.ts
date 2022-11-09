import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LayoutProperties
/** 
 * The properties of Page are only relevant for pages with page_type LAYOUT.
**/
export class LayoutProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=masterObjectId" })
  masterObjectId?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
