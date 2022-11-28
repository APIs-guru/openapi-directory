import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetHackathonsComingFormatQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;
}


export class GetHackathonsComingFormatRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetHackathonsComingFormatQueryParams;
}


export class GetHackathonsComingFormatResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
