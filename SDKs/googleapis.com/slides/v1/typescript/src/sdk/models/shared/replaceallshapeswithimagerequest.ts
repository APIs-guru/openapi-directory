import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SubstringMatchCriteria } from "./substringmatchcriteria";


export enum ReplaceAllShapesWithImageRequestImageReplaceMethodEnum {
    ImageReplaceMethodUnspecified = "IMAGE_REPLACE_METHOD_UNSPECIFIED",
    CenterInside = "CENTER_INSIDE",
    CenterCrop = "CENTER_CROP"
}

export enum ReplaceAllShapesWithImageRequestReplaceMethodEnum {
    CenterInside = "CENTER_INSIDE",
    CenterCrop = "CENTER_CROP"
}


// ReplaceAllShapesWithImageRequest
/** 
 * Replaces all shapes that match the given criteria with the provided image. The images replacing the shapes are rectangular after being inserted into the presentation and do not take on the forms of the shapes.
**/
export class ReplaceAllShapesWithImageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=containsText" })
  containsText?: SubstringMatchCriteria;

  @SpeakeasyMetadata({ data: "json, name=imageReplaceMethod" })
  imageReplaceMethod?: ReplaceAllShapesWithImageRequestImageReplaceMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=imageUrl" })
  imageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=pageObjectIds" })
  pageObjectIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=replaceMethod" })
  replaceMethod?: ReplaceAllShapesWithImageRequestReplaceMethodEnum;
}
