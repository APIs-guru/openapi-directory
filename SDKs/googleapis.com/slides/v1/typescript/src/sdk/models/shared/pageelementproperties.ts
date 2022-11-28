import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Size } from "./size";
import { AffineTransform } from "./affinetransform";



// PageElementProperties
/** 
 * Common properties for a page element. Note: When you initially create a PageElement, the API may modify the values of both `size` and `transform`, but the visual size will be unchanged.
**/
export class PageElementProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pageObjectId" })
  pageObjectId?: string;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: Size;

  @SpeakeasyMetadata({ data: "json, name=transform" })
  transform?: AffineTransform;
}
