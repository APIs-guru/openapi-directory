import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DnsResourceRecord } from "./dnsresourcerecord";



// DnsAuthorizationInput
/** 
 * A DnsAuthorization resource describes a way to perform domain authorization for certificate issuance.
**/
export class DnsAuthorizationInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=domain" })
  domain?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


// DnsAuthorization
/** 
 * A DnsAuthorization resource describes a way to perform domain authorization for certificate issuance.
**/
export class DnsAuthorization extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=dnsResourceRecord" })
  dnsResourceRecord?: DnsResourceRecord;

  @SpeakeasyMetadata({ data: "json, name=domain" })
  domain?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
