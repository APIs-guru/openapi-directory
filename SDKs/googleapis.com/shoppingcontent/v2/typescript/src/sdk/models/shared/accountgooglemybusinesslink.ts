import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AccountGoogleMyBusinessLink extends SpeakeasyBase {
  @Metadata({ data: "json, name=gmbEmail" })
  gmbEmail?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;
}
