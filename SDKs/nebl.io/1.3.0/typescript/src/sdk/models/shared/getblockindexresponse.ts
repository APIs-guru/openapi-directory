import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetBlockIndexResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=blockHash" })
  blockHash?: string;
}
