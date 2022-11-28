import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class LogsActionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
