import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Dataset extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataEntry" })
  dataEntry?: Map<string, any>;

  @Metadata({ data: "json, name=feature" })
  feature?: Map<string, any>;

  @Metadata({ data: "json, name=model_uri" })
  modelUri?: string;

  @Metadata({ data: "json, name=query" })
  query?: Map<string, any>;
}
