import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class LandlordControllerGetTenancyAgreementReportPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=shortName" })
  shortName: string;
}


export class LandlordControllerGetTenancyAgreementReportQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=tenancyID" })
  tenancyId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=token" })
  token: string;
}


export class LandlordControllerGetTenancyAgreementReportRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: LandlordControllerGetTenancyAgreementReportPathParams;

  @Metadata()
  queryParams: LandlordControllerGetTenancyAgreementReportQueryParams;
}


export class LandlordControllerGetTenancyAgreementReportResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  object?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
