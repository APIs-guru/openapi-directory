import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PerfSample } from "./perfsample";


export class ListPerfSamplesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=perfSamples", elemType: shared.PerfSample })
  perfSamples?: PerfSample[];
}
