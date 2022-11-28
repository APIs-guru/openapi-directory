import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Container of information related to one possible annotation that can be used in a labeling task. For example, an image classification task where images are labeled as `dog` or `cat` must reference an AnnotationSpec for `dog` and an AnnotationSpec for `cat`.
**/
export declare class GoogleCloudDatalabelingV1beta1AnnotationSpec extends SpeakeasyBase {
    description?: string;
    displayName?: string;
    index?: number;
}
