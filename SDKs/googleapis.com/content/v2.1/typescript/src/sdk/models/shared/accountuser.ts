import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AccountUser extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=admin" })
  admin?: boolean;

  @SpeakeasyMetadata({ data: "json, name=emailAddress" })
  emailAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=orderManager" })
  orderManager?: boolean;

  @SpeakeasyMetadata({ data: "json, name=paymentsAnalyst" })
  paymentsAnalyst?: boolean;

  @SpeakeasyMetadata({ data: "json, name=paymentsManager" })
  paymentsManager?: boolean;

  @SpeakeasyMetadata({ data: "json, name=reportingManager" })
  reportingManager?: boolean;
}
