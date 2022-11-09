import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { NameIn } from "./namein";


export class BatchNameIn extends SpeakeasyBase {
  @Metadata({ data: "json, name=properNouns", elemType: shared.NameIn })
  properNouns?: NameIn[];
}
