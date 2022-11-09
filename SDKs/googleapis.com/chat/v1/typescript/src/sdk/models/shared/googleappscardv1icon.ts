import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleAppsCardV1IconImageTypeEnum {
    Square = "SQUARE"
,    Circle = "CIRCLE"
}


export class GoogleAppsCardV1Icon extends SpeakeasyBase {
  @Metadata({ data: "json, name=altText" })
  altText?: string;

  @Metadata({ data: "json, name=iconUrl" })
  iconUrl?: string;

  @Metadata({ data: "json, name=imageType" })
  imageType?: GoogleAppsCardV1IconImageTypeEnum;

  @Metadata({ data: "json, name=knownIcon" })
  knownIcon?: string;
}
