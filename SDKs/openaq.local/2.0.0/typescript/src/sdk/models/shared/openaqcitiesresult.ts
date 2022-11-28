import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Meta } from "./meta";
import { CitiesRow } from "./citiesrow";



export class OpenAqCitiesResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: Meta;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: CitiesRow })
  results: CitiesRow[];
}
