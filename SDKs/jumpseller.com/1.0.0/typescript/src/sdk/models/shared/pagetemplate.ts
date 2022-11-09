import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PageTemplate
/** 
 * Template of the Page
**/
export class PageTemplate extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
