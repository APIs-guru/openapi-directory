import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Label } from "./label";



export class ListLabelsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=labels", elemType: Label })
  labels?: Label[];
}
