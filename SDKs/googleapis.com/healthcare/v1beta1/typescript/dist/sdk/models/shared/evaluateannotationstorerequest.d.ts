import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudHealthcareV1beta1AnnotationBigQueryDestination } from "./googlecloudhealthcarev1beta1annotationbigquerydestination";
import { InfoTypeConfig } from "./infotypeconfig";
/**
 * Request to evaluate an Annotation store against a ground truth [Annotation store].
**/
export declare class EvaluateAnnotationStoreRequest extends SpeakeasyBase {
    bigqueryDestination?: GoogleCloudHealthcareV1beta1AnnotationBigQueryDestination;
    evalInfoTypeMapping?: Map<string, string>;
    goldenInfoTypeMapping?: Map<string, string>;
    goldenStore?: string;
    infoTypeConfig?: InfoTypeConfig;
}
