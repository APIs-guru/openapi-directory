import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PoolsDeleteRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=abandonInstances" })
  abandonInstances?: string[];
}
