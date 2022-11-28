import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetzipcodeinfoQueryParams extends SpeakeasyBase {
    license: string;
    zip: string;
}
export declare class Getzipcodeinfo200ApplicationJson extends SpeakeasyBase {
    areaSquareMiles?: string;
    city?: string;
    code?: string;
    credits?: string;
    elderlyHouseholdPercent?: string;
    farmerHouseholdPercent?: string;
    incomePercent100k?: string;
    incomePercent200k?: string;
    incomePercent50k?: string;
    latitude?: string;
    longitude?: string;
    marriedHouseholdPercent?: string;
    population?: string;
    state?: string;
    zipCode?: string;
}
export declare class GetzipcodeinfoRequest extends SpeakeasyBase {
    queryParams: GetzipcodeinfoQueryParams;
}
export declare class GetzipcodeinfoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getzipcodeinfo200ApplicationJsonObject?: Getzipcodeinfo200ApplicationJson;
}
