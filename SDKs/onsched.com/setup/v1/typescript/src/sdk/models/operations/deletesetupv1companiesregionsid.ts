import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteSetupV1CompaniesRegionsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeleteSetupV1CompaniesRegionsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteSetupV1CompaniesRegionsIdPathParams;
}


export class DeleteSetupV1CompaniesRegionsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  regionViewModel?: shared.RegionViewModel;

  @Metadata()
  statusCode: number;
}
