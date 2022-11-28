import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GroupItemResource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
