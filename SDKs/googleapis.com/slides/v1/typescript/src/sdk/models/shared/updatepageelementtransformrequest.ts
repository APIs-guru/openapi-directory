import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AffineTransform } from "./affinetransform";


export enum UpdatePageElementTransformRequestApplyModeEnum {
    ApplyModeUnspecified = "APPLY_MODE_UNSPECIFIED",
    Relative = "RELATIVE",
    Absolute = "ABSOLUTE"
}


// UpdatePageElementTransformRequest
/** 
 * Updates the transform of a page element. Updating the transform of a group will change the absolute transform of the page elements in that group, which can change their visual appearance. See the documentation for PageElement.transform for more details.
**/
export class UpdatePageElementTransformRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applyMode" })
  applyMode?: UpdatePageElementTransformRequestApplyModeEnum;

  @SpeakeasyMetadata({ data: "json, name=objectId" })
  objectId?: string;

  @SpeakeasyMetadata({ data: "json, name=transform" })
  transform?: AffineTransform;
}
