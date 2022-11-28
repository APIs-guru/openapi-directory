import { SpeakeasyBase } from "../../../internal/utils";
import { InsuranceNetwork } from "./insurancenetwork";
/**
 * Response message for InsuranceNetworkService.ListInsuranceNetworks
**/
export declare class ListInsuranceNetworksResponse extends SpeakeasyBase {
    networks?: InsuranceNetwork[];
    nextPageToken?: string;
}
