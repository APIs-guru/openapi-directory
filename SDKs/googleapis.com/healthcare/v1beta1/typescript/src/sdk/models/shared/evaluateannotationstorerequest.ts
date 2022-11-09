import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudHealthcareV1beta1AnnotationBigQueryDestination } from "./googlecloudhealthcarev1beta1annotationbigquerydestination";
import { InfoTypeConfig } from "./infotypeconfig";


// EvaluateAnnotationStoreRequest
/** 
 * Request to evaluate an Annotation store against a ground truth [Annotation store].
**/
export class EvaluateAnnotationStoreRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=bigqueryDestination" })
  bigqueryDestination?: GoogleCloudHealthcareV1beta1AnnotationBigQueryDestination;

  @Metadata({ data: "json, name=evalInfoTypeMapping" })
  evalInfoTypeMapping?: Map<string, string>;

  @Metadata({ data: "json, name=goldenInfoTypeMapping" })
  goldenInfoTypeMapping?: Map<string, string>;

  @Metadata({ data: "json, name=goldenStore" })
  goldenStore?: string;

  @Metadata({ data: "json, name=infoTypeConfig" })
  infoTypeConfig?: InfoTypeConfig;
}
