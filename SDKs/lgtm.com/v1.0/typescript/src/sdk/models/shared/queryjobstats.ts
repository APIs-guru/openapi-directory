import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class QueryjobStats extends SpeakeasyBase {
  @Metadata({ data: "json, name=failed" })
  failed?: number;

  @Metadata({ data: "json, name=pending" })
  pending?: number;

  @Metadata({ data: "json, name=success-with-result" })
  successWithResult?: number;

  @Metadata({ data: "json, name=success-without-result" })
  successWithoutResult?: number;

  @Metadata({ data: "json, name=successful" })
  successful?: number;
}
