import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSetupV1CompaniesRegionsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSetupV1CompaniesRegionsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSetupV1CompaniesRegionsIdPathParams;
}


export class GetSetupV1CompaniesRegionsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  regionViewModel?: shared.RegionViewModel;

  @Metadata()
  statusCode: number;
}
