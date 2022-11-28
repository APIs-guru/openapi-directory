import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CdmaLocalId } from "./cdmalocalid";
import { CdmaNmr } from "./cdmanmr";



// Cdma
/** 
 * CDMA measurement
**/
export class Cdma extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=baseLat" })
  baseLat?: number;

  @SpeakeasyMetadata({ data: "json, name=baseLng" })
  baseLng?: number;

  @SpeakeasyMetadata({ data: "json, name=bsid" })
  bsid: number;

  @SpeakeasyMetadata({ data: "json, name=localId" })
  localId?: CdmaLocalId;

  @SpeakeasyMetadata({ data: "json, name=nid" })
  nid: number;

  @SpeakeasyMetadata({ data: "json, name=nmr", elemType: CdmaNmr })
  nmr?: CdmaNmr[];

  @SpeakeasyMetadata({ data: "json, name=pilotPower" })
  pilotPower?: number;

  @SpeakeasyMetadata({ data: "json, name=rz" })
  rz?: number;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid: number;
}
