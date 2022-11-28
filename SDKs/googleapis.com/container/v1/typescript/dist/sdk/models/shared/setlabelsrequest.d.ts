import { SpeakeasyBase } from "../../../internal/utils";
/**
 * SetLabelsRequest sets the Google Cloud Platform labels on a Google Container Engine cluster, which will in turn set them for Google Compute Engine resources used by that cluster
**/
export declare class SetLabelsRequest extends SpeakeasyBase {
    clusterId?: string;
    labelFingerprint?: string;
    name?: string;
    projectId?: string;
    resourceLabels?: Map<string, string>;
    zone?: string;
}
