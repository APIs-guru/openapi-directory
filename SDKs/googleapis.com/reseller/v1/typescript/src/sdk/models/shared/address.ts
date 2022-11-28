import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Address
/** 
 * JSON template for address of a customer.
**/
export class Address extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addressLine1" })
  addressLine1?: string;

  @SpeakeasyMetadata({ data: "json, name=addressLine2" })
  addressLine2?: string;

  @SpeakeasyMetadata({ data: "json, name=addressLine3" })
  addressLine3?: string;

  @SpeakeasyMetadata({ data: "json, name=contactName" })
  contactName?: string;

  @SpeakeasyMetadata({ data: "json, name=countryCode" })
  countryCode?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=locality" })
  locality?: string;

  @SpeakeasyMetadata({ data: "json, name=organizationName" })
  organizationName?: string;

  @SpeakeasyMetadata({ data: "json, name=postalCode" })
  postalCode?: string;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: string;
}
