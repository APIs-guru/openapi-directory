import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum SiteContactContactTypeEnum {
    SalesPerson = "SALES_PERSON"
,    Trafficker = "TRAFFICKER"
}


// SiteContact
/** 
 * Site Contact
**/
export class SiteContact extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: string;

  @Metadata({ data: "json, name=contactType" })
  contactType?: SiteContactContactTypeEnum;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=firstName" })
  firstName?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=lastName" })
  lastName?: string;

  @Metadata({ data: "json, name=phone" })
  phone?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
