import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FileIoDetails
/** 
 * Metadata for a File connector used by the job.
**/
export class FileIoDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filePattern" })
  filePattern?: string;
}
