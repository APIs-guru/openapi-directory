import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AuthorizedCompanyListViewModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;
}
