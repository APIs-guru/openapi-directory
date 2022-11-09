import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Date } from "./date";


export class SearchApplicationSessionStats extends SpeakeasyBase {
  @Metadata({ data: "json, name=date" })
  date?: Date;

  @Metadata({ data: "json, name=searchSessionsCount" })
  searchSessionsCount?: string;
}
