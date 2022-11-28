import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRealmDefaultGroupsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmDefaultGroupsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRealmDefaultGroupsPathParams;
}


export class GetRealmDefaultGroupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.GroupRepresentation })
  groupRepresentations?: shared.GroupRepresentation[];

  @SpeakeasyMetadata()
  statusCode: number;
}
