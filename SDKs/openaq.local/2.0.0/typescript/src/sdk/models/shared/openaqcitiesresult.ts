import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Meta } from "./meta";
import { CitiesRow } from "./citiesrow";


export class OpenAqCitiesResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: Meta;

  @Metadata({ data: "json, name=results", elemType: shared.CitiesRow })
  results: CitiesRow[];
}
