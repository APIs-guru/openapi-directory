import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AccountStatusStatistics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: string;

  @SpeakeasyMetadata({ data: "json, name=disapproved" })
  disapproved?: string;

  @SpeakeasyMetadata({ data: "json, name=expiring" })
  expiring?: string;

  @SpeakeasyMetadata({ data: "json, name=pending" })
  pending?: string;
}
