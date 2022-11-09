import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetInstancesIdContentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetInstancesIdContentQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=..." })
  dot: string;
}


export class GetInstancesIdContentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetInstancesIdContentPathParams;

  @Metadata()
  queryParams: GetInstancesIdContentQueryParams;
}


export class GetInstancesIdContentResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
