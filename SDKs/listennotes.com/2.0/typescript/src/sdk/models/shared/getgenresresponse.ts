import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Genre } from "./genre";



export class GetGenresResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=genres", elemType: Genre })
  genres: Genre[];
}
