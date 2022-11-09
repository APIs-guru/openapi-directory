import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DatafeedsFetchNowResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
