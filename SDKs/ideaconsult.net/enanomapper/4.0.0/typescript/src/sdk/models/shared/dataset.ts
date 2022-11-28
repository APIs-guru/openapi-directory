import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Dataset extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataEntry" })
  dataEntry?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=feature" })
  feature?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=model_uri" })
  modelUri?: string;

  @SpeakeasyMetadata({ data: "json, name=query" })
  query?: Map<string, any>;
}
