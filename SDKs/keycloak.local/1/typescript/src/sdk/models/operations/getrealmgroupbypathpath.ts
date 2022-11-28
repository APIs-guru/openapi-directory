import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRealmGroupByPathPathPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=path" })
  path: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmGroupByPathPathRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRealmGroupByPathPathPathParams;
}


export class GetRealmGroupByPathPathResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  groupRepresentation?: shared.GroupRepresentation;

  @SpeakeasyMetadata()
  statusCode: number;
}
