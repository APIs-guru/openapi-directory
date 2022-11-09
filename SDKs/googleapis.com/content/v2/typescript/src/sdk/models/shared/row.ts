import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Value } from "./value";


export class Row extends SpeakeasyBase {
  @Metadata({ data: "json, name=cells", elemType: shared.Value })
  cells?: Value[];
}
