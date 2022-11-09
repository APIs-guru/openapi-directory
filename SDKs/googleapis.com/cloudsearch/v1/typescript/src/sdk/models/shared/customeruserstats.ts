import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Date } from "./date";


export class CustomerUserStats extends SpeakeasyBase {
  @Metadata({ data: "json, name=date" })
  date?: Date;

  @Metadata({ data: "json, name=oneDayActiveUsersCount" })
  oneDayActiveUsersCount?: string;

  @Metadata({ data: "json, name=sevenDaysActiveUsersCount" })
  sevenDaysActiveUsersCount?: string;

  @Metadata({ data: "json, name=thirtyDaysActiveUsersCount" })
  thirtyDaysActiveUsersCount?: string;
}
