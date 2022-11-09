import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ClusterConfiguration } from "./clusterconfiguration";
import { ClusterCustomer } from "./clustercustomer";


export class ClusterRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=configuration" })
  configuration?: ClusterConfiguration;

  @Metadata({ data: "json, name=customers", elemType: shared.ClusterCustomer })
  customers?: ClusterCustomer[];
}
