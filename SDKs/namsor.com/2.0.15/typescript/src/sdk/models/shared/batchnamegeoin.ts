import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NameGeoIn } from "./namegeoin";



export class BatchNameGeoIn extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=properNouns", elemType: NameGeoIn })
  properNouns?: NameGeoIn[];
}
