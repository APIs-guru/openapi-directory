import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum CreativeAssetIdTypeEnum {
    Image = "IMAGE"
,    Flash = "FLASH"
,    Video = "VIDEO"
,    Html = "HTML"
,    HtmlImage = "HTML_IMAGE"
,    Audio = "AUDIO"
}


// CreativeAssetId
/** 
 * Creative Asset ID.
**/
export class CreativeAssetId extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=type" })
  type?: CreativeAssetIdTypeEnum;
}
