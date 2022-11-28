import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Query } from "./query";



export class CodereviewAlerts extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fixed" })
  fixed?: number;

  @SpeakeasyMetadata({ data: "json, name=new" })
  new?: number;

  @SpeakeasyMetadata({ data: "json, name=query" })
  query?: Query;
}
