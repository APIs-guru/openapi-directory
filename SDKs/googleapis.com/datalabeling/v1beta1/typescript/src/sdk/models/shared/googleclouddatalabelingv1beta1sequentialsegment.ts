import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDatalabelingV1beta1SequentialSegment
/** 
 * Start and end position in a sequence (e.g. text segment).
**/
export class GoogleCloudDatalabelingV1beta1SequentialSegment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=end" })
  end?: number;

  @SpeakeasyMetadata({ data: "json, name=start" })
  start?: number;
}
