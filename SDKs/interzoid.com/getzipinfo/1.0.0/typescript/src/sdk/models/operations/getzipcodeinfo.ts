import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetzipcodeinfoQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=license" })
  license: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=zip" })
  zip: string;
}


export class GetzipcodeinfoRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetzipcodeinfoQueryParams;
}


export class Getzipcodeinfo200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=AreaSquareMiles" })
  areaSquareMiles?: string;

  @Metadata({ data: "json, name=City" })
  city?: string;

  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=Credits" })
  credits?: string;

  @Metadata({ data: "json, name=ElderlyHouseholdPercent" })
  elderlyHouseholdPercent?: string;

  @Metadata({ data: "json, name=FarmerHouseholdPercent" })
  farmerHouseholdPercent?: string;

  @Metadata({ data: "json, name=IncomePercent100k" })
  incomePercent100k?: string;

  @Metadata({ data: "json, name=IncomePercent200k" })
  incomePercent200k?: string;

  @Metadata({ data: "json, name=IncomePercent50k" })
  incomePercent50k?: string;

  @Metadata({ data: "json, name=Latitude" })
  latitude?: string;

  @Metadata({ data: "json, name=Longitude" })
  longitude?: string;

  @Metadata({ data: "json, name=MarriedHouseholdPercent" })
  marriedHouseholdPercent?: string;

  @Metadata({ data: "json, name=Population" })
  population?: string;

  @Metadata({ data: "json, name=State" })
  state?: string;

  @Metadata({ data: "json, name=ZipCode" })
  zipCode?: string;
}


export class GetzipcodeinfoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getzipcodeinfo200ApplicationJsonObject?: Getzipcodeinfo200ApplicationJson;
}
