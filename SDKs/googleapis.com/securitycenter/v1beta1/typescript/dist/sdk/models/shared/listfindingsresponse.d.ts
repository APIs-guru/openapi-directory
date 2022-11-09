import { SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudSecuritycenterV1beta1Finding } from "./googlecloudsecuritycenterv1beta1finding";
/**
 * Response message for listing findings.
**/
export declare class ListFindingsResponse extends SpeakeasyBase {
    findings?: GoogleCloudSecuritycenterV1beta1Finding[];
    nextPageToken?: string;
    readTime?: string;
    totalSize?: number;
}
