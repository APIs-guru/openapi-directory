import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PresentationDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=backgroundColor" })
  backgroundColor?: string;

  @SpeakeasyMetadata({ data: "json, name=imageUrl" })
  imageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=textColor" })
  textColor?: string;
}
