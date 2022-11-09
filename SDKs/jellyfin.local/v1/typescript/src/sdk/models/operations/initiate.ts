import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class InitiateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  quickConnectResult?: shared.QuickConnectResult;

  @Metadata()
  statusCode: number;
}
