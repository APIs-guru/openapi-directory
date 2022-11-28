import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BranchModel
/** 
 * Defines a single branch of a client.
**/
export class BranchModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Address1" })
  address1?: string;

  @SpeakeasyMetadata({ data: "json, name=Address2" })
  address2?: string;

  @SpeakeasyMetadata({ data: "json, name=Address3" })
  address3?: string;

  @SpeakeasyMetadata({ data: "json, name=Address4" })
  address4?: string;

  @SpeakeasyMetadata({ data: "json, name=CompanyName" })
  companyName?: string;

  @SpeakeasyMetadata({ data: "json, name=County" })
  county?: string;

  @SpeakeasyMetadata({ data: "json, name=EMailAddress" })
  eMailAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=ETag" })
  eTag?: string;

  @SpeakeasyMetadata({ data: "json, name=FaxPhone" })
  faxPhone?: string;

  @SpeakeasyMetadata({ data: "json, name=LandPhone" })
  landPhone?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=OID" })
  oid?: string;

  @SpeakeasyMetadata({ data: "json, name=Postcode" })
  postcode?: string;

  @SpeakeasyMetadata({ data: "json, name=WebAddress" })
  webAddress?: string;
}
