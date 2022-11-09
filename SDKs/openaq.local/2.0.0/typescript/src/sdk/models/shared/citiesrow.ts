import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CitiesRow extends SpeakeasyBase {
  @Metadata({ data: "json, name=city" })
  city: string;

  @Metadata({ data: "json, name=count" })
  count: number;

  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=firstUpdated" })
  firstUpdated: Date;

  @Metadata({ data: "json, name=lastUpdated" })
  lastUpdated: Date;

  @Metadata({ data: "json, name=locations" })
  locations: number;

  @Metadata({ data: "json, name=parameters" })
  parameters: string[];
}
