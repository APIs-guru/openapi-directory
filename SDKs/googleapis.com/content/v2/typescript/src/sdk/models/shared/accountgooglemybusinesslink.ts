import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AccountGoogleMyBusinessLink extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gmbEmail" })
  gmbEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}
