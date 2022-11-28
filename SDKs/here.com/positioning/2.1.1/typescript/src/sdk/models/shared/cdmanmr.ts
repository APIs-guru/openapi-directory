import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CdmaNmr
/** 
 * CDMA Network measurement
**/
export class CdmaNmr extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bsid" })
  bsid?: number;

  @SpeakeasyMetadata({ data: "json, name=channel" })
  channel: number;

  @SpeakeasyMetadata({ data: "json, name=pilotPower" })
  pilotPower?: number;

  @SpeakeasyMetadata({ data: "json, name=pnOffset" })
  pnOffset: number;
}
