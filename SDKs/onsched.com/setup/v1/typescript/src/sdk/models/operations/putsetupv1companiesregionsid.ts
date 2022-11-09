import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutSetupV1CompaniesRegionsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PutSetupV1CompaniesRegionsIdRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  regionUpdateModel?: shared.RegionUpdateModel;

  @Metadata({ data: "request, media_type=application/json" })
  regionUpdateModel1?: shared.RegionUpdateModel;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  regionUpdateModel2?: shared.RegionUpdateModel;

  @Metadata({ data: "request, media_type=text/json" })
  regionUpdateModel3?: shared.RegionUpdateModel;
}


export class PutSetupV1CompaniesRegionsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutSetupV1CompaniesRegionsIdPathParams;

  @Metadata()
  request?: PutSetupV1CompaniesRegionsIdRequests;
}


export class PutSetupV1CompaniesRegionsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  regionViewModel?: shared.RegionViewModel;

  @Metadata()
  statusCode: number;
}
