import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutPatientsIdMetadataNamePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class PutPatientsIdMetadataNameHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Match" })
  ifMatch?: string;
}


export class PutPatientsIdMetadataNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutPatientsIdMetadataNamePathParams;

  @SpeakeasyMetadata()
  headers: PutPatientsIdMetadataNameHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=text/plain" })
  request?: Uint8Array;
}


export class PutPatientsIdMetadataNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
