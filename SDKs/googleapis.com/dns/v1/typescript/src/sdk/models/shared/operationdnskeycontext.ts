import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DnsKey } from "./dnskey";
import { DnsKey } from "./dnskey";


export class OperationDnsKeyContext extends SpeakeasyBase {
  @Metadata({ data: "json, name=newValue" })
  newValue?: DnsKey;

  @Metadata({ data: "json, name=oldValue" })
  oldValue?: DnsKey;
}
