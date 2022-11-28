import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDripQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=delay" })
  delay?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=duration" })
  duration?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=numbytes" })
  numbytes?: number;
}


export class GetDripRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDripQueryParams;
}


export class GetDripResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
