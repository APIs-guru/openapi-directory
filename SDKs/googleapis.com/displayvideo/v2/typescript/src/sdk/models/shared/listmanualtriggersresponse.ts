import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ManualTrigger } from "./manualtrigger";



export class ListManualTriggersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=manualTriggers", elemType: ManualTrigger })
  manualTriggers?: ManualTrigger[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
