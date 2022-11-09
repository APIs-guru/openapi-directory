import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { JobTemplate } from "./jobtemplate";


// ListJobTemplatesResponse
/** 
 * Response message for `TranscoderService.ListJobTemplates`.
**/
export class ListJobTemplatesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=jobTemplates", elemType: shared.JobTemplate })
  jobTemplates?: JobTemplate[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
