import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetProgramsRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  getProgramsDto?: shared.GetProgramsDto;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  getProgramsDto1?: shared.GetProgramsDto;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  getProgramsDto2?: shared.GetProgramsDto;
}


export class GetProgramsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetProgramsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request?: GetProgramsRequests;

  @SpeakeasyMetadata()
  security: GetProgramsSecurity;
}


export class GetProgramsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  baseItemDtoQueryResult?: shared.BaseItemDtoQueryResult;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
