import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum CardHeaderImageStyleEnum {
    ImageStyleUnspecified = "IMAGE_STYLE_UNSPECIFIED"
,    Image = "IMAGE"
,    Avatar = "AVATAR"
}


export class CardHeader extends SpeakeasyBase {
  @Metadata({ data: "json, name=imageStyle" })
  imageStyle?: CardHeaderImageStyleEnum;

  @Metadata({ data: "json, name=imageUrl" })
  imageUrl?: string;

  @Metadata({ data: "json, name=subtitle" })
  subtitle?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
