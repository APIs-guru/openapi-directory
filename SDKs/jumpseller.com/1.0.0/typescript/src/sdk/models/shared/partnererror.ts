import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PartnerError extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: boolean;

  @Metadata({ data: "json, name=field" })
  field?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;
}
