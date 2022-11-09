import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Genre } from "./genre";


export class GetGenresResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=genres", elemType: shared.Genre })
  genres: Genre[];
}
