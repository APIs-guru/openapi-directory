import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JobTemplate } from "./jobtemplate";



// ListJobTemplatesResponse
/** 
 * Response message for `TranscoderService.ListJobTemplates`.
**/
export class ListJobTemplatesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=jobTemplates", elemType: JobTemplate })
  jobTemplates?: JobTemplate[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
