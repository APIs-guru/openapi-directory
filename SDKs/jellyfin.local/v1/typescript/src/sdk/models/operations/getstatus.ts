import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  quickConnectState?: shared.QuickConnectStateEnum;

  @SpeakeasyMetadata()
  statusCode: number;
}
