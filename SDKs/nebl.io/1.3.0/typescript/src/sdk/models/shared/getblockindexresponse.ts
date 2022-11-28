import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetBlockIndexResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=blockHash" })
  blockHash?: string;
}
