import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DatafeedsFetchNowResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
