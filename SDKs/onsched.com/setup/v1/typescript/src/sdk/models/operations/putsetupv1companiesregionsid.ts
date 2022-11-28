import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutSetupV1CompaniesRegionsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PutSetupV1CompaniesRegionsIdRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  regionUpdateModel?: shared.RegionUpdateModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  regionUpdateModel1?: shared.RegionUpdateModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  regionUpdateModel2?: shared.RegionUpdateModel;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  regionUpdateModel3?: shared.RegionUpdateModel;
}


export class PutSetupV1CompaniesRegionsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutSetupV1CompaniesRegionsIdPathParams;

  @SpeakeasyMetadata()
  request?: PutSetupV1CompaniesRegionsIdRequests;
}


export class PutSetupV1CompaniesRegionsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  regionViewModel?: shared.RegionViewModel;

  @SpeakeasyMetadata()
  statusCode: number;
}
