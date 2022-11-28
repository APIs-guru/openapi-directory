import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SessionControllerCreateLandlordLoginPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=shortName" })
  shortName: string;
}


export class SessionControllerCreateLandlordLoginQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=branchID" })
  branchId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contactDetails" })
  contactDetails: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=email" })
  email: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=forename" })
  forename: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=propertyAddress" })
  propertyAddress: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=surname" })
  surname: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=title" })
  title: string;
}


export class SessionControllerCreateLandlordLoginRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SessionControllerCreateLandlordLoginPathParams;

  @SpeakeasyMetadata()
  queryParams: SessionControllerCreateLandlordLoginQueryParams;
}


export class SessionControllerCreateLandlordLoginResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
