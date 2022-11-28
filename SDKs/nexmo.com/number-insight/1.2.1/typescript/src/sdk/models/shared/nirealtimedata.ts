import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NiRealtimeData
/** 
 * Real time data about the `number`
**/
export class NiRealtimeData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active_status" })
  activeStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=handset_status" })
  handsetStatus?: string;
}
