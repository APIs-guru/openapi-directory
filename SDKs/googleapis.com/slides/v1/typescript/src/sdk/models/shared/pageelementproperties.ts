import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Size } from "./size";
import { AffineTransform } from "./affinetransform";


// PageElementProperties
/** 
 * Common properties for a page element. Note: When you initially create a PageElement, the API may modify the values of both `size` and `transform`, but the visual size will be unchanged.
**/
export class PageElementProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=pageObjectId" })
  pageObjectId?: string;

  @Metadata({ data: "json, name=size" })
  size?: Size;

  @Metadata({ data: "json, name=transform" })
  transform?: AffineTransform;
}
