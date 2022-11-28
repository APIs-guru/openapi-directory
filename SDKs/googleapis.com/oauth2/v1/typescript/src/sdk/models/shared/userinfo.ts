import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Userinfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=family_name" })
  familyName?: string;

  @SpeakeasyMetadata({ data: "json, name=gender" })
  gender?: string;

  @SpeakeasyMetadata({ data: "json, name=given_name" })
  givenName?: string;

  @SpeakeasyMetadata({ data: "json, name=hd" })
  hd?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=link" })
  link?: string;

  @SpeakeasyMetadata({ data: "json, name=locale" })
  locale?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=picture" })
  picture?: string;

  @SpeakeasyMetadata({ data: "json, name=verified_email" })
  verifiedEmail?: boolean;
}
