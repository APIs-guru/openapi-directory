import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateLibraryOptionsRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  updateLibraryOptionsDto?: shared.UpdateLibraryOptionsDto;

  @Metadata({ data: "request, media_type=application/json" })
  updateLibraryOptionsDto1?: shared.UpdateLibraryOptionsDto;

  @Metadata({ data: "request, media_type=text/json" })
  updateLibraryOptionsDto2?: shared.UpdateLibraryOptionsDto;
}


export class UpdateLibraryOptionsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class UpdateLibraryOptionsRequest extends SpeakeasyBase {
  @Metadata()
  request?: UpdateLibraryOptionsRequests;

  @Metadata()
  security: UpdateLibraryOptionsSecurity;
}


export class UpdateLibraryOptionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
