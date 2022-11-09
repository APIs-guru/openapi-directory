import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LogLevelEnum } from "./loglevelenum";


export class ActivityLogEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=Date" })
  date?: Date;

  @Metadata({ data: "json, name=Id" })
  id?: number;

  @Metadata({ data: "json, name=ItemId" })
  itemId?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Overview" })
  overview?: string;

  @Metadata({ data: "json, name=Severity" })
  severity?: LogLevelEnum;

  @Metadata({ data: "json, name=ShortOverview" })
  shortOverview?: string;

  @Metadata({ data: "json, name=Type" })
  type?: string;

  @Metadata({ data: "json, name=UserId" })
  userId?: string;

  @Metadata({ data: "json, name=UserPrimaryImageTag" })
  userPrimaryImageTag?: string;
}
