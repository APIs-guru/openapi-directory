import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TestOrderAddress extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=fullAddress" })
  fullAddress?: string[];

  @SpeakeasyMetadata({ data: "json, name=isPostOfficeBox" })
  isPostOfficeBox?: boolean;

  @SpeakeasyMetadata({ data: "json, name=locality" })
  locality?: string;

  @SpeakeasyMetadata({ data: "json, name=postalCode" })
  postalCode?: string;

  @SpeakeasyMetadata({ data: "json, name=recipientName" })
  recipientName?: string;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: string;

  @SpeakeasyMetadata({ data: "json, name=streetAddress" })
  streetAddress?: string[];
}
