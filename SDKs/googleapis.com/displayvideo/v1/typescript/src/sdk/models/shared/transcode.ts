import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Dimensions } from "./dimensions";



// Transcode
/** 
 * Represents information about the transcoded audio or video file.
**/
export class Transcode extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=audioBitRateKbps" })
  audioBitRateKbps?: string;

  @SpeakeasyMetadata({ data: "json, name=audioSampleRateHz" })
  audioSampleRateHz?: string;

  @SpeakeasyMetadata({ data: "json, name=bitRateKbps" })
  bitRateKbps?: string;

  @SpeakeasyMetadata({ data: "json, name=dimensions" })
  dimensions?: Dimensions;

  @SpeakeasyMetadata({ data: "json, name=fileSizeBytes" })
  fileSizeBytes?: string;

  @SpeakeasyMetadata({ data: "json, name=frameRate" })
  frameRate?: number;

  @SpeakeasyMetadata({ data: "json, name=mimeType" })
  mimeType?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=transcoded" })
  transcoded?: boolean;
}
