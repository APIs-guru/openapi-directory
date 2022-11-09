import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// NiRealtimeData
/** 
 * Real time data about the `number`
**/
export class NiRealtimeData extends SpeakeasyBase {
  @Metadata({ data: "json, name=active_status" })
  activeStatus?: string;

  @Metadata({ data: "json, name=handset_status" })
  handsetStatus?: string;
}
