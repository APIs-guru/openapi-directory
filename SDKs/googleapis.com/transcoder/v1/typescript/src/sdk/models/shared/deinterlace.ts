import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BwdifConfig } from "./bwdifconfig";
import { YadifConfig } from "./yadifconfig";



// Deinterlace
/** 
 * Deinterlace configuration for input video.
**/
export class Deinterlace extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bwdif" })
  bwdif?: BwdifConfig;

  @SpeakeasyMetadata({ data: "json, name=yadif" })
  yadif?: YadifConfig;
}
