import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StoreStats } from "./storestats";



export class Type extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=stats" })
  stats?: StoreStats;
}
