import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DnsKey } from "./dnskey";



export class OperationDnsKeyContext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=newValue" })
  newValue?: DnsKey;

  @SpeakeasyMetadata({ data: "json, name=oldValue" })
  oldValue?: DnsKey;
}
