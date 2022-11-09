import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Ownednumber } from "./ownednumber";


export class InboundNumbers extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: number;

  @Metadata({ data: "json, name=numbers", elemType: shared.Ownednumber })
  numbers?: Ownednumber[];
}
