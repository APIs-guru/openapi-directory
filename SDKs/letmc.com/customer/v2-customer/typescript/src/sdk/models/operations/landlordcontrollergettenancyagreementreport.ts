import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class LandlordControllerGetTenancyAgreementReportPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=shortName" })
  shortName: string;
}


export class LandlordControllerGetTenancyAgreementReportQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tenancyID" })
  tenancyId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=token" })
  token: string;
}


export class LandlordControllerGetTenancyAgreementReportRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: LandlordControllerGetTenancyAgreementReportPathParams;

  @SpeakeasyMetadata()
  queryParams: LandlordControllerGetTenancyAgreementReportQueryParams;
}


export class LandlordControllerGetTenancyAgreementReportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  object?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
