import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPresenceByIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetPresenceByIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPresenceByIdPathParams;
}


export class GetPresenceByIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  presence?: shared.Presence;

  @Metadata()
  statusCode: number;
}
