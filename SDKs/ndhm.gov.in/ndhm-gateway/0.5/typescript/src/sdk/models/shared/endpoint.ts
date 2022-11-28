import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Endpoint extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: string;

  @SpeakeasyMetadata({ data: "json, name=connectionType" })
  connectionType?: string;

  @SpeakeasyMetadata({ data: "json, name=use" })
  use?: string;
}
