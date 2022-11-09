import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetHackathonsComingFormatQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;
}


export class GetHackathonsComingFormatRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetHackathonsComingFormatQueryParams;
}


export class GetHackathonsComingFormatResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
