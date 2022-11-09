import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetProgramsRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  getProgramsDto?: shared.GetProgramsDto;

  @Metadata({ data: "request, media_type=application/json" })
  getProgramsDto1?: shared.GetProgramsDto;

  @Metadata({ data: "request, media_type=text/json" })
  getProgramsDto2?: shared.GetProgramsDto;
}


export class GetProgramsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetProgramsRequest extends SpeakeasyBase {
  @Metadata()
  request?: GetProgramsRequests;

  @Metadata()
  security: GetProgramsSecurity;
}


export class GetProgramsResponse extends SpeakeasyBase {
  @Metadata()
  baseItemDtoQueryResult?: shared.BaseItemDtoQueryResult;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
