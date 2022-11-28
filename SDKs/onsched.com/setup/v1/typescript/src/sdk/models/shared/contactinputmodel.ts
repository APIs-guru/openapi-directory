import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ContactInputModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=businessPhone" })
  businessPhone?: string;

  @SpeakeasyMetadata({ data: "json, name=businessPhoneExt" })
  businessPhoneExt?: string;

  @SpeakeasyMetadata({ data: "json, name=conferenceInfo" })
  conferenceInfo?: string;

  @SpeakeasyMetadata({ data: "json, name=homePhone" })
  homePhone?: string;

  @SpeakeasyMetadata({ data: "json, name=mobilePhone" })
  mobilePhone?: string;

  @SpeakeasyMetadata({ data: "json, name=preferredPhoneType" })
  preferredPhoneType?: string;

  @SpeakeasyMetadata({ data: "json, name=skypeUsername" })
  skypeUsername?: string;
}
