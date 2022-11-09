import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleDevtoolsRemotebuildexecutionAdminV1alphaAutoscale
/** 
 * Autoscale defines the autoscaling policy of a worker pool.
**/
export class GoogleDevtoolsRemotebuildexecutionAdminV1alphaAutoscale extends SpeakeasyBase {
  @Metadata({ data: "json, name=maxSize" })
  maxSize?: string;

  @Metadata({ data: "json, name=minSize" })
  minSize?: string;
}
