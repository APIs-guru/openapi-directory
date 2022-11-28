import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PreviousPage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=before" })
  before: string;

  @SpeakeasyMetadata({ data: "json, name=link" })
  link?: string;
}
