import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RollbackNodePoolUpgradeRequest
/** 
 * RollbackNodePoolUpgradeRequest rollbacks the previously Aborted or Failed NodePool upgrade. This will be an no-op if the last upgrade successfully completed.
**/
export class RollbackNodePoolUpgradeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clusterId" })
  clusterId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=nodePoolId" })
  nodePoolId?: string;

  @SpeakeasyMetadata({ data: "json, name=projectId" })
  projectId?: string;

  @SpeakeasyMetadata({ data: "json, name=respectPdb" })
  respectPdb?: boolean;

  @SpeakeasyMetadata({ data: "json, name=zone" })
  zone?: string;
}
