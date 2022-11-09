import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { NameGeoIn } from "./namegeoin";


export class BatchNameGeoIn extends SpeakeasyBase {
  @Metadata({ data: "json, name=properNouns", elemType: shared.NameGeoIn })
  properNouns?: NameGeoIn[];
}
