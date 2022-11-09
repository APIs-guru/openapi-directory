import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ManualTrigger } from "./manualtrigger";


export class ListManualTriggersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=manualTriggers", elemType: shared.ManualTrigger })
  manualTriggers?: ManualTrigger[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
