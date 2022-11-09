import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BwdifConfig
/** 
 * Bob Weaver Deinterlacing Filter Configuration.
**/
export class BwdifConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=deinterlaceAllFrames" })
  deinterlaceAllFrames?: boolean;

  @Metadata({ data: "json, name=mode" })
  mode?: string;

  @Metadata({ data: "json, name=parity" })
  parity?: string;
}
