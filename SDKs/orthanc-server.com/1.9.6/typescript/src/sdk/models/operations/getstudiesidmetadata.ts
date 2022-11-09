import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetStudiesIdMetadataPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetStudiesIdMetadataQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=expand" })
  expand?: string;
}


export class GetStudiesIdMetadataRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetStudiesIdMetadataPathParams;

  @Metadata()
  queryParams: GetStudiesIdMetadataQueryParams;
}


export class GetStudiesIdMetadataResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getStudiesIdMetadata200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
