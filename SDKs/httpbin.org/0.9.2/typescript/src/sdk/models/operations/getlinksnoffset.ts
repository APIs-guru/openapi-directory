import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetLinksNOffsetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=n" })
  n: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=offset" })
  offset: number;
}


export class GetLinksNOffsetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetLinksNOffsetPathParams;
}


export class GetLinksNOffsetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
