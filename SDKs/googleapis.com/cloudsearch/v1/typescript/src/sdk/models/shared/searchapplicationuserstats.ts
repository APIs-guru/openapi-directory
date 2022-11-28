import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Date } from "./date";



export class SearchApplicationUserStats extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: Date;

  @SpeakeasyMetadata({ data: "json, name=oneDayActiveUsersCount" })
  oneDayActiveUsersCount?: string;

  @SpeakeasyMetadata({ data: "json, name=sevenDaysActiveUsersCount" })
  sevenDaysActiveUsersCount?: string;

  @SpeakeasyMetadata({ data: "json, name=thirtyDaysActiveUsersCount" })
  thirtyDaysActiveUsersCount?: string;
}
