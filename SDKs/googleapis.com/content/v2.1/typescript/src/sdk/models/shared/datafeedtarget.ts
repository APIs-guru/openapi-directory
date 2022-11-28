import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DatafeedTarget extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=excludedDestinations" })
  excludedDestinations?: string[];

  @SpeakeasyMetadata({ data: "json, name=feedLabel" })
  feedLabel?: string;

  @SpeakeasyMetadata({ data: "json, name=includedDestinations" })
  includedDestinations?: string[];

  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "json, name=targetCountries" })
  targetCountries?: string[];
}
