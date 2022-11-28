import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccountStatus } from "./accountstatus";



export class AccountstatusesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=resources", elemType: AccountStatus })
  resources?: AccountStatus[];
}
