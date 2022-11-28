import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PoolsDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=abandonInstances" })
  abandonInstances?: string[];
}
