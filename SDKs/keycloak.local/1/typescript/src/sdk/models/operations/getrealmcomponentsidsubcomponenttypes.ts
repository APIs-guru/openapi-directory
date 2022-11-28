import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRealmComponentsIdSubComponentTypesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmComponentsIdSubComponentTypesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: string;
}


export class GetRealmComponentsIdSubComponentTypesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRealmComponentsIdSubComponentTypesPathParams;

  @SpeakeasyMetadata()
  queryParams: GetRealmComponentsIdSubComponentTypesQueryParams;
}


export class GetRealmComponentsIdSubComponentTypesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.ComponentTypeRepresentation })
  componentTypeRepresentations?: shared.ComponentTypeRepresentation[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
