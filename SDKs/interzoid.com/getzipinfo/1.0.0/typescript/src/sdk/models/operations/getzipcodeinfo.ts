import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetzipcodeinfoQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=license" })
  license: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=zip" })
  zip: string;
}


export class Getzipcodeinfo200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AreaSquareMiles" })
  areaSquareMiles?: string;

  @SpeakeasyMetadata({ data: "json, name=City" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Credits" })
  credits?: string;

  @SpeakeasyMetadata({ data: "json, name=ElderlyHouseholdPercent" })
  elderlyHouseholdPercent?: string;

  @SpeakeasyMetadata({ data: "json, name=FarmerHouseholdPercent" })
  farmerHouseholdPercent?: string;

  @SpeakeasyMetadata({ data: "json, name=IncomePercent100k" })
  incomePercent100k?: string;

  @SpeakeasyMetadata({ data: "json, name=IncomePercent200k" })
  incomePercent200k?: string;

  @SpeakeasyMetadata({ data: "json, name=IncomePercent50k" })
  incomePercent50k?: string;

  @SpeakeasyMetadata({ data: "json, name=Latitude" })
  latitude?: string;

  @SpeakeasyMetadata({ data: "json, name=Longitude" })
  longitude?: string;

  @SpeakeasyMetadata({ data: "json, name=MarriedHouseholdPercent" })
  marriedHouseholdPercent?: string;

  @SpeakeasyMetadata({ data: "json, name=Population" })
  population?: string;

  @SpeakeasyMetadata({ data: "json, name=State" })
  state?: string;

  @SpeakeasyMetadata({ data: "json, name=ZipCode" })
  zipCode?: string;
}


export class GetzipcodeinfoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetzipcodeinfoQueryParams;
}


export class GetzipcodeinfoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getzipcodeinfo200ApplicationJsonObject?: Getzipcodeinfo200ApplicationJson;
}
