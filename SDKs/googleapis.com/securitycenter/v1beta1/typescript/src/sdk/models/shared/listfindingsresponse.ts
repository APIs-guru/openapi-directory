import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudSecuritycenterV1beta1Finding } from "./googlecloudsecuritycenterv1beta1finding";



// ListFindingsResponse
/** 
 * Response message for listing findings.
**/
export class ListFindingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=findings", elemType: GoogleCloudSecuritycenterV1beta1Finding })
  findings?: GoogleCloudSecuritycenterV1beta1Finding[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=readTime" })
  readTime?: string;

  @SpeakeasyMetadata({ data: "json, name=totalSize" })
  totalSize?: number;
}
