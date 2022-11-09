import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetConsumerV1CustomersCountriesResponse extends SpeakeasyBase {
    contentType: string;
    countryViewModels?: shared.CountryViewModel[];
    statusCode: number;
}
