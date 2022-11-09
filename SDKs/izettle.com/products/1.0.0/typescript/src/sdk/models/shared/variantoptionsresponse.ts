import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Option } from "./option";


export class VariantOptionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=options", elemType: shared.Option })
  options?: Option[];
}
