import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CountriesRow extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cities" })
  cities: number;

  @SpeakeasyMetadata({ data: "json, name=code" })
  code: string;

  @SpeakeasyMetadata({ data: "json, name=count" })
  count: number;

  @SpeakeasyMetadata({ data: "json, name=firstUpdated" })
  firstUpdated: Date;

  @SpeakeasyMetadata({ data: "json, name=lastUpdated" })
  lastUpdated: Date;

  @SpeakeasyMetadata({ data: "json, name=locations" })
  locations: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=parameters" })
  parameters: string[];

  @SpeakeasyMetadata({ data: "json, name=sources" })
  sources: number;
}
