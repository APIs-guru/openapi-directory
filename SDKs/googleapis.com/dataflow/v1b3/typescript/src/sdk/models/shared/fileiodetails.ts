import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FileIoDetails
/** 
 * Metadata for a File connector used by the job.
**/
export class FileIoDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=filePattern" })
  filePattern?: string;
}
