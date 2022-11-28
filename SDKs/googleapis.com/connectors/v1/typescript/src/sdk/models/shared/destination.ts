import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Destination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=host" })
  host?: string;

  @SpeakeasyMetadata({ data: "json, name=port" })
  port?: number;

  @SpeakeasyMetadata({ data: "json, name=serviceAttachment" })
  serviceAttachment?: string;
}
