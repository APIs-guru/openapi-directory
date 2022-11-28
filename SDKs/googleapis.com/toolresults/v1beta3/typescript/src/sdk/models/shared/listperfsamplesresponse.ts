import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PerfSample } from "./perfsample";



export class ListPerfSamplesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=perfSamples", elemType: PerfSample })
  perfSamples?: PerfSample[];
}
