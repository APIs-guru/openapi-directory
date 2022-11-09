import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Endpoint extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: string;

  @Metadata({ data: "json, name=connectionType" })
  connectionType?: string;

  @Metadata({ data: "json, name=use" })
  use?: string;
}
