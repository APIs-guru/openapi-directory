import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DigitalProductFields extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=expiration_seconds" })
  expirationSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
