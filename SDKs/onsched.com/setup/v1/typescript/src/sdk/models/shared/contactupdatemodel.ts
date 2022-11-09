import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ContactUpdateModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=businessPhone" })
  businessPhone?: string;

  @Metadata({ data: "json, name=businessPhoneExt" })
  businessPhoneExt?: string;

  @Metadata({ data: "json, name=conferenceInfo" })
  conferenceInfo?: string;

  @Metadata({ data: "json, name=homePhone" })
  homePhone?: string;

  @Metadata({ data: "json, name=mobilePhone" })
  mobilePhone?: string;

  @Metadata({ data: "json, name=preferredPhoneType" })
  preferredPhoneType?: string;

  @Metadata({ data: "json, name=skypeUsername" })
  skypeUsername?: string;
}
