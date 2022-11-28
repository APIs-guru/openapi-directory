import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Option } from "./option";



export class VariantOptionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options", elemType: Option })
  options?: Option[];
}
