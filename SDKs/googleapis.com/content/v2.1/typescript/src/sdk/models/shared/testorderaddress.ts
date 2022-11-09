import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TestOrderAddress extends SpeakeasyBase {
  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=fullAddress" })
  fullAddress?: string[];

  @Metadata({ data: "json, name=isPostOfficeBox" })
  isPostOfficeBox?: boolean;

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
