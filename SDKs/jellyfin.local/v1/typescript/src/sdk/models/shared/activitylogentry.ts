import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LogLevelEnum } from "./loglevelenum";



export class ActivityLogEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Date" })
  date?: Date;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=ItemId" })
  itemId?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Overview" })
  overview?: string;

  @SpeakeasyMetadata({ data: "json, name=Severity" })
  severity?: LogLevelEnum;

  @SpeakeasyMetadata({ data: "json, name=ShortOverview" })
  shortOverview?: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=UserId" })
  userId?: string;

  @SpeakeasyMetadata({ data: "json, name=UserPrimaryImageTag" })
  userPrimaryImageTag?: string;
}
