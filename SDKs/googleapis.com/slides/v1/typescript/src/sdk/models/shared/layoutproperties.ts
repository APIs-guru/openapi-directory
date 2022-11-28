import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LayoutProperties
/** 
 * The properties of Page are only relevant for pages with page_type LAYOUT.
**/
export class LayoutProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=masterObjectId" })
  masterObjectId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
