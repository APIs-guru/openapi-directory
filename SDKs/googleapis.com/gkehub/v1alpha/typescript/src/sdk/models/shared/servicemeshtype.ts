import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ServiceMeshType
/** 
 * A unique identifier for the type of message. Display_name is intended to be human-readable, code is intended to be machine readable. There should be a one-to-one mapping between display_name and code. (i.e. do not re-use display_names or codes between message types.) See istio.analysis.v1alpha1.AnalysisMessageBase.Type
**/
export class ServiceMeshType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;
}
