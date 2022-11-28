import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum CardHeaderImageStyleEnum {
    ImageStyleUnspecified = "IMAGE_STYLE_UNSPECIFIED",
    Image = "IMAGE",
    Avatar = "AVATAR"
}


export class CardHeader extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=imageStyle" })
  imageStyle?: CardHeaderImageStyleEnum;

  @SpeakeasyMetadata({ data: "json, name=imageUrl" })
  imageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=subtitle" })
  subtitle?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
