import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Destination extends SpeakeasyBase {
  @Metadata({ data: "json, name=host" })
  host?: string;

  @Metadata({ data: "json, name=port" })
  port?: number;

  @Metadata({ data: "json, name=serviceAttachment" })
  serviceAttachment?: string;
}
