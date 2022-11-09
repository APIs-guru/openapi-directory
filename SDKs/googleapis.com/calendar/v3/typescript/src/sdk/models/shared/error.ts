import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Error extends SpeakeasyBase {
  @Metadata({ data: "json, name=domain" })
  domain?: string;

  @Metadata({ data: "json, name=reason" })
  reason?: string;
}
