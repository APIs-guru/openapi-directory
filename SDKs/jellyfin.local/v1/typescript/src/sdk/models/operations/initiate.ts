import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class InitiateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  quickConnectResult?: shared.QuickConnectResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
