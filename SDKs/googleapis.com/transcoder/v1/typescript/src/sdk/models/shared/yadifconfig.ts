import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// YadifConfig
/** 
 * Yet Another Deinterlacing Filter Configuration.
**/
export class YadifConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=deinterlaceAllFrames" })
  deinterlaceAllFrames?: boolean;

  @Metadata({ data: "json, name=disableSpatialInterlacing" })
  disableSpatialInterlacing?: boolean;

  @Metadata({ data: "json, name=mode" })
  mode?: string;

  @Metadata({ data: "json, name=parity" })
  parity?: string;
}
