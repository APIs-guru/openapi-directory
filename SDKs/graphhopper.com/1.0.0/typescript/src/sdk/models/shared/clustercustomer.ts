import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ClusterCustomerAddress } from "./clustercustomeraddress";


export class ClusterCustomer extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: ClusterCustomerAddress;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=quantity" })
  quantity?: number;
}
