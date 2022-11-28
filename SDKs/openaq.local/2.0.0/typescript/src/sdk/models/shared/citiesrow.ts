import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CitiesRow extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=city" })
  city: string;

  @SpeakeasyMetadata({ data: "json, name=count" })
  count: number;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=firstUpdated" })
  firstUpdated: Date;

  @SpeakeasyMetadata({ data: "json, name=lastUpdated" })
  lastUpdated: Date;

  @SpeakeasyMetadata({ data: "json, name=locations" })
  locations: number;

  @SpeakeasyMetadata({ data: "json, name=parameters" })
  parameters: string[];
}
