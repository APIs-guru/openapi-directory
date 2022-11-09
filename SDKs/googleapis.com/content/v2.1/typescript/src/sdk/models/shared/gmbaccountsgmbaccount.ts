import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GmbAccountsGmbAccount extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=listingCount" })
  listingCount?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
