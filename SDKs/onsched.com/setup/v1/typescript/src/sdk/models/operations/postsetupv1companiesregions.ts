import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostSetupV1CompaniesRegionsRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  regionInputModel?: shared.RegionInputModel;

  @Metadata({ data: "request, media_type=application/json" })
  regionInputModel1?: shared.RegionInputModel;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  regionInputModel2?: shared.RegionInputModel;

  @Metadata({ data: "request, media_type=text/json" })
  regionInputModel3?: shared.RegionInputModel;
}


export class PostSetupV1CompaniesRegionsRequest extends SpeakeasyBase {
  @Metadata()
  request?: PostSetupV1CompaniesRegionsRequests;
}


export class PostSetupV1CompaniesRegionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  regionViewModel?: shared.RegionViewModel;

  @Metadata()
  statusCode: number;
}
