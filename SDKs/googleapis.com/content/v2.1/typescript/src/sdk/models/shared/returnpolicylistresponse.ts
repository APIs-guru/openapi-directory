import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReturnPolicy } from "./returnpolicy";



export class ReturnpolicyListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=resources", elemType: ReturnPolicy })
  resources?: ReturnPolicy[];
}
