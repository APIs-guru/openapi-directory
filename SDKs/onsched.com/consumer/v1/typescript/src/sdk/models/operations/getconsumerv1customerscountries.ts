import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetConsumerV1CustomersCountriesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.CountryViewModel })
  countryViewModels?: shared.CountryViewModel[];

  @Metadata()
  statusCode: number;
}
