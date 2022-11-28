import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetConsumerV1CustomersCountriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.CountryViewModel })
  countryViewModels?: shared.CountryViewModel[];

  @SpeakeasyMetadata()
  statusCode: number;
}
