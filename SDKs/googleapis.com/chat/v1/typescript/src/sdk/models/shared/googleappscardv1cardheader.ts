import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleAppsCardV1CardHeaderImageTypeEnum {
    Square = "SQUARE"
,    Circle = "CIRCLE"
}


// GoogleAppsCardV1CardHeader
/** 
 * Represents a card header.
**/
export class GoogleAppsCardV1CardHeader extends SpeakeasyBase {
  @Metadata({ data: "json, name=imageAltText" })
  imageAltText?: string;

  @Metadata({ data: "json, name=imageType" })
  imageType?: GoogleAppsCardV1CardHeaderImageTypeEnum;

  @Metadata({ data: "json, name=imageUrl" })
  imageUrl?: string;

  @Metadata({ data: "json, name=subtitle" })
  subtitle?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
