import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BwdifConfig
/** 
 * Bob Weaver Deinterlacing Filter Configuration.
**/
export class BwdifConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deinterlaceAllFrames" })
  deinterlaceAllFrames?: boolean;

  @SpeakeasyMetadata({ data: "json, name=mode" })
  mode?: string;

  @SpeakeasyMetadata({ data: "json, name=parity" })
  parity?: string;
}
