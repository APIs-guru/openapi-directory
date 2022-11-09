import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudSecuritycenterV1beta1Finding } from "./googlecloudsecuritycenterv1beta1finding";


// ListFindingsResponse
/** 
 * Response message for listing findings.
**/
export class ListFindingsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=findings", elemType: shared.GoogleCloudSecuritycenterV1beta1Finding })
  findings?: GoogleCloudSecuritycenterV1beta1Finding[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=readTime" })
  readTime?: string;

  @Metadata({ data: "json, name=totalSize" })
  totalSize?: number;
}
