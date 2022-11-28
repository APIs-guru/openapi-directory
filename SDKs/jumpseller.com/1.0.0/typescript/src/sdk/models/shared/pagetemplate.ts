import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PageTemplate
/** 
 * Template of the Page
**/
export class PageTemplate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
