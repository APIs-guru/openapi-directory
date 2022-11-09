import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetInstancesIdMetadataPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetInstancesIdMetadataQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=expand" })
  expand?: string;
}


export class GetInstancesIdMetadataRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetInstancesIdMetadataPathParams;

  @Metadata()
  queryParams: GetInstancesIdMetadataQueryParams;
}


export class GetInstancesIdMetadataResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getInstancesIdMetadata200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
