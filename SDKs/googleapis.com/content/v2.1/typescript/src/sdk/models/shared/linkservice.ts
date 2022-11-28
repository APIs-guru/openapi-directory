import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class LinkService extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=service" })
  service?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}
