import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class NetworkUnblockRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.NetworkUnblock;
}


export class NetworkUnblockResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorThrottled?: shared.ErrorThrottled;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  networkUnblockResponseForbidden?: shared.NetworkUnblockResponseForbidden;

  @SpeakeasyMetadata()
  networkUnblockResponseNotFound?: shared.NetworkUnblockResponseNotFound;

  @SpeakeasyMetadata()
  networkUnblockResponseOk?: shared.NetworkUnblockResponseOk;

  @SpeakeasyMetadata()
  networkUnblock422ApplicationJsonOneOf?: any;
}
