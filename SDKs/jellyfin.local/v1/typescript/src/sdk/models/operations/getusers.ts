import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetUsersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isDisabled" })
  isDisabled?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isHidden" })
  isHidden?: boolean;
}


export class GetUsersSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetUsersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetUsersQueryParams;

  @SpeakeasyMetadata()
  security: GetUsersSecurity;
}


export class GetUsersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.UserDto })
  userDtos?: shared.UserDto[];
}
