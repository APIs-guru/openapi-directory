import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSetupV1CompaniesTimezonesDatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=date" })
  date: Date;
}


export class GetSetupV1CompaniesTimezonesDateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSetupV1CompaniesTimezonesDatePathParams;
}


export class GetSetupV1CompaniesTimezonesDateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  timezoneViewModel?: shared.TimezoneViewModel;
}
