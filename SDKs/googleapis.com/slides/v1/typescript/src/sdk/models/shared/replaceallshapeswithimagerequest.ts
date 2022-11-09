import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SubstringMatchCriteria } from "./substringmatchcriteria";

export enum ReplaceAllShapesWithImageRequestImageReplaceMethodEnum {
    ImageReplaceMethodUnspecified = "IMAGE_REPLACE_METHOD_UNSPECIFIED"
,    CenterInside = "CENTER_INSIDE"
,    CenterCrop = "CENTER_CROP"
}

export enum ReplaceAllShapesWithImageRequestReplaceMethodEnum {
    CenterInside = "CENTER_INSIDE"
,    CenterCrop = "CENTER_CROP"
}


// ReplaceAllShapesWithImageRequest
/** 
 * Replaces all shapes that match the given criteria with the provided image. The images replacing the shapes are rectangular after being inserted into the presentation and do not take on the forms of the shapes.
**/
export class ReplaceAllShapesWithImageRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=containsText" })
  containsText?: SubstringMatchCriteria;

  @Metadata({ data: "json, name=imageReplaceMethod" })
  imageReplaceMethod?: ReplaceAllShapesWithImageRequestImageReplaceMethodEnum;

  @Metadata({ data: "json, name=imageUrl" })
  imageUrl?: string;

  @Metadata({ data: "json, name=pageObjectIds" })
  pageObjectIds?: string[];

  @Metadata({ data: "json, name=replaceMethod" })
  replaceMethod?: ReplaceAllShapesWithImageRequestReplaceMethodEnum;
}
