import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BwdifConfig } from "./bwdifconfig";
import { YadifConfig } from "./yadifconfig";


// Deinterlace
/** 
 * Deinterlace configuration for input video.
**/
export class Deinterlace extends SpeakeasyBase {
  @Metadata({ data: "json, name=bwdif" })
  bwdif?: BwdifConfig;

  @Metadata({ data: "json, name=yadif" })
  yadif?: YadifConfig;
}
