import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDatalabelingV1beta1SequentialSegment
/** 
 * Start and end position in a sequence (e.g. text segment).
**/
export class GoogleCloudDatalabelingV1beta1SequentialSegment extends SpeakeasyBase {
  @Metadata({ data: "json, name=end" })
  end?: number;

  @Metadata({ data: "json, name=start" })
  start?: number;
}
