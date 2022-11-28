import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PeeredDnsDomain
/** 
 * DNS domain suffix for which requests originating in the producer VPC network are resolved in the associated consumer VPC network.
**/
export class PeeredDnsDomain extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dnsSuffix" })
  dnsSuffix?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
