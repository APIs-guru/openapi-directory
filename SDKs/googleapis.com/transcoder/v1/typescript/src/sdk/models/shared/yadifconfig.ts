import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// YadifConfig
/** 
 * Yet Another Deinterlacing Filter Configuration.
**/
export class YadifConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deinterlaceAllFrames" })
  deinterlaceAllFrames?: boolean;

  @SpeakeasyMetadata({ data: "json, name=disableSpatialInterlacing" })
  disableSpatialInterlacing?: boolean;

  @SpeakeasyMetadata({ data: "json, name=mode" })
  mode?: string;

  @SpeakeasyMetadata({ data: "json, name=parity" })
  parity?: string;
}
