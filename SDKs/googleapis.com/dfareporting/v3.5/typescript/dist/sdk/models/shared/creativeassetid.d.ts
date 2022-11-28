import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CreativeAssetIdTypeEnum {
    Image = "IMAGE",
    Flash = "FLASH",
    Video = "VIDEO",
    Html = "HTML",
    HtmlImage = "HTML_IMAGE",
    Audio = "AUDIO"
}
/**
 * Creative Asset ID.
**/
export declare class CreativeAssetId extends SpeakeasyBase {
    name?: string;
    type?: CreativeAssetIdTypeEnum;
}
