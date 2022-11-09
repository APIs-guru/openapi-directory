import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetLinksNOffsetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=n" })
  n: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=offset" })
  offset: number;
}


export class GetLinksNOffsetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetLinksNOffsetPathParams;
}


export class GetLinksNOffsetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
