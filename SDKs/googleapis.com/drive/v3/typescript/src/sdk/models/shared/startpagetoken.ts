import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StartPageToken extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=startPageToken" })
  startPageToken?: string;
}
