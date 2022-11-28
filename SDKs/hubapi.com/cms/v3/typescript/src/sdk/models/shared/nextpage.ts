import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class NextPage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=after" })
  after: string;

  @SpeakeasyMetadata({ data: "json, name=link" })
  link?: string;
}
