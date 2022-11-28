import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CdmaLocalId
/** 
 * Local identification parameters of CDMA serving cell
**/
export class CdmaLocalId extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channel" })
  channel: number;

  @SpeakeasyMetadata({ data: "json, name=pnOffset" })
  pnOffset: number;
}
