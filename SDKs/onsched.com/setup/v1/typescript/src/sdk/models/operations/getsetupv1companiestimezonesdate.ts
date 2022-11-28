import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSetupV1CompaniesTimezonesDatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=date" })
  date: Date;
}


export class GetSetupV1CompaniesTimezonesDateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSetupV1CompaniesTimezonesDatePathParams;
}


export class GetSetupV1CompaniesTimezonesDateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  timezoneViewModel?: shared.TimezoneViewModel;
}
