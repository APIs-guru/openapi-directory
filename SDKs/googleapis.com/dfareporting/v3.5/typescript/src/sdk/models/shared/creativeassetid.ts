import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum CreativeAssetIdTypeEnum {
    Image = "IMAGE",
    Flash = "FLASH",
    Video = "VIDEO",
    Html = "HTML",
    HtmlImage = "HTML_IMAGE",
    Audio = "AUDIO"
}


// CreativeAssetId
/** 
 * Creative Asset ID.
**/
export class CreativeAssetId extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: CreativeAssetIdTypeEnum;
}
