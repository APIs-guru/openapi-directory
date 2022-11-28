import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateLibraryOptionsRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  updateLibraryOptionsDto?: shared.UpdateLibraryOptionsDto;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  updateLibraryOptionsDto1?: shared.UpdateLibraryOptionsDto;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  updateLibraryOptionsDto2?: shared.UpdateLibraryOptionsDto;
}


export class UpdateLibraryOptionsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class UpdateLibraryOptionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request?: UpdateLibraryOptionsRequests;

  @SpeakeasyMetadata()
  security: UpdateLibraryOptionsSecurity;
}


export class UpdateLibraryOptionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
