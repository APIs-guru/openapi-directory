import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InsuranceNetwork } from "./insurancenetwork";



// ListInsuranceNetworksResponse
/** 
 * Response message for InsuranceNetworkService.ListInsuranceNetworks
**/
export class ListInsuranceNetworksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=networks", elemType: InsuranceNetwork })
  networks?: InsuranceNetwork[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
