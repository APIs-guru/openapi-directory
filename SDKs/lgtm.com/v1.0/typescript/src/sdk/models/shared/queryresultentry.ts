import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class QueryResultEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=file" })
  file?: string;

  @SpeakeasyMetadata({ data: "json, name=line" })
  line?: number;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
