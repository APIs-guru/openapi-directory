import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AccountUser extends SpeakeasyBase {
  @Metadata({ data: "json, name=admin" })
  admin?: boolean;

  @Metadata({ data: "json, name=emailAddress" })
  emailAddress?: string;

  @Metadata({ data: "json, name=orderManager" })
  orderManager?: boolean;

  @Metadata({ data: "json, name=paymentsAnalyst" })
  paymentsAnalyst?: boolean;

  @Metadata({ data: "json, name=paymentsManager" })
  paymentsManager?: boolean;
}
