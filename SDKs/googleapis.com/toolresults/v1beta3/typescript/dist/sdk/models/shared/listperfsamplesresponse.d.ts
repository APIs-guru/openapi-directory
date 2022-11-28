import { SpeakeasyBase } from "../../../internal/utils";
import { PerfSample } from "./perfsample";
export declare class ListPerfSamplesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    perfSamples?: PerfSample[];
}
