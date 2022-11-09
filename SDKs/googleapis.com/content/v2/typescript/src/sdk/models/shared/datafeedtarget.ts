import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DatafeedTarget extends SpeakeasyBase {
  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=excludedDestinations" })
  excludedDestinations?: string[];

  @Metadata({ data: "json, name=includedDestinations" })
  includedDestinations?: string[];

  @Metadata({ data: "json, name=language" })
  language?: string;
}
