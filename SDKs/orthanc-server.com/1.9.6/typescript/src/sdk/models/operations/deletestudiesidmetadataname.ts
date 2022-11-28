import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteStudiesIdMetadataNamePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class DeleteStudiesIdMetadataNameHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Match" })
  ifMatch?: string;
}


export class DeleteStudiesIdMetadataNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteStudiesIdMetadataNamePathParams;

  @SpeakeasyMetadata()
  headers: DeleteStudiesIdMetadataNameHeaders;
}


export class DeleteStudiesIdMetadataNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
