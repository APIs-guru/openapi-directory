import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class QueryjobStats extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=failed" })
  failed?: number;

  @SpeakeasyMetadata({ data: "json, name=pending" })
  pending?: number;

  @SpeakeasyMetadata({ data: "json, name=success-with-result" })
  successWithResult?: number;

  @SpeakeasyMetadata({ data: "json, name=success-without-result" })
  successWithoutResult?: number;

  @SpeakeasyMetadata({ data: "json, name=successful" })
  successful?: number;
}
