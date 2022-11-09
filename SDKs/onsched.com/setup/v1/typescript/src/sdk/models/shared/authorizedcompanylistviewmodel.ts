import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AuthorizedCompanyListViewModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email?: string;
}
