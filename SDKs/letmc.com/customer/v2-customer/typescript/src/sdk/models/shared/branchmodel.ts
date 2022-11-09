import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BranchModel
/** 
 * Defines a single branch of a client.
**/
export class BranchModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=Address1" })
  address1?: string;

  @Metadata({ data: "json, name=Address2" })
  address2?: string;

  @Metadata({ data: "json, name=Address3" })
  address3?: string;

  @Metadata({ data: "json, name=Address4" })
  address4?: string;

  @Metadata({ data: "json, name=CompanyName" })
  companyName?: string;

  @Metadata({ data: "json, name=County" })
  county?: string;

  @Metadata({ data: "json, name=EMailAddress" })
  eMailAddress?: string;

  @Metadata({ data: "json, name=ETag" })
  eTag?: string;

  @Metadata({ data: "json, name=FaxPhone" })
  faxPhone?: string;

  @Metadata({ data: "json, name=LandPhone" })
  landPhone?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=OID" })
  oid?: string;

  @Metadata({ data: "json, name=Postcode" })
  postcode?: string;

  @Metadata({ data: "json, name=WebAddress" })
  webAddress?: string;
}
