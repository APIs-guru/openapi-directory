import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StartPageToken extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=startPageToken" })
  startPageToken?: string;
}
