import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostSetupV1CompaniesRegionsRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  regionInputModel?: shared.RegionInputModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  regionInputModel1?: shared.RegionInputModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  regionInputModel2?: shared.RegionInputModel;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  regionInputModel3?: shared.RegionInputModel;
}


export class PostSetupV1CompaniesRegionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request?: PostSetupV1CompaniesRegionsRequests;
}


export class PostSetupV1CompaniesRegionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  regionViewModel?: shared.RegionViewModel;

  @SpeakeasyMetadata()
  statusCode: number;
}
