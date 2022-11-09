import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SessionControllerCreateLandlordLoginPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=shortName" })
  shortName: string;
}


export class SessionControllerCreateLandlordLoginQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=branchID" })
  branchId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=contactDetails" })
  contactDetails: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=email" })
  email: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=forename" })
  forename: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=propertyAddress" })
  propertyAddress: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=surname" })
  surname: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=title" })
  title: string;
}


export class SessionControllerCreateLandlordLoginRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SessionControllerCreateLandlordLoginPathParams;

  @Metadata()
  queryParams: SessionControllerCreateLandlordLoginQueryParams;
}


export class SessionControllerCreateLandlordLoginResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
