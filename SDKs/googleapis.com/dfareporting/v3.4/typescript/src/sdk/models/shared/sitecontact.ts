import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum SiteContactContactTypeEnum {
    SalesPerson = "SALES_PERSON",
    Trafficker = "TRAFFICKER"
}


// SiteContact
/** 
 * Site Contact
**/
export class SiteContact extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: string;

  @SpeakeasyMetadata({ data: "json, name=contactType" })
  contactType?: SiteContactContactTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=firstName" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=lastName" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=phone" })
  phone?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
