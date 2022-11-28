import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CardHeaderImageStyleEnum {
    ImageStyleUnspecified = "IMAGE_STYLE_UNSPECIFIED",
    Image = "IMAGE",
    Avatar = "AVATAR"
}
export declare class CardHeader extends SpeakeasyBase {
    imageStyle?: CardHeaderImageStyleEnum;
    imageUrl?: string;
    subtitle?: string;
    title?: string;
}
