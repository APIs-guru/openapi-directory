import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetStatusResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  quickConnectState?: shared.QuickConnectStateEnum;

  @Metadata()
  statusCode: number;
}
