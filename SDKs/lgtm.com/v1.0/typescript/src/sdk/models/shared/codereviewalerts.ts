import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Query } from "./query";


export class CodereviewAlerts extends SpeakeasyBase {
  @Metadata({ data: "json, name=fixed" })
  fixed?: number;

  @Metadata({ data: "json, name=new" })
  new?: number;

  @Metadata({ data: "json, name=query" })
  query?: Query;
}
