import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InsuranceNetwork } from "./insurancenetwork";


// ListInsuranceNetworksResponse
/** 
 * Response message for InsuranceNetworkService.ListInsuranceNetworks
**/
export class ListInsuranceNetworksResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=networks", elemType: shared.InsuranceNetwork })
  networks?: InsuranceNetwork[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
