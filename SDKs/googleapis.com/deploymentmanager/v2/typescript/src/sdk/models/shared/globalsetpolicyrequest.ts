import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Binding } from "./binding";
import { Policy } from "./policy";


export class GlobalSetPolicyRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=bindings", elemType: shared.Binding })
  bindings?: Binding[];

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=policy" })
  policy?: Policy;
}
