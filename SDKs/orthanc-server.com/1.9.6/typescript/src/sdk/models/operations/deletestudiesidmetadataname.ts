import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteStudiesIdMetadataNamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class DeleteStudiesIdMetadataNameHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-Match" })
  ifMatch?: string;
}


export class DeleteStudiesIdMetadataNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteStudiesIdMetadataNamePathParams;

  @Metadata()
  headers: DeleteStudiesIdMetadataNameHeaders;
}


export class DeleteStudiesIdMetadataNameResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
