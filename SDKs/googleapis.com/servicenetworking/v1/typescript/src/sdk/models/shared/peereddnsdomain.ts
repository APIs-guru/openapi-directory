import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PeeredDnsDomain
/** 
 * DNS domain suffix for which requests originating in the producer VPC network are resolved in the associated consumer VPC network.
**/
export class PeeredDnsDomain extends SpeakeasyBase {
  @Metadata({ data: "json, name=dnsSuffix" })
  dnsSuffix?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
