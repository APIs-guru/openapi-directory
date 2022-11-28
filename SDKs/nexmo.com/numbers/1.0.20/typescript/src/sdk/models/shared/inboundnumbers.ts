import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Ownednumber } from "./ownednumber";



export class InboundNumbers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=numbers", elemType: Ownednumber })
  numbers?: Ownednumber[];
}
