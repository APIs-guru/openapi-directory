import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ContentCategory
/** 
 * Organizes placements according to the contents of their associated webpages.
**/
export class ContentCategory extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
