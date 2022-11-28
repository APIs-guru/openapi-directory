import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClusterConfiguration } from "./clusterconfiguration";
import { ClusterCustomer } from "./clustercustomer";



export class ClusterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=configuration" })
  configuration?: ClusterConfiguration;

  @SpeakeasyMetadata({ data: "json, name=customers", elemType: ClusterCustomer })
  customers?: ClusterCustomer[];
}
