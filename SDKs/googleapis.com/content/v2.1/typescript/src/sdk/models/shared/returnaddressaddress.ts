import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ReturnAddressAddress extends SpeakeasyBase {
  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=locality" })
  locality?: string;

  @Metadata({ data: "json, name=postalCode" })
  postalCode?: string;

  @Metadata({ data: "json, name=recipientName" })
  recipientName?: string;

  @Metadata({ data: "json, name=region" })
  region?: string;

  @Metadata({ data: "json, name=streetAddress" })
  streetAddress?: string[];
}
