import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Userinfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=family_name" })
  familyName?: string;

  @Metadata({ data: "json, name=gender" })
  gender?: string;

  @Metadata({ data: "json, name=given_name" })
  givenName?: string;

  @Metadata({ data: "json, name=hd" })
  hd?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=link" })
  link?: string;

  @Metadata({ data: "json, name=locale" })
  locale?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=picture" })
  picture?: string;

  @Metadata({ data: "json, name=verified_email" })
  verifiedEmail?: boolean;
}
