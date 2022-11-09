import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteInstancesIdMetadataNamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class DeleteInstancesIdMetadataNameHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-Match" })
  ifMatch?: string;
}


export class DeleteInstancesIdMetadataNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteInstancesIdMetadataNamePathParams;

  @Metadata()
  headers: DeleteInstancesIdMetadataNameHeaders;
}


export class DeleteInstancesIdMetadataNameResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
