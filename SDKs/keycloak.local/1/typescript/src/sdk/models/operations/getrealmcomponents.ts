import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRealmComponentsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmComponentsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=parent" })
  parent?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: string;
}


export class GetRealmComponentsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRealmComponentsPathParams;

  @Metadata()
  queryParams: GetRealmComponentsQueryParams;
}


export class GetRealmComponentsResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.ComponentRepresentation })
  componentRepresentations?: shared.ComponentRepresentation[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
