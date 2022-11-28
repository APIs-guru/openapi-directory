import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetToolsGenerateUidQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=level" })
  level: string;
}


export class GetToolsGenerateUidRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetToolsGenerateUidQueryParams;
}


export class GetToolsGenerateUidResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
