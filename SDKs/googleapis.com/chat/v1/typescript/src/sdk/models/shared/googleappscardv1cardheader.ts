import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleAppsCardV1CardHeaderImageTypeEnum {
    Square = "SQUARE",
    Circle = "CIRCLE"
}


// GoogleAppsCardV1CardHeader
/** 
 * Represents a card header.
**/
export class GoogleAppsCardV1CardHeader extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=imageAltText" })
  imageAltText?: string;

  @SpeakeasyMetadata({ data: "json, name=imageType" })
  imageType?: GoogleAppsCardV1CardHeaderImageTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=imageUrl" })
  imageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=subtitle" })
  subtitle?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
