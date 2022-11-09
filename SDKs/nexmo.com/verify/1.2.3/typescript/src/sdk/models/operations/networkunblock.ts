import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class NetworkUnblockRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.NetworkUnblock;
}


export class NetworkUnblockResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorThrottled?: shared.ErrorThrottled;

  @Metadata()
  statusCode: number;

  @Metadata()
  networkUnblockResponseForbidden?: shared.NetworkUnblockResponseForbidden;

  @Metadata()
  networkUnblockResponseNotFound?: shared.NetworkUnblockResponseNotFound;

  @Metadata()
  networkUnblockResponseOk?: shared.NetworkUnblockResponseOk;

  @Metadata()
  networkUnblock422ApplicationJsonOneOf?: any;
}
