import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AccountStatusStatistics extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: string;

  @Metadata({ data: "json, name=disapproved" })
  disapproved?: string;

  @Metadata({ data: "json, name=expiring" })
  expiring?: string;

  @Metadata({ data: "json, name=pending" })
  pending?: string;
}
