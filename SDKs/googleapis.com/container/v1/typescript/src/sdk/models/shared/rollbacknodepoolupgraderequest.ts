import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RollbackNodePoolUpgradeRequest
/** 
 * RollbackNodePoolUpgradeRequest rollbacks the previously Aborted or Failed NodePool upgrade. This will be an no-op if the last upgrade successfully completed.
**/
export class RollbackNodePoolUpgradeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=clusterId" })
  clusterId?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=nodePoolId" })
  nodePoolId?: string;

  @Metadata({ data: "json, name=projectId" })
  projectId?: string;

  @Metadata({ data: "json, name=respectPdb" })
  respectPdb?: boolean;

  @Metadata({ data: "json, name=zone" })
  zone?: string;
}
