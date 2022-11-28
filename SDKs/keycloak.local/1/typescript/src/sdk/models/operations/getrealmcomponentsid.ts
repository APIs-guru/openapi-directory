import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRealmComponentsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmComponentsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRealmComponentsIdPathParams;
}


export class GetRealmComponentsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  componentRepresentation?: shared.ComponentRepresentation;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
