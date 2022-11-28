import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ContentCategory
/** 
 * Organizes placements according to the contents of their associated webpages.
**/
export class ContentCategory extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
