import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Dimensions } from "./dimensions";


// Transcode
/** 
 * Represents information about the transcoded audio or video file.
**/
export class Transcode extends SpeakeasyBase {
  @Metadata({ data: "json, name=audioBitRateKbps" })
  audioBitRateKbps?: string;

  @Metadata({ data: "json, name=audioSampleRateHz" })
  audioSampleRateHz?: string;

  @Metadata({ data: "json, name=bitRateKbps" })
  bitRateKbps?: string;

  @Metadata({ data: "json, name=dimensions" })
  dimensions?: Dimensions;

  @Metadata({ data: "json, name=fileSizeBytes" })
  fileSizeBytes?: string;

  @Metadata({ data: "json, name=frameRate" })
  frameRate?: number;

  @Metadata({ data: "json, name=mimeType" })
  mimeType?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=transcoded" })
  transcoded?: boolean;
}
