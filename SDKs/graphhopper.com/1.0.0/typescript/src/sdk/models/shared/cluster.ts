import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Cluster extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ids" })
  ids?: string[];

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity?: number;
}
