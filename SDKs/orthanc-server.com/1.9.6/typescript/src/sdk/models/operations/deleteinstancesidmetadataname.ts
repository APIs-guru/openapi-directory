import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteInstancesIdMetadataNamePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class DeleteInstancesIdMetadataNameHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Match" })
  ifMatch?: string;
}


export class DeleteInstancesIdMetadataNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteInstancesIdMetadataNamePathParams;

  @SpeakeasyMetadata()
  headers: DeleteInstancesIdMetadataNameHeaders;
}


export class DeleteInstancesIdMetadataNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
