import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRealmComponentsIdSubComponentTypesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmComponentsIdSubComponentTypesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: string;
}


export class GetRealmComponentsIdSubComponentTypesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRealmComponentsIdSubComponentTypesPathParams;

  @Metadata()
  queryParams: GetRealmComponentsIdSubComponentTypesQueryParams;
}


export class GetRealmComponentsIdSubComponentTypesResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.ComponentTypeRepresentation })
  componentTypeRepresentations?: shared.ComponentTypeRepresentation[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
