import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClusterCustomerAddress } from "./clustercustomeraddress";



export class ClusterCustomer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: ClusterCustomerAddress;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity?: number;
}
