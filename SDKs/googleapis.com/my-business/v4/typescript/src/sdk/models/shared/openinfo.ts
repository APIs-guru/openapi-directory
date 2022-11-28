import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Date } from "./date";


export enum OpenInfoStatusEnum {
    OpenForBusinessUnspecified = "OPEN_FOR_BUSINESS_UNSPECIFIED",
    Open = "OPEN",
    ClosedPermanently = "CLOSED_PERMANENTLY",
    ClosedTemporarily = "CLOSED_TEMPORARILY"
}


// OpenInfo
/** 
 * Information related to the opening state of the business.
**/
export class OpenInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=canReopen" })
  canReopen?: boolean;

  @SpeakeasyMetadata({ data: "json, name=openingDate" })
  openingDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: OpenInfoStatusEnum;
}
