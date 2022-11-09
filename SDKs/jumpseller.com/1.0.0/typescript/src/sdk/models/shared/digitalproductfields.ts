import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DigitalProductFields extends SpeakeasyBase {
  @Metadata({ data: "json, name=expiration_seconds" })
  expirationSeconds?: number;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
