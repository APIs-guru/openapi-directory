import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccountTax } from "./accounttax";



export class AccounttaxListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=resources", elemType: AccountTax })
  resources?: AccountTax[];
}
