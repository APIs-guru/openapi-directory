import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleDevtoolsRemotebuildexecutionAdminV1alphaAutoscale
/** 
 * Autoscale defines the autoscaling policy of a worker pool.
**/
export class GoogleDevtoolsRemotebuildexecutionAdminV1alphaAutoscale extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maxSize" })
  maxSize?: string;

  @SpeakeasyMetadata({ data: "json, name=minSize" })
  minSize?: string;
}
