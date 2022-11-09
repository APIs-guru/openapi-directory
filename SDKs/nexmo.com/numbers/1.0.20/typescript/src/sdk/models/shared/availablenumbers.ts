import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Availablenumber } from "./availablenumber";


export class AvailableNumbers extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: number;

  @Metadata({ data: "json, name=numbers", elemType: shared.Availablenumber })
  numbers?: Availablenumber[];
}
