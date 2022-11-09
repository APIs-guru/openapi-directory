import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CountriesRow extends SpeakeasyBase {
  @Metadata({ data: "json, name=cities" })
  cities: number;

  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=count" })
  count: number;

  @Metadata({ data: "json, name=firstUpdated" })
  firstUpdated: Date;

  @Metadata({ data: "json, name=lastUpdated" })
  lastUpdated: Date;

  @Metadata({ data: "json, name=locations" })
  locations: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=parameters" })
  parameters: string[];

  @Metadata({ data: "json, name=sources" })
  sources: number;
}
