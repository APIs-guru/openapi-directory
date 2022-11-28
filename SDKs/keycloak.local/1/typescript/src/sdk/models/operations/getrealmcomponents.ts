import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRealmComponentsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmComponentsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parent" })
  parent?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: string;
}


export class GetRealmComponentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRealmComponentsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetRealmComponentsQueryParams;
}


export class GetRealmComponentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.ComponentRepresentation })
  componentRepresentations?: shared.ComponentRepresentation[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
