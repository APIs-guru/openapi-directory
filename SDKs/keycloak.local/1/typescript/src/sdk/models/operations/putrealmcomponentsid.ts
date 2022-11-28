import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutRealmComponentsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PutRealmComponentsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutRealmComponentsIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ComponentRepresentation;
}


export class PutRealmComponentsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
