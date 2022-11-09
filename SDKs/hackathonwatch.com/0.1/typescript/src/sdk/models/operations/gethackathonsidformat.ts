import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetHackathonsIdFormatPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetHackathonsIdFormatRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetHackathonsIdFormatPathParams;
}


export class GetHackathonsIdFormatResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
