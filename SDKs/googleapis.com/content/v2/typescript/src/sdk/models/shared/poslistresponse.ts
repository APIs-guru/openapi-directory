import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PosStore } from "./posstore";



export class PosListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=resources", elemType: PosStore })
  resources?: PosStore[];
}
