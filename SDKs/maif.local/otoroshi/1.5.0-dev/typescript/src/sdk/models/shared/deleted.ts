import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Deleted extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deleted" })
  deleted: boolean;
}
