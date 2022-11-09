import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StoreStats } from "./storestats";


export class Type extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=stats" })
  stats?: StoreStats;
}
