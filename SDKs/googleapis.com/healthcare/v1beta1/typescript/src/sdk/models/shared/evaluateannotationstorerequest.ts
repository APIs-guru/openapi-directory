import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudHealthcareV1beta1AnnotationBigQueryDestination } from "./googlecloudhealthcarev1beta1annotationbigquerydestination";
import { InfoTypeConfig } from "./infotypeconfig";



// EvaluateAnnotationStoreRequest
/** 
 * Request to evaluate an Annotation store against a ground truth [Annotation store].
**/
export class EvaluateAnnotationStoreRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bigqueryDestination" })
  bigqueryDestination?: GoogleCloudHealthcareV1beta1AnnotationBigQueryDestination;

  @SpeakeasyMetadata({ data: "json, name=evalInfoTypeMapping" })
  evalInfoTypeMapping?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=goldenInfoTypeMapping" })
  goldenInfoTypeMapping?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=goldenStore" })
  goldenStore?: string;

  @SpeakeasyMetadata({ data: "json, name=infoTypeConfig" })
  infoTypeConfig?: InfoTypeConfig;
}
