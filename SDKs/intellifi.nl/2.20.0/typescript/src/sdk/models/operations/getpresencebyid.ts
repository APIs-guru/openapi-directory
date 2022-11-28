import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPresenceByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetPresenceByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPresenceByIdPathParams;
}


export class GetPresenceByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  presence?: shared.Presence;

  @SpeakeasyMetadata()
  statusCode: number;
}
