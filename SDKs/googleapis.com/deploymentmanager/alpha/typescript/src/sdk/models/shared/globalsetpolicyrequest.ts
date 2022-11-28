import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Binding } from "./binding";
import { Policy } from "./policy";



export class GlobalSetPolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bindings", elemType: Binding })
  bindings?: Binding[];

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=policy" })
  policy?: Policy;
}
