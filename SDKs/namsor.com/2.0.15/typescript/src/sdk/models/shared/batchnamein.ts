import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NameIn } from "./namein";



export class BatchNameIn extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=properNouns", elemType: NameIn })
  properNouns?: NameIn[];
}
