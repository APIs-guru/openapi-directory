import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSetupV1CompaniesRegionsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSetupV1CompaniesRegionsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSetupV1CompaniesRegionsIdPathParams;
}


export class GetSetupV1CompaniesRegionsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  regionViewModel?: shared.RegionViewModel;

  @SpeakeasyMetadata()
  statusCode: number;
}
