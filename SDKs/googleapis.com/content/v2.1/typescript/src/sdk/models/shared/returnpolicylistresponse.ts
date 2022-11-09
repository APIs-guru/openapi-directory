import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ReturnPolicy } from "./returnpolicy";


export class ReturnpolicyListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=resources", elemType: shared.ReturnPolicy })
  resources?: ReturnPolicy[];
}
