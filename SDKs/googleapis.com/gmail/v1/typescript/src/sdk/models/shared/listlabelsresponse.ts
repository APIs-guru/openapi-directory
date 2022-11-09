import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Label } from "./label";


export class ListLabelsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=labels", elemType: shared.Label })
  labels?: Label[];
}
