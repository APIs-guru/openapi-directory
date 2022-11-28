import { SpeakeasyBase } from "../../../internal/utils";
import { ManualTrigger } from "./manualtrigger";
export declare class ListManualTriggersResponse extends SpeakeasyBase {
    manualTriggers?: ManualTrigger[];
    nextPageToken?: string;
}
