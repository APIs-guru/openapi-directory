import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Meta } from "./meta";
import { CountriesRow } from "./countriesrow";


export class OpenAqCountriesResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: Meta;

  @Metadata({ data: "json, name=results", elemType: shared.CountriesRow })
  results: CountriesRow[];
}
